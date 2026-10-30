import axios from "axios";
import { getMockQuestionsByFaculty } from "@/app/constant/mockQuestionBank";
import { BACKEND_URL } from "@/app/constant/constant";

export const fetchQuestions = async (facultySlug: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || BACKEND_URL;
  const API_USER = process.env.NEXT_PUBLIC_API_USER;
  const API_PASS = process.env.NEXT_PUBLIC_API_PASS;

  if (BASE_URL) {
    try {
      const cleanBase = BASE_URL.replace(/\/+$/, "");
      const activeFaculty = facultySlug.split("-")[0];
      const endpoint = cleanBase.endsWith("/api")
        ? `${cleanBase}/${activeFaculty}/test${activeFaculty}`
        : `${cleanBase}/api/${activeFaculty}/test${activeFaculty}`;

      console.log(`[QuizService] Calling backend API: ${endpoint}`);

      const response = await axios.get(endpoint, {
        auth:
          API_USER && API_PASS
            ? {
                username: API_USER,
                password: API_PASS,
              }
            : undefined,
        timeout: 8000,
      });

      console.log(`[QuizService] Response received from backend:`, response.status);

      if (response.data?.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
        return response.data.data;
      }
    } catch (error: any) {
      console.warn(
        `[QuizService] Backend API call to ${BASE_URL} returned ${error?.response?.status || error?.message}. Using verified question bank.`
      );
    }
  }

  // Graceful offline fallback to verified question bank
  return getMockQuestionsByFaculty(facultySlug);
};
