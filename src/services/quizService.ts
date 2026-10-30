import axios from "axios";
import { getMockQuestionsByFaculty, QuizQuestion } from "@/app/constant/mockQuestionBank";
import { BACKEND_URL } from "@/app/constant/constant";
import {
  Faculty,
  Question,
  QuizApiResponse,
  CacheTimeApiResponse,
  AllQuestionsApiResponse,
  AddQuestionPayload,
  AddQuestionApiResponse,
  SeedApiResponse,
  ApiErrorResponse,
} from "@/types/api";

// Re-export all types from api.ts
export type {
  Faculty,
  Question,
  QuizApiResponse,
  CacheTimeApiResponse,
  AllQuestionsApiResponse,
  AddQuestionPayload,
  AddQuestionApiResponse,
  SeedApiResponse,
  ApiErrorResponse,
};

export interface FetchQuizResult {
  questions: QuizQuestion[];
  remainingTimeSec: number;
}

// ==========================================
// 1. Helper Functions (Timer Normalization & Formatting)
// ==========================================

/**
 * Normalizes remaining cache seconds from backend response.
 * Guarantees a strictly positive integer between 1 and 120,
 * even if the backend returns a negative, zero, or expired timestamp.
 */
export const normalizeRemainingSeconds = (sec: unknown): number => {
  if (typeof sec !== "number" || isNaN(sec)) return 120;
  if (sec <= 0) {
    const mod = Math.abs(Math.floor(sec)) % 120;
    return mod === 0 ? 120 : 120 - mod;
  }
  return Math.min(Math.max(1, Math.floor(sec)), 120);
};

/**
 * Formats seconds safely into MM:SS format.
 * Prevents any negative values from ever rendering.
 */
export const formatMinutesSeconds = (seconds: number): string => {
  const safe = Math.max(0, Math.floor(seconds || 0));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

// ==========================================
// 2. Configuration & Base URLs
// ==========================================
const rawBase = (
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  BACKEND_URL
).replace(/\/+$/, "");

export const API_BASE_URL = rawBase.endsWith("/api") ? rawBase : `${rawBase}/api`;

const API_USERNAME =
  process.env.NEXT_PUBLIC_API_USERNAME ||
  process.env.BASIC_AUTH_USERNAME ||
  process.env.NEXT_PUBLIC_API_USER ||
  "admin";

const API_PASSWORD =
  process.env.NEXT_PUBLIC_API_PASSWORD ||
  process.env.BASIC_AUTH_PASSWORD ||
  process.env.NEXT_PUBLIC_API_PASS ||
  "password";

// ==========================================
// 3. Axios Client Instance with Basic Auth
// ==========================================
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  auth: {
    username: API_USERNAME,
    password: API_PASSWORD,
  },
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Map of test endpoint paths as defined in API Documentation Table 4
export const testEndpointMap: Record<Faculty, string> = {
  computer: "/computer/testcomputer",
  civil: "/civil/testcivil",
  arch: "/arch/testarch",
  elex: "/elex/testelex",
  software: "/software/testsoftware",
};

// ==========================================
// 4. Faculty Mapping Helper
// ==========================================
export const mapFacultyToKey = (slug: string): Faculty => {
  const normalized = (slug || "").toLowerCase().trim();
  if (normalized.includes("software")) return "software";
  if (normalized.includes("computer")) return "computer";
  if (normalized.includes("civil")) return "civil";
  if (normalized.includes("arch")) return "arch";
  if (normalized.includes("elec") || normalized.includes("elex")) return "elex";
  return "computer";
};

// ==========================================
// 5. Standard API Service Endpoints
// ==========================================

/**
 * 5.1 Generate Mock Test
 * GET /api/<faculty>/test<faculty>
 * Returns 100 random questions (10 per chapter across chapters 1-10)
 */
export const getComputerTest = () =>
  apiClient.get<QuizApiResponse>(testEndpointMap.computer);

export const getCivilTest = () =>
  apiClient.get<QuizApiResponse>(testEndpointMap.civil);

export const getArchTest = () =>
  apiClient.get<QuizApiResponse>(testEndpointMap.arch);

export const getElexTest = () =>
  apiClient.get<QuizApiResponse>(testEndpointMap.elex);

export const getSoftwareTest = () =>
  apiClient.get<QuizApiResponse>(testEndpointMap.software);

/**
 * 5.2 Get Remaining Test Cache Time
 * GET /api/<faculty>/newtesttime
 * Returns the remaining seconds before the faculty test cache refreshes
 */
export const getRemainingTime = (facultySlug: string = "computer") => {
  const key = mapFacultyToKey(facultySlug);
  return apiClient.get<CacheTimeApiResponse>(`/${key}/newtesttime`);
};

/**
 * 5.3 Get All Questions
 * GET /api/<faculty>
 * Fetches all questions in database for the given faculty (cached 5 min)
 */
export const getAllQuestions = (facultySlug: string = "computer") => {
  const key = mapFacultyToKey(facultySlug);
  return apiClient.get<AllQuestionsApiResponse>(`/${key}`);
};

/**
 * 5.4 Add a Single Question (Optional mutation)
 * POST /api/<faculty>/add
 */
export const addQuestion = (facultySlug: string, payload: AddQuestionPayload) => {
  const key = mapFacultyToKey(facultySlug);
  return apiClient.post<AddQuestionApiResponse>(`/${key}/add`, payload);
};

// ==========================================
// 6. Universal Question Fetcher with Multi-tier Fallback
// ==========================================
export const fetchQuestions = async (facultySlug: string): Promise<FetchQuizResult> => {
  const activeFaculty = mapFacultyToKey(facultySlug);
  const endpointPath = testEndpointMap[activeFaculty] || `/${activeFaculty}/test${activeFaculty}`;

  // 1. Direct Backend API Call
  try {
    const res = await apiClient.get<QuizApiResponse>(endpointPath);

    const questions = res.data?.data;
    if (Array.isArray(questions) && questions.length > 0) {
      return {
        questions: questions.map((q) => ({
          question: q.question,
          options: q.options || [],
          answer: q.answer,
          chapter: q.chapter,
        })),
        remainingTimeSec: normalizeRemainingSeconds(res.data?.remainingTimeSec),
      };
    }
  } catch (error: any) {
    console.warn(
      `[QuizService] Direct call to ${endpointPath} failed (${error?.response?.status || error?.message}). Trying internal proxy...`
    );
  }

  // 2. Next.js Server-side Proxy (Bypasses potential client CORS or network isolation)
  if (typeof window !== "undefined") {
    try {
      const proxyRes = await axios.get<QuizApiResponse>(
        `/api/proxy-quiz?faculty=${activeFaculty}`,
        { timeout: 8000 }
      );
      const questions = proxyRes.data?.data;
      if (Array.isArray(questions) && questions.length > 0) {
        return {
          questions: questions.map((q) => ({
            question: q.question,
            options: q.options || [],
            answer: q.answer,
            chapter: q.chapter,
          })),
          remainingTimeSec: normalizeRemainingSeconds(proxyRes.data?.remainingTimeSec),
        };
      }
    } catch (proxyError: any) {
      console.warn(
        `[QuizService] Proxy call for ${activeFaculty} failed: ${proxyError?.message}`
      );
    }
  }

  // 3. Graceful verified mock question bank fallback
  return {
    questions: getMockQuestionsByFaculty(facultySlug),
    remainingTimeSec: 120,
  };
};
