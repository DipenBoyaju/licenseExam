import axios from 'axios';
import {
  Faculty,
  QuizApiResponse,
  CacheTimeApiResponse,
  AllQuestionsApiResponse,
  AddQuestionPayload,
  AddQuestionApiResponse,
} from '../types/api';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BASE_URL || 'https://nec-backend-kh3u.onrender.com/api';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  auth: {
    username:
      process.env.NEXT_PUBLIC_API_USERNAME ||
      process.env.BASIC_AUTH_USERNAME ||
      process.env.NEXT_PUBLIC_API_USER ||
      'admin',
    password:
      process.env.NEXT_PUBLIC_API_PASSWORD ||
      process.env.BASIC_AUTH_PASSWORD ||
      process.env.NEXT_PUBLIC_API_PASS ||
      'password',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

// Map of test endpoint paths
export const testEndpointMap: Record<Faculty, string> = {
  computer: '/computer/testcomputer',
  civil: '/civil/testcivil',
  arch: '/arch/testarch',
  elex: '/elex/testelex',
  software: '/software/testsoftware',
};

// Generic API Service as documented in Section 8
export const quizService = {
  // 1. Get 100 questions mock test
  getMockTest: (faculty: Faculty) =>
    apiClient.get<QuizApiResponse>(testEndpointMap[faculty]),

  // 2. Get remaining cache time in seconds
  getRemainingCacheTime: (faculty: Faculty) =>
    apiClient.get<CacheTimeApiResponse>(`/${faculty}/newtesttime`),

  // 3. Get all questions in database
  getAllQuestions: (faculty: Faculty) =>
    apiClient.get<AllQuestionsApiResponse>(`/${faculty}`),

  // 4. Add a single question
  addQuestion: (faculty: Faculty, payload: AddQuestionPayload) =>
    apiClient.post<AddQuestionApiResponse>(`/${faculty}/add`, payload),
};

