"use client";

import { useForm } from "react-hook-form";
import { StarIcon, SparklesIcon, HeartIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

type FormData = {
  name?: string;
  email?: string;
  rating: string;
  like: string;
  improve: string;
};

export default function ReviewPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Submit action handler implementation logic goes here
    console.log("Feedback data submitted:", data);
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Platform-standard signature ambient layout light particles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28 relative">
        {/* Asymmetrical 12-column grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Contextual Headline & Platform Metrics (Spans 5 Columns) */}
          <div className="lg:col-span-5 relative">
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-6 font-poppins">
              User Experience Ledger
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
              Shape the <span className="text-orange-600 font-medium">Future</span> of the Portal
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-500 font-poppins mb-12">
              Your empirical insights directly fuel our platform optimization maps. Tell us what's performing
              smoothly and pinpoint structural modules we should expand next.
            </p>

            {/* Micro Informational Cards based on your custom design assets */}
            <div className="space-y-4 hidden sm:block">
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all duration-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 font-inter">Personalized Testing Core</h3>
                  <p className="text-xs text-gray-400 font-poppins mt-0.5">Continuous evaluation tracking custom built for Nepali graduates.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all duration-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors">
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 font-inter">Dynamic Question Analytics</h3>
                  <p className="text-xs text-gray-400 font-poppins mt-0.5">Master fields with highly focused topic sets and real-time review matrices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Floating Form Panel Container (Spans 7 Columns) */}
          <div className="relative group lg:col-span-7 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-10 group-hover:opacity-15 transition duration-1000" />

            <div className="relative bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="mb-8 border-b border-gray-100 pb-6">
                <h2 className="text-xl font-bold text-gray-900 font-inter">Share Your Assessment Experience</h2>
                <p className="text-xs text-gray-400 font-poppins mt-0.5">Help us fine-tune simulated metrics to give you an airtight edge during the real exam.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6 font-poppins">

                {/* Optional Profile Metas row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Name (Optional)</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Email (Optional)</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Score Rating Vector Select */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Overall Scoring Rating</label>
                  <div className="relative mt-2">
                    <select
                      {...register("rating", { required: "Please select a validation metric rating" })}
                      className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition appearance-none"
                    >
                      <option value="">Select Valuation Rating</option>
                      <option value="5">⭐⭐⭐⭐⭐ Excellent Simulation</option>
                      <option value="4">⭐⭐⭐⭐ Good Consistency</option>
                      <option value="3">⭐⭐⭐ Average Environment</option>
                      <option value="2">⭐⭐ Needs Expansion</option>
                      <option value="1">⭐ Poor Performance</option>
                    </select>
                  </div>
                  {errors.rating && (
                    <p className="text-red-500 text-xs mt-1.5 font-semibold font-inter">{errors.rating?.message}</p>
                  )}
                </div>

                {/* What did you like text module */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">What did you find most accurate?</label>
                  <textarea
                    rows={3}
                    {...register("like")}
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition"
                    placeholder="E.g., Timer fidelity, chapter weight alignment, code standards..."
                  />
                </div>

                {/* What can we improve text module */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">What updates should we deploy next?</label>
                  <textarea
                    rows={3}
                    {...register("improve")}
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition"
                    placeholder="Provide specific feedback on question patterns or feature enhancements..."
                  />
                </div>

                {/* Interactive Action Trigger */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3.5 text-sm font-bold text-white shadow-md hover:bg-orange-500 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? "Processing Content..." : "Submit Platform Feedback"}
                    <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}