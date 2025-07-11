import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Mistake {
  question: string;
  correctAnswer: string;
  selectedAnswer: string | null;
}

interface QuizStore {
  score: number;
  mistakes: Mistake[];
  selectedAnswers: (number | null)[];
  currentIndex: number;
  setResult: (score: number, mistakes: Mistake[], selectedAnswers: (number | null)[]) => void;
  setCurrentIndex: (index: number) => void;
  setSelectedAnswers: (answers: (number | null)[]) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      score: 0,
      mistakes: [],
      selectedAnswers: [],
      currentIndex: 0,
      setResult: (score, mistakes, selectedAnswers) =>
        set({ score, mistakes, selectedAnswers }),
      setCurrentIndex: (index) => set({ currentIndex: index }),
      setSelectedAnswers: (answers) => set({ selectedAnswers: answers }),
      reset: () => set({ score: 0, mistakes: [], selectedAnswers: [], currentIndex: 0 }),
    }),
    {
      name: 'quiz-storage', // LocalStorage key
    }
  )
);
