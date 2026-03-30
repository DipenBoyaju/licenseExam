"use client";

import {
  UserGroupIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

const values = [
  {
    title: "Our Mission",
    desc: "To empower Nepali engineering graduates by providing the most accurate and high-fidelity exam simulation available.",
    icon: UserGroupIcon,
  },
  {
    title: "Quality Assurance",
    desc: "Our question banks are reviewed by licensed professionals to ensure alignment with the NEC Act 2055 standards.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Accessibility",
    desc: "We believe professional growth should be accessible to all, providing free resources alongside premium deep-dive analytics.",
    icon: GlobeAltIcon,
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section with your branding blur */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-inter">
              About the <span className="text-orange-600">Portal</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-poppins">
              The NEC License Exam Portal is a specialized platform built to help engineers navigate
              the transition from academia to professional practice in Nepal.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section matching your Feature Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-start rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-orange-500 transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 mb-4">
                  <value.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 font-inter">{value.title}</h3>
                <p className="text-gray-600 text-sm font-poppins leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section - This is crucial for AdSense "Value Content" */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 prose prose-orange">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why We Started</h2>
          <div className="space-y-6 text-gray-600 leading-7 font-poppins">
            <p>
              With the recent changes in the <strong>Nepal Engineering Council Act</strong>, the
              introduction of the mandatory licensing exam created a need for structured,
              localized preparation material. We saw graduates struggling with outdated PDFs
              and scattered resources.
            </p>
            <p>
              Our platform centralizes the syllabus for <strong>Civil, Computer, Electrical, and
                Electronics Engineering</strong>. By utilizing modern web technology, we offer
              a simulation that replicates the 2-hour pressure of the actual CBT (Computer
              Based Test) held by the Council.
            </p>
            <div className="rounded-lg bg-orange-50 p-6 border-l-4 border-orange-600 italic">
              "Our goal is not just to help you pass, but to ensure you have a firm grasp of the
              professional ethics and technical standards required for the development of Nepal."
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}