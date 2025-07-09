import { create } from 'zustand';

export interface Mistake {
  question: string;
  correctAnswer: string;
  selectedAnswer: string | null;
}

interface QuizStore {
  score: number;
  mistakes: Mistake[];
  selectedAnswers: (number | null)[];
  setResult: (score: number, mistakes: Mistake[], selectedAnswers: (number | null)[]) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  score: 0,
  mistakes: [],
  selectedAnswers: [],
  setResult: (score, mistakes, selectedAnswers) =>
    set({ score, mistakes, selectedAnswers }),
}));
