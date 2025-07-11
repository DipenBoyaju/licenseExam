'use client';

import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '../../../../store/quizStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TrophySpin } from 'react-loading-indicators';

const fetchQuestion = async () => {
  const res = await axios.get('/api/proxy-quiz');
  return res.data.data;
};

export default function Page() {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestion,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const questions = useMemo(() => {
    if (!data) return [];
    return [...(data.section1 || []), ...(data.section2 || [])];
  }, [data]);

  const selectedAnswers = useQuizStore((s) => s.selectedAnswers);
  const setSelectedAnswers = useQuizStore((s) => s.setSelectedAnswers);
  const currentIndex = useQuizStore((s) => s.currentIndex);
  const setCurrentIndex = useQuizStore((s) => s.setCurrentIndex);
  const setResult = useQuizStore((s) => s.setResult);

  const selectedAnswersRef = useRef(selectedAnswers);
  useEffect(() => {
    selectedAnswersRef.current = selectedAnswers;
  }, [selectedAnswers]);

  useEffect(() => {
    if (questions.length > 0 && selectedAnswers.length === 0) {
      setSelectedAnswers(Array(questions.length).fill(null));
    }
  }, [questions, selectedAnswers.length, setSelectedAnswers]);

  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (currentIndex === questions.length - 1) {
      setSubmitEnabled(true);
    }
  }, [currentIndex, questions.length]);

  const handleSubmit = useCallback(() => {
    if (!data) return;

    let tempScore = 0;

    const mistakes: {
      question: string;
      correctAnswer: string;
      selectedAnswer: string | null;
    }[] = [];

    const section1Length = data.section1?.length || 0;

    selectedAnswersRef.current.forEach((ans, idx) => {
      const q = questions[idx];
      if (!q) return;

      const marks = idx < section1Length ? 1 : 2;

      const selectedAnswer = ans !== null ? q.options[ans] : null;
      const correctAnswer = typeof q.answer === 'number' ? q.options[q.answer] : q.answer;

      if (selectedAnswer === correctAnswer) {
        tempScore += marks;
      } else if (selectedAnswer !== null) {
        mistakes.push({
          question: q.question,
          correctAnswer,
          selectedAnswer,
        });
      }
    });

    setResult(tempScore, mistakes, selectedAnswersRef.current);

    setIsSubmitted(true);
    setShowConfirm(false);
    router.push('/result');
  }, [setResult, router, questions, data]);

  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, handleSubmit]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (isSubmitted) return;
    const updated = [...selectedAnswers];
    updated[currentIndex] = optionIndex;
    setSelectedAnswers(updated);
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
  };

  const section1Length = data?.section1?.length || 0;
  const currentMarks = currentIndex < section1Length ? 1 : 2;

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen text-lg">
          <TrophySpin color={['#f54a00', '#30f500', '#00abf5', '#c400f5']} />
        </div>
      )}

      {isError && (
        <div className="flex items-center justify-center min-h-screen text-lg text-red-500">
          Failed to load questions.
        </div>
      )}

      {!isLoading && !isError && (
        <div className="bg-white min-h-screen">
          <div className="relative isolate px-6 lg:px-18">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto pt-32 pb-20 items-start">
              <div className="md:col-span-1 bg-white rounded-lg p-4 shadow-md">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Questions</h2>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {questions.map((q, idx) => (
                    <button
                      key={q.id || idx}
                      onClick={() => goToQuestion(idx)}
                      className={`w-10 h-10 text-sm font-medium flex items-center justify-center border rounded-lg
                        ${selectedAnswers[idx] !== null
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-700'
                        }
                        ${idx === currentIndex ? 'ring-2 ring-blue-500 scale-105' : ''}
                      `}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 bg-white rounded-lg p-6 shadow-md space-y-6">
                <div className="flex items-center justify-between">
                  <p className="ml-4 text-emerald-500">Mark: {currentMarks}</p>
                  <p>
                    Time Left:{' '}
                    <span className="text-white bg-orange-500 py-1 px-2 rounded-sm font-semibold">
                      {formatTime(timeLeft)}
                    </span>
                  </p>
                </div>

                <div className="text-center text-lg font-semibold text-gray-800">
                  Question {currentIndex + 1} of {questions.length}
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-800">{questions[currentIndex]?.question}</h2>
                </div>

                <div className="space-y-3">
                  {questions[currentIndex]?.options?.map((option: string, idx: number) => {
                    const isSelected = selectedAnswers[currentIndex] === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={`cursor-pointer border rounded-lg p-4 transition-all duration-200
                        ${isSelected ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-blue-50'}
                      `}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-4 justify-end">
                  <button
                    onClick={goToNext}
                    disabled={currentIndex === questions.length - 1}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    Next
                  </button>

                  <button
                    onClick={() => setShowConfirm(true)}
                    disabled={!submitEnabled || isSubmitted}
                    className={`mt-4 px-6 py-2 rounded-md text-white ${submitEnabled && !isSubmitted
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-400 cursor-not-allowed'
                      }`}
                  >
                    Submit Quiz
                  </button>
                </div>
              </div>
            </div>

            {showConfirm && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-50 z-50">
                <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">Confirm Submission</h3>
                  <p className="mb-6">Are you sure you want to submit the quiz?</p>
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => setShowConfirm(false)}
                      className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                    >
                      Yes, Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
