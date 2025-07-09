'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '../../../../store/quizStore';
import questions from '../../../constants/question';

export default function Page() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const setResult = useQuizStore((state) => state.setResult);

  const selectedAnswersRef = useRef(selectedAnswers);
  useEffect(() => {
    selectedAnswersRef.current = selectedAnswers;
  }, [selectedAnswers]);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (currentIndex === questions.length - 1) {
      setSubmitEnabled(true);
    }
  }, [currentIndex]);

  // ✅ FIX: useCallback so useEffect dependencies are stable
  const handleSubmit = useCallback(() => {
    let tempScore = 0;

    // ✅ Give explicit type to mistakes
    const mistakes: {
      question: string;
      correctAnswer: string;
      selectedAnswer: string;
    }[] = [];

    selectedAnswersRef.current.forEach((ans, idx) => {
      const q = questions[idx];

      // Example for your custom marks logic:
      const marks = idx < 20 ? 1 : 2;

      if (ans === q.answer) {
        tempScore += marks;
      } else if (ans !== null) {
        mistakes.push({
          question: q.question,
          correctAnswer: q.options[q.answer],
          selectedAnswer: q.options[ans],
        });
      }
    });

    setResult(tempScore, mistakes, selectedAnswersRef.current);

    setIsSubmitted(true);
    setShowConfirm(false);
    router.push('/result');
  }, [setResult, router]);

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
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
  };

  // ✅ Example for showing marks for current question:
  const currentMarks = currentIndex < 20 ? 1 : 2;

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 lg:px-18">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto pt-32 pb-20 items-start">
          <div className="md:col-span-1 bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Questions</h2>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(idx)}
                  className={`w-10 h-10 text-sm font-medium flex items-center justify-center border rounded-lg
                    ${selectedAnswers[idx] !== null ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}
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
              <p className="ml-4 text-emerald-500"> Marks: {currentMarks}</p>
              <p className=''>Time Left: <span className='text-white bg-orange-500 py-1 px-2 rounded-sm font-semibold'>{formatTime(timeLeft)}</span></p>
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
              <h2 className="text-xl font-bold text-gray-800">{currentQuestion.question}</h2>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
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
  );
}
