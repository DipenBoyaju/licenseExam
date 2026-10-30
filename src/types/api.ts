export type Faculty = 'computer' | 'civil' | 'arch' | 'elex' | 'software';

export interface Question {
  _id: string;
  question: string;
  answer: string;
  chapter: string;
  options: string[];
}

export interface QuizApiResponse {
  status: boolean;
  remainingTimeSec: number;
  data: Question[];
}

export interface CacheTimeApiResponse {
  status: boolean;
  remainingTimeSec: number;
}

export interface AllQuestionsApiResponse {
  status: boolean;
  fromCache: boolean;
  remainingTimeSec?: number;
  data: Question[];
}

export interface AddQuestionPayload {
  question: string;
  answer: string;
  chapter: string;
  options: string[];
}

export interface AddQuestionApiResponse {
  status: boolean;
  message: string;
  data: Question;
}

export interface SeedApiResponse {
  status: boolean;
  message: string;
  count: number;
}

export interface ApiErrorResponse {
  status?: boolean;
  message: string;
}

