import {
  Faculty,
  QuizApiResponse,
  CacheTimeApiResponse,
  AllQuestionsApiResponse,
} from '../types/api';

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  'https://nec-backend-kh3u.onrender.com/api';

const USER =
  process.env.NEXT_PUBLIC_API_USERNAME ||
  process.env.BASIC_AUTH_USERNAME ||
  process.env.NEXT_PUBLIC_API_USER ||
  'admin';

const PASS =
  process.env.NEXT_PUBLIC_API_PASSWORD ||
  process.env.BASIC_AUTH_PASSWORD ||
  process.env.NEXT_PUBLIC_API_PASS ||
  'password';

const getBasicAuth = () => {
  if (typeof btoa !== 'undefined') {
    return btoa(`${USER}:${PASS}`);
  }
  return Buffer.from(`${USER}:${PASS}`).toString('base64');
};

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${getBasicAuth()}`,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `HTTP ${response.status}`);
  }

  return response.json();
}

export const fetchQuiz = {
  getTest: (faculty: Faculty) => {
    const route =
      faculty === 'computer'
        ? '/computer/testcomputer'
        : faculty === 'civil'
        ? '/civil/testcivil'
        : faculty === 'arch'
        ? '/arch/testarch'
        : faculty === 'elex'
        ? '/elex/testelex'
        : '/software/testsoftware';
    return request<QuizApiResponse>(route);
  },
  getCacheTime: (faculty: Faculty) =>
    request<CacheTimeApiResponse>(`/${faculty}/newtesttime`),
  getAll: (faculty: Faculty) => request<AllQuestionsApiResponse>(`/${faculty}`),
};

