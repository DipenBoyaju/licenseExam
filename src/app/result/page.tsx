'use client';

import { useQuizStore } from '../../store/quizStore';
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  Award,
  BookOpen
} from "lucide-react";

export default function ResultPage() {
  const { score, mistakes } = useQuizStore();
  const router = useRouter();

  const noAnswers = score === 0 && mistakes.length === 0;

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Platform-standard signature ambient layout light particles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <main className="max-w-4xl mx-auto px-6 py-20 sm:py-28 relative">

        {/* Modernized Score Card Banner Module */}
        <div className="relative group w-full mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-10" />
          <div className="relative bg-neutral-950 p-8 sm:p-10 rounded-3xl text-center text-white shadow-xl border border-neutral-800">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20 mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-inter">
              Performance Score:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-black">
                {score} Marks
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 font-poppins mt-2 max-w-md mx-auto">
              Review your examination metrics below to align your knowledge base with the official NEC criteria.
            </p>
          </div>
        </div>

        {/* Dynamic State Branch Conditional Router */}
        {noAnswers ? (
          /* Empty/No State Case */
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-4">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900 font-inter mb-2">No Answers Submitted</p>
            <p className="text-gray-500 text-sm font-poppins max-w-sm mx-auto">
              You didn’t attempt any questions in this mock testing cycle. Launch a new set to populate metrics.
            </p>
          </div>
        ) : mistakes.length > 0 ? (
          /* Diagnostic Review Card List */
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-6">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                Review Your Mistakes ({mistakes.length})
              </h2>
            </div>

            <ul className="space-y-4">
              {mistakes.map((m, idx) => (
                <li
                  key={idx}
                  className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition hover:shadow-md border-l-4 border-l-red-500 flex flex-col gap-4"
                >
                  {/* Question header index row */}
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase font-poppins block mb-1">
                      Inaccurate Evaluation Matrix
                    </span>
                    <p className="text-base font-semibold text-gray-900 font-inter leading-relaxed">
                      {m.question}
                    </p>
                  </div>

                  {/* Asymmetrical comparative block column elements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-poppins text-sm">
                    {/* User Answer Variant */}
                    <div className="p-3.5 bg-red-50/50 border border-red-100 rounded-xl flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-0.5">Your Choice</span>
                        <span className="text-red-900 font-medium">{m.selectedAnswer ?? 'No Answer Provided'}</span>
                      </div>
                    </div>

                    {/* Accurate Key Variant */}
                    <div className="p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider mb-0.5">Verified Solution</span>
                        <span className="text-emerald-900 font-semibold">{m.correctAnswer}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          /* Perfect Performance Success Card Case */
          <div className="text-center py-16 border border-gray-100 rounded-2xl bg-emerald-50/20 shadow-xs">
            <p className="text-4xl mb-4">🎉</p>
            <p className="text-2xl font-extrabold text-emerald-800 font-inter mb-2">Perfect Score Accomplished!</p>
            <p className="text-gray-500 text-sm font-poppins max-w-sm mx-auto leading-relaxed">
              Incredible work! You logged absolute accuracy across this entire simulated subject curriculum module.
            </p>
          </div>
        )}

        {/* Global Navigation Trigger Strip */}
        <div className="text-center mt-12 pt-6 border-t border-gray-100">
          <button
            onClick={() => router.push("/take-test")}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-orange-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer font-poppins"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Return to Faculty Selection
          </button>
        </div>

      </main>
    </div>
  );
}