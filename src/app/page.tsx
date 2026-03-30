"use client";

import {
  CheckCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ScaleIcon } from "lucide-react";
import Testimony from "@/components/Testimony";

const features = [
  {
    title: "5,000+ Practice Questions",
    desc: "Extensive question bank covering the latest NEC syllabus.",
    icon: AcademicCapIcon,
  },
  {
    title: "Realistic Exam Simulator",
    desc: "Timed tests that replicate real exam conditions to boost confidence.",
    icon: ClockIcon,
  },
  {
    title: "Detailed Explanations",
    desc: "Step-by-step solutions and references to help you learn better.",
    icon: LightBulbIcon,
  },
  {
    title: "Progress Tracking",
    desc: "Monitor your scores, weak areas, and improvement over time.",
    icon: ChartBarIcon,
  },
  {
    title: "Expert-Curated Content",
    desc: "Questions crafted by licensed engineers and educators.",
    icon: CheckCircleIcon,
  },
  {
    title: "Access Anywhere",
    desc: "Study anytime on desktop, tablet, or mobile.",
    icon: DevicePhoneMobileIcon,
  },
];

const faqs = [
  {
    q: "Is this platform free?",
    a: "We offer free practice questions and premium plans for advanced mock tests and analytics.",
  },
  {
    q: "What is the structure and duration of the NEC license exam?",
    a: "The Nepal Engineering Council (NEC) license exam is a 2-hour computer-based test comprising approximately 80 questions. It includes 60 one-mark and 20 two-mark questions, focusing on core engineering concepts and professional ethics. There is no negative marking in the exam.",
  },
  {
    q: "Who is eligible to apply for the NEC license exam?",
    a: "To be eligible for the NEC license exam, candidates must hold a Bachelor's degree in engineering from a university recognized by the Nepal Engineering Council. Foreign degree holders must obtain an equivalence certificate from Tribhuvan University.",
  },
  {
    q: "What documents are required for the NEC license exam application?",
    a: "Applicants must upload notarized copies of key documents including citizenship, academic transcripts (SEE, 10+2, and Bachelor's), character certificates, degree certificates, equivalence certificates (if applicable), and recent passport-size photos.",
  },
  {
    q: "How to apply for the NEC license exam in Nepal?",
    a: "Candidates must apply online through the official NEC portal. The application process includes uploading necessary documents and paying an exam fee of NPR 2,500 via digital payment platforms such as Khalti or Connect IPS.",
  },
  {
    q: "What is the passing score for the NEC license exam?",
    a: "To pass the NEC license exam, candidates must score a minimum of 50%. There is no penalty for incorrect answers as the exam does not include negative marking.",
  },
  {
    q: "Is there a specific syllabus for the NEC license exam?",
    a: "Yes, the NEC license exam syllabus varies by engineering discipline (civil, electrical, mechanical, etc.). It covers fundamental engineering concepts, Nepal Engineering Council codes and standards, and professional ethics and practices.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-28 lg:py-40 px-6">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-orange-900/30 hover:ring-orange-900/40 mt-2">
              Join <span className="text-orange-500 font-bold">2,000+</span>{" "}
              students preparing for the NEC license exam.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-7xl font-inter pt-3">
              Engineering License Exam Preparation
            </h1>
            <p className="mt-8 text-base font-normal text-pretty text-gray-500 font-poppins">
              Prepare for the Nepal Engineering Council license exam with our
              practice questions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/take-test"
                className="rounded-md bg-orange-600 px-8 py-3 text-lg tracking-wider text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 font-poppins uppercase font-semibold"
              >
                Start Mock Test
              </Link>
            </div>
          </div>
        </div>

        <section className="py-24 bg-gray-50/50 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Column: Contextual Content */}
              <div className="relative">
                {/* Subtle Decorative Background Element */}
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-orange-100 rounded-full blur-3xl opacity-60" />

                <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-6">
                  Official Guidelines
                </span>

                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Understanding the <span className="text-orange-600 font-inter">NEC Licensing</span> Requirement
                </h2>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-poppins">
                  <p>
                    As per the <strong className="text-gray-900">Nepal Engineering Council Act, 2055 (First Amendment 2079)</strong>,
                    passing the professional licensing examination is now a mandatory requirement to practice
                    engineering legally in Nepal.
                  </p>
                  <p>
                    This mandate ensures that every registered engineer meets the
                    <span className="text-gray-900 font-semibold"> professional competence</span> required to handle
                    nation-building projects safely and ethically.
                  </p>
                  <p className="text-base text-gray-500 italic">
                    Our platform covers the full spectrum of the <strong className="text-orange-600">12th General Registered Engineer Examination</strong>,
                    focusing specifically on Civil, Computer, and Electrical faculties.
                  </p>
                </div>
              </div>

              {/* Right Column: Information Card */}
              <div className="relative group">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

                <div className="relative bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
                  <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                      <ScaleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      2082/2083 Marking Scheme
                    </h3>
                  </div>

                  <ul className="space-y-5">
                    {[
                      { label: "Total Marks", value: "100" },
                      { label: "Question Type", value: "100 MCQs" },
                      { label: "Passing Score", value: "50% (50 Marks)" },
                      { label: "Exam Duration", value: "2 Hours" },
                      { label: "Negative Marking", value: "None", isLast: true },
                    ].map((item, idx) => (
                      <li key={idx} className={`flex justify-between items-center ${!item.isLast ? 'border-b border-gray-50 pb-4' : ''}`}>
                        <span className="text-gray-500 font-medium">{item.label}</span>
                        <span className={`font-bold ${item.value === 'None' ? 'text-green-600' : 'text-gray-900'}`}>
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/syllabus"
                      className="text-sm font-semibold text-orange-600 hover:text-orange-500 flex items-center gap-1 transition"
                    >
                      View detailed faculty syllabus
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Everything you need to pass in one click</h2>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-8 border border-gray-100 rounded-3xl bg-white shadow-xs hover:shadow-md transition border-b-4 hover:border-b-orange-600">
                <f.icon className="w-10 h-10 text-orange-600 mb-6" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-orange-600 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Take your first step towards passing the NEC exam with confidence.
          </p>
          <Link
            href="/take-test"
            className="inline-block rounded-md bg-white px-8 py-3 text-lg tracking-wider text-orange-600 shadow hover:bg-orange-50 font-semibold uppercase"
          >
            Start Your Mock Test
          </Link>
        </section>

        <Testimony />

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition">
                      {faq.q}
                    </span>
                    {openIndex === index ? (
                      <MinusIcon className="w-6 h-6 text-orange-600 transition" />
                    ) : (
                      <PlusIcon className="w-6 h-6 text-gray-500 group-hover:text-orange-600 transition" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { height: "auto", opacity: 1 },
                          collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden px-6"
                      >
                        <div className="pb-5 text-gray-600">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
