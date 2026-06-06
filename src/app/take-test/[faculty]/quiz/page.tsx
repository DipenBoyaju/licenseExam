'use client';

import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '../../../../store/quizStore';
import { useQuery } from '@tanstack/react-query';
import { TrophySpin } from 'react-loading-indicators';
import { fetchQuestions } from '@/services/quizService';
import {
  Timer,
  CheckSquare,
  ChevronRight,
  HelpCircle,
  Award,
  AlertCircle
} from "lucide-react";

export default function Page({ params }: { params: Promise<{ faculty: string }> }) {
  const router = useRouter();
  const { faculty } = React.use(params);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['questions', faculty],
    queryFn: () => fetchQuestions(faculty),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const facultyName = faculty.replaceAll("-", " ");

  const questions = useMemo(() => {
    return Array.isArray(data) ? data : [];
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
    if (questions.length > 0 && selectedAnswers.length !== questions.length) {
      setSelectedAnswers(Array(questions.length).fill(null));
    }
  }, [questions.length, selectedAnswers.length, setSelectedAnswers]);

  // Timer Initialization 
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
  useEffect(() => {
    if (data?.remainingTimeSec) {
      setTimeLeft(data.remainingTimeSec);
    }
  }, [data?.remainingTimeSec]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (currentIndex === questions.length - 1) {
      setSubmitEnabled(true);
    }
  }, [currentIndex, questions.length]);

  const handleSubmit = useCallback(() => {
    if (questions.length === 0) return;

    let totalScore = 0;

    const mistakes: {
      question: string;
      correctAnswer: string;
      selectedAnswer: string | null;
    }[] = [];

    selectedAnswersRef.current.forEach((ansIndex, idx) => {
      const q = questions[idx];
      if (!q) return;

      const selectedAnswer = ansIndex !== null ? q.options[ansIndex] : null;
      const correctAnswer = q.answer;

      if (selectedAnswer === correctAnswer) {
        totalScore += 1;
      } else if (selectedAnswer !== null) {
        mistakes.push({
          question: q.question,
          correctAnswer,
          selectedAnswer,
        });
      }
    });

    setResult(totalScore, mistakes, selectedAnswersRef.current);

    setIsSubmitted(true);
    setShowConfirm(false);
    router.push('/result');
  }, [questions, setResult, router]);

  useEffect(() => {
    if (isSubmitted || questions.length === 0) return;

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
  }, [isSubmitted, handleSubmit, questions.length]);

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

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen text-lg bg-neutral-50">
          <TrophySpin color={['#f97316', '#f59e0b', '#3b82f6', '#a855f7']} />
        </div>
      )}

      {isError && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-neutral-50">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-4">
            <AlertCircle className="h-6 w-6" />
          </div>
          <p className="text-xl font-bold text-gray-900 font-inter">Sync Pipeline Failure</p>
          <p className="text-gray-500 text-sm mt-1 max-w-xs font-poppins">
            Failed to parse official questions. Verify network integrity and refresh.
          </p>
        </div>
      )}

      {!isLoading && !isError && (
        <div className="bg-neutral-50/50 min-h-screen relative overflow-hidden font-poppins text-gray-700">
          {/* Subtle brand ambient lighting blur particles */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">

            {/* Integrated Control Header Ribbon */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 mb-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/10 capitalize font-inter">
                  {facultyName}
                </span>
                <h1 className="text-lg font-bold text-gray-900 font-inter mt-1.5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-500" />
                  NEC Mock Assessment Matrix
                </h1>
              </div>

              <div className="flex items-center gap-4 self-start sm:self-center">
                <div className="text-right">
                  <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase">Valuation</span>
                  <span className="text-sm font-bold text-emerald-600 font-inter">100 Marks Total</span>
                </div>
                <div className="h-8 w-px bg-gray-100" />
                <div className="flex items-center gap-2.5 bg-neutral-950 px-4 py-2.5 rounded-xl text-white shadow-xs">
                  <Timer className="w-4 h-4 text-orange-400 animate-pulse shrink-0" />
                  <div className="font-mono text-sm font-bold tracking-wide">
                    {formatTime(timeLeft)}
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetric Split Workspace Framework */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Responsive Metric Navigator Card (Spans 4 Columns) */}
              <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs lg:sticky lg:top-28">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                  <h2 className="text-sm font-bold text-gray-900 font-inter flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-orange-500" />
                    Question Navigator
                  </h2>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-md text-gray-500 font-medium">
                    {selectedAnswers.filter(a => a !== null).length} / {questions.length} Done
                  </span>
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2 max-h-64 lg:max-h-[calc(100vh-22rem)] overflow-y-auto p-1 custom-scrollbar">
                  {questions?.map((_, i) => {
                    const isAnswered = selectedAnswers[i] !== null;
                    const isCurrent = i === currentIndex;
                    return (
                      <button
                        key={i}
                        onClick={() => goToQuestion(i)}
                        className={`w-full aspect-square text-xs font-bold rounded-xl flex items-center justify-center border transition-all duration-200 cursor-pointer
                          ${isAnswered
                            ? 'bg-emerald-500 text-white border-emerald-500 shadow-xs shadow-emerald-500/20'
                            : 'bg-neutral-50 text-gray-600 border-gray-100 hover:bg-neutral-100'
                          }
                          ${isCurrent ? 'ring-2 ring-blue-500 border-transparent scale-105 shadow-md' : ''}
                        `}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Central Assessment Question View Canvas (Spans 8 Columns) */}
              <div className="lg:col-span-8 bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">

                {/* Meta-Progress Strip Tracking Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <span>Diagnostic Node</span>
                    <span className="font-inter text-gray-900">
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Core Text Query Target Panel */}
                <div className="pt-2 flex gap-4 items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-inter leading-relaxed pt-0.5">
                    {questions[currentIndex]?.question}
                  </h2>
                </div>

                {/* Option Node Choice Matrix Stack */}
                <div className="space-y-3 pt-2">
                  {questions[currentIndex]?.options?.map((option: string, idx: number) => {
                    const isSelected = selectedAnswers[currentIndex] === idx;
                    const labelPrefix = ["A", "B", "C", "D"][idx] || String.fromCharCode(65 + idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={`group cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all duration-200 shadow-3xs
                          ${isSelected
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10'
                            : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-neutral-50/50'
                          }
                        `}
                      >
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold border font-inter transition-all
                          ${isSelected
                            ? 'bg-blue-700/50 border-white/20 text-white'
                            : 'bg-neutral-50 border-gray-100 text-gray-500 group-hover:bg-white'
                          }
                        `}>
                          {labelPrefix}
                        </span>
                        <span className={`text-sm sm:text-base font-medium leading-relaxed
                          ${isSelected ? 'text-white' : 'text-gray-700'}
                        `}>
                          {option}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Engine Controller Command Navigation Row */}
                <div className="flex flex-wrap gap-4 justify-end pt-4 border-t border-gray-100">
                  <button
                    onClick={goToNext}
                    disabled={currentIndex === questions.length - 1}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-neutral-50 transition active:scale-98 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5 cursor-pointer"
                  >
                    Next Question
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setShowConfirm(true)}
                    disabled={!submitEnabled || isSubmitted}
                    className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-98 shadow-xs cursor-pointer
                      ${submitEnabled && !isSubmitted
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-600/10'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    Submit Evaluation
                  </button>
                </div>
              </div>

            </div>

            {/* Premium Confirmation Backdrop Overlay Modal */}
            {showConfirm && (
              <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fade-in">
                <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs" onClick={() => setShowConfirm(false)} />
                <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 relative z-10 transition-transform scale-100 animate-scale-up">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-inter mb-1">Confirm Evaluation Submission</h3>
                  <p className="text-gray-500 text-sm font-poppins leading-relaxed mb-6">
                    Are you sure you want to lock in your answers and finalize this mock assessment cycle?
                  </p>
                  <div className="flex justify-end gap-3 font-poppins text-sm font-semibold">
                    <button
                      onClick={() => setShowConfirm(false)}
                      className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-neutral-50 transition cursor-pointer"
                    >
                      Continue Testing
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/10 transition cursor-pointer"
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