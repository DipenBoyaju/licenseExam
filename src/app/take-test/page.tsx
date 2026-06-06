"use client";

import { useRouter } from "next/navigation";
import { faculty } from "../constant/faculty";

export default function Page() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Structural ambient lighting blurred shapes matching your platform signature */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      {/* Balanced padding constraints to gracefully clear your global header navigation */}
      <div className="relative isolate px-6 pt-24 sm:pt-32 lg:px-8 max-w-7xl mx-auto pb-24">

        {/* Header Section styled with asymmetrical narrative depth */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative">

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
            Select Your <span className="text-orange-600 font-medium">Engineering Field</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-500 font-poppins leading-relaxed">
            Choose your specialized discipline to initialize an automated computer-based mock test framework
            tailored strictly to the official NEC examination guidelines.
          </p>
        </div>

        {/* Premium High-Fidelity Interactive Faculty Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {faculty.map((branch) => (
            <div
              key={branch.id}
              onClick={() => router.push(`/take-test/${branch.slug}`)}
              className="group cursor-pointer p-6 border border-gray-100 rounded-2xl bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 hover:border-b-orange-600 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                {/* Micro-interactive animated icon canvas container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <div className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    {branch.icon}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight group-hover:text-orange-600 transition-colors">
                    {branch.title}
                  </h2>
                  <p className="text-sm text-gray-500 font-poppins pt-2 leading-relaxed">
                    {branch.desc}
                  </p>
                </div>
              </div>

              {/* Minimalist interactive call-to-action anchor strip */}
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-end">
                <span className="text-xs font-bold text-gray-400 group-hover:text-orange-600 flex items-center gap-1 transition-colors font-poppins">
                  Launch Simulated Exam
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}