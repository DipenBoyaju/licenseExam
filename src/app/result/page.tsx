'use client';

import { useRouter } from 'next/navigation';
import { useQuizStore } from '../../store/quizStore';

export default function ResultPage() {
  const router = useRouter()
  const { score, mistakes } = useQuizStore();

  const noAnswers = score === 0 && mistakes.length === 0;

  return (
    <main className="max-w-6xl mx-auto p-8 bg-white rounded-lg mt-20">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-orange-500">
        Your Score: <span className="text-orange-600">{score}</span>
      </h1>

      {noAnswers ? (
        <div className="text-center mt-20">
          <p className="text-3xl text-red-600 font-extrabold mb-4">⚠️ No Answers Submitted</p>
          <p className="text-gray-600 text-lg">You didn’t attempt any questions. Please try again!</p>
        </div>
      ) : mistakes.length > 0 ? (
        <>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Review Your Mistakes
          </h2>

          <ul className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {mistakes.map((m, idx) => (
              <li
                key={idx}
                className="p-6 bg-red-50 border border-red-300 rounded-lg shadow-sm transition hover:shadow-md"
              >
                <p className="mb-2 text-gray-900 font-semibold">
                  <span className="mr-2 text-red-600">❌</span>
                  Question:
                </p>
                <p className="mb-4 text-gray-700 italic">{m.question}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-red-700 mb-1">Your Answer</p>
                    <p className="bg-red-100 rounded-md p-3 text-red-900">{m.selectedAnswer ?? 'No answer'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-700 mb-1">Correct Answer</p>
                    <p className="bg-green-100 rounded-md p-3 text-green-900">{m.correctAnswer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="text-center mt-20">
          <p className="text-3xl text-green-600 font-extrabold mb-4">🎉 Perfect! No mistakes!</p>
          <p className="text-gray-600 text-lg">Awesome job, you got all questions right!</p>
        </div>
      )}

      <div className="text-center mt-20">
        <button
          onClick={() => window.history.go(-2)}
          className="px-6 py-3 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-500 active:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-orange-400 uppercase font-semibold"
        >
          Back
        </button>
      </div>

    </main>
  );
}
