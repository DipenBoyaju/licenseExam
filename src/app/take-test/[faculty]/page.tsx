"use client";

import Link from "next/link";
import { BookOpen, History } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import React from "react";

export default function Page({ params }: { params: Promise<{ faculty: string }> }) {
  const resolvedParams = React.use(params);
  const facultyName = resolvedParams.faculty;
  const router = useRouter();
  const reset = useQuizStore((s) => s.reset);

  const handleStart = () => {
    reset();
    router.push(`/take-test/${facultyName}/quiz`);
  };

  const formattedTitle = facultyName.replace(/-/g, ' ');

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Platform-standard signature ambient layout light particles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 translate-y-12 w-80 h-80 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative isolate px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20">

        {/* Top Centered Header Section Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
            <span className="text-orange-600 capitalize">{formattedTitle}</span> <br />
            Practice Question Sets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-poppins max-w-2xl mx-auto leading-relaxed">
            Prepare smartly — deploy a brand-new simulated exam sequence or review your
            comprehensive history matrices to track structural performance.
          </p>
        </div>

        {/* Premium High-Fidelity Multi-Action Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">

          {/* Card 1: Start Quiz Framework */}
          <div className="group relative flex flex-col justify-between p-8 border border-gray-100 rounded-2xl bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-b-transparent hover:border-b-orange-600">
            {/* Live Synchronized Pill Tag */}
            <p className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-orange-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-700 border border-orange-500/10 shadow-3xs backdrop-blur-xs font-poppins">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              Dynamic Refresh Engine
            </p>

            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <BookOpen className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-inter tracking-tight">Start a New Quiz</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-poppins mb-8">
                Take a fresh quiz from our curated datasets structured explicitly around matching council parameters.
              </p>
            </div>

            <button
              onClick={handleStart}
              className="group/btn relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-xs hover:bg-orange-500 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer font-poppins"
            >
              Initialize Mock Test
              <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
            </button>
          </div>

          {/* Card 2: View History Layout */}
          <div className="group flex flex-col justify-between p-8 border border-gray-100 rounded-2xl bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-b-transparent hover:border-b-orange-600">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <History className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-inter tracking-tight">View Past Sets</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-poppins mb-8">
                Analyze historical attempt records, error rates, and historical response breakdowns over time.
              </p>
            </div>

            <Link
              href="/past-questions"
              className="group/btn relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-100 px-5 py-3 text-sm font-bold text-neutral-700 shadow-xs hover:bg-neutral-200/80 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] font-poppins text-center"
            >
              Review Performance Ledger
              <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}