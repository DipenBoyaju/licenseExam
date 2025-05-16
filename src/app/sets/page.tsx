'use client';

import { useState } from 'react';
import questions from '../constants/question'

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (optionIndex: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate px-6  lg:px-18">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto pt-32 pb-20">
          {/* Left Panel */}
          <div className="md:col-span-1 bg-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Questions</h2>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {questions.map((q, index) => (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(index)}
                  className={`w-10 h-10 text-sm font-medium flex items-center justify-center border rounded-lg transition-all duration-200
                  ${selectedAnswers[index] !== null ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}
                  ${index === currentIndex ? 'ring-2 ring-blue-500 scale-105' : ''}
                `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:col-span-3 bg-white rounded-lg p-6 shadow-md space-y-6">
            {/* Question Progress Text */}
            <div className="text-center text-lg font-semibold text-gray-800">
              Question {currentIndex + 1} of {questions.length}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div>
              <h2 className="text-xl font-bold text-gray-800">{currentQuestion.question}</h2>
            </div>

            {/* Options */}
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

            {/* Navigation */}
            <div className="flex justify-end">
              <button
                onClick={goToNext}
                disabled={currentIndex === questions.length - 1}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
