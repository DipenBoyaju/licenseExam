import axios from "axios";
import { getMockQuestionsByFaculty } from "@/app/constant/mockQuestionBank";

export const fetchQuestions = async (facultySlug: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_USER = process.env.NEXT_PUBLIC_API_USER;
  const API_PASS = process.env.NEXT_PUBLIC_API_PASS;

  if (BASE_URL) {
    try {
      const activeFaculty = facultySlug.split("-")[0];
      const response = await axios.get(`${BASE_URL}/${activeFaculty}/test${activeFaculty}`, {
        auth: {
          username: API_USER || "",
          password: API_PASS || "",
        },
        timeout: 5000,
      });

      if (response.data?.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
        return response.data.data;
      }
    } catch {
      // Fallback to local curated question bank below
    }
  }

  // Graceful offline fallback to verified question bank
  return getMockQuestionsByFaculty(facultySlug);
};
