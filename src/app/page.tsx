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
import Image from "next/image";

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

const nestedSuiteFeatures = [
  {
    title: "Instant Access, No Sign-In",
    desc: "Start practicing immediately. Skip the registration forms and dive straight into high-quality engineering test sets with a single click.",
    bgIconColor: "bg-sky-100",
    iconColor: "text-sky-600",
    svgPath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H8" />
    ),
  },
  {
    title: "Chapter & Faculty Specific Tests",
    desc: "Master each section with precision. Practice engineering fluid mechanics, computing architectures, or electronics fundamentals step-by-step.",
    bgIconColor: "bg-pink-100",
    iconColor: "text-pink-600",
    svgPath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    title: "Fresh Question Sets Every 2 Minutes",
    desc: "Never see the same test twice. Our simulator dynamically generates brand new mock question sets every 2 minutes, ensuring infinite replayability and authentic exam preparation.",
    bgIconColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
    svgPath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
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

        <section className="pb-20 pt-5 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="relative w-full max-w-md lg:max-w-none lg:col-span-6 order-2 lg:order-1">
                <div className="absolute -inset-2 bg-linear-to-tr from-orange-400 to-amber-200 rounded-3xl blur-2xl opacity-20" />
                <div className="relative h-[520px] w-full rounded-2xl shadow-2xl border border-gray-100">
                  <div className="absolute w-full h-full bg-orange-500/20 rounded-2xl left-5 top-5"></div>
                  <Image
                    src="/image1.avif"
                    alt="Engineering student studying for NEC board examination"
                    fill
                    sizes="(max-w-7xl) 60vw, 100vw"
                    priority
                    className="object-cover"
                  />

                  <div className="absolute -bottom-10 inset-x-6 bg-orange-400 rounded-xl py-5 px-6 flex items-center justify-around text-white z-10 shadow-lg border border-orange-300/20 backdrop-blur-xs">
                    <div className="text-center">
                      <span className="block text-2xl sm:text-3xl font-extrabold font-inter">5,000+</span>
                      <span className="text-xs uppercase tracking-wider text-orange-100 font-poppins font-medium">Syllabus MCQs</span>
                    </div>
                    <div className="w-px h-10 bg-orange-300/40" />
                    <div className="text-center">
                      <span className="block text-2xl sm:text-3xl font-extrabold font-inter">100%</span>
                      <span className="text-xs uppercase tracking-wider text-orange-100 font-poppins font-medium">Free Access</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4">
                  100% Free & Open
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4 font-inter leading-tight">
                  A Smarter Way to Prepare: <br />
                  <span className="text-orange-600 font-medium">Built Specifically for the NEC Syllabus</span>
                </h2>
                <p className="text-gray-500 font-poppins text-base mb-8">
                  No accounts, no paywalls, and no setup required. Our platform is built to give engineering graduates instant access to comprehensive practice tools.
                </p>

                <div className="relative border-l-2 border-gray-100 pl-6 ml-4 space-y-12">
                  {nestedSuiteFeatures.map((item) => (
                    <div key={item.title} className="relative">
                      <div className={`absolute -left-[43px] top-0 ${item.bgIconColor} rounded-full p-1.5 ring-4 ring-white`}>
                        <svg className={`w-6 h-6 ${item.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          {item.svgPath}
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 font-inter">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-500 font-poppins">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modernized Vertical-Stacked Official Guidelines & Marking Layout */}
        <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden relative">
          {/* Ambient light glow behind the full section stack */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">

            {/* Top Row: Contextual Headline and Narrative Block (Full Width) */}
            <div className="max-w-4xl mx-auto text-center mb-16 relative">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-6">
                Official Guidelines
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6 font-inter leading-tight">
                Understanding the <span className="text-orange-600 font-medium">NEC Licensing Requirement</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed font-poppins">
                <p>
                  As per the <strong className="text-gray-900 font-semibold">Nepal Engineering Council Act, 2055 (First Amendment 2079)</strong>,
                  passing the professional licensing examination is now a mandatory requirement to practice
                  engineering legally in Nepal. This mandate ensures that every registered engineer meets the
                  <span className="text-gray-900 font-semibold"> professional competence</span> required to handle nation-building projects safely and ethically.
                </p>

                {/* Centered Minimal Info Ribbon */}
                <div className="inline-flex items-center justify-center bg-orange-50/60 border border-orange-100 px-4 py-2 rounded-xl mt-2 text-sm text-gray-700 font-medium">
                  🚀 Covering the full spectrum of the <span className="text-orange-700 font-bold mx-1">12th General Exam</span> across Civil, Computer, & Electrical faculties.
                </div>
              </div>
            </div>

            {/* Bottom Row: Wide High-Fidelity Extended Marking Scheme Card Frame */}
            <div className="relative group max-w-5xl mx-auto w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />

              <div className="relative bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">

                {/* Header structure within the broad dashboard asset */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-600 shadow-xs">
                      <ScaleIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-inter">
                        2082/2083 Marking Scheme
                      </h3>
                      <p className="text-xs text-gray-400 font-poppins mt-0.5">Official NEC Examination Blueprint Structure</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center self-start sm:self-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                    Active Syllabus
                  </span>
                </div>

                {/* Stretched Responsive Grid Layout for metrics across 4 balances */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Metric 1 */}
                  <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between hover:bg-gray-50 transition">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold font-poppins">Total Allocation</span>
                    <span className="text-2xl font-extrabold text-gray-900 font-inter mt-3">100 Marks</span>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between hover:bg-gray-50 transition">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold font-poppins">Question Structure</span>
                    <span className="text-2xl font-extrabold text-gray-900 font-inter mt-3">100 MCQs</span>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between hover:bg-gray-50 transition">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold font-poppins">Allotted Time</span>
                    <span className="text-2xl font-extrabold text-gray-900 font-inter mt-3">2 Hours</span>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-5 rounded-2xl bg-green-50/20 border border-green-100 flex flex-col justify-between">
                    <span className="text-xs uppercase tracking-wider text-green-800/60 font-bold font-poppins">Negative Marking</span>
                    <span className="text-2xl font-extrabold text-green-600 font-inter mt-3">None</span>
                  </div>

                  {/* Wide-spread Horizontal focal card targeting threshold data */}
                  <div className="p-5 rounded-2xl bg-orange-50/40 border border-orange-100 sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-orange-800/70 font-bold font-poppins">Passing Score Threshold</span>
                      <span className="text-2xl font-extrabold text-orange-600 font-inter mt-1">
                        50% <span className="text-base font-normal text-gray-500 font-poppins ml-1">(Minimum 50 Marks Required)</span>
                      </span>
                    </div>
                    <Link
                      href="/syllabus"
                      className="group/link text-sm font-bold text-orange-600 hover:text-orange-500 flex items-center gap-1 transition-all bg-white px-4 py-2.5 rounded-xl shadow-xs border border-orange-100 shrink-0 self-stretch sm:self-auto justify-center sm:justify-start"
                    >
                      View Faculty Syllabus
                      <span className="inline-block transform group-hover/link:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* <section className="py-24">
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
        </section> */}

        {/* Modernized Features Grid Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Accent layout radial light in background to bridge sections */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-20 relative">
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4">
              Everything You Need
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-inter">
              Master the Exam in <span className="text-orange-600 font-medium">One Click</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 font-poppins max-w-2xl mx-auto">
              A comprehensive toolset engineered to simulate actual exam pressure and streamline your preparation timeline.
            </p>
          </div>

          {/* Smoother cascading columns layout map */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 border border-gray-100 rounded-3xl bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 hover:border-b-orange-600 flex flex-col justify-between"
              >
                <div>
                  {/* Modernized Icon Wrapper with subtle scale matching on card hover */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                    <f.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 font-inter tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-poppins">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* <section className="bg-orange-600 py-20 text-center">
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
        </section> */}

        {/* Premium High-Conversion CTA Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Card Wrapper with dark high-contrast panel design */}
          <div className="relative isolate overflow-hidden bg-neutral-950 px-6 py-20 text-center shadow-2xl rounded-3xl border border-neutral-800 sm:px-16">

            {/* Engineering Grid Vector Overlay Layer */}
            <svg
              className="absolute inset-0 -z-10 h-full w-full stroke-white/[0.04] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern id="grid-pattern" width={40} height={40} patternUnits="userSpaceOnUse" x="50%">
                  <path d="M.5 40V.5H40" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Glowing Ambient Mesh Blurs */}
            <div className="absolute top-0 right-1/4 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-1155/678 w-[45rem] bg-gradient-to-tr from-orange-600 to-amber-400 opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>

            {/* Accent Notification Pill */}
            <span className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400 ring-1 ring-inset ring-orange-500/20 mb-6 tracking-wide uppercase">
              Instant Access • 100% Free
            </span>

            {/* Main Content Copy Set */}
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-inter leading-tight">
              Ready to Secure Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Engineering License?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-neutral-400 font-poppins leading-relaxed">
              Take your first step towards passing the NEC exam with confidence. Jump straight into an automated mock test session right now.
            </p>

            {/* Interactive Button Module */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/take-test"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-md hover:bg-orange-500 transition-all duration-200 hover:shadow-orange-600/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Your Mock Test
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

          </div>
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
