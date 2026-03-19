import axios from "axios";

export const fetchQuestions = async (facultySlug: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_USER = process.env.NEXT_PUBLIC_API_USER;
  const API_PASS = process.env.NEXT_PUBLIC_API_PASS;

  const activeFaculty = facultySlug.split("-")[0];
  const response = await axios.get(`${BASE_URL}/${activeFaculty}/test${activeFaculty}`, {
    auth: {
      username: API_USER || '',
      password: API_PASS || '',
    },
  });
  return response.data.data;
};