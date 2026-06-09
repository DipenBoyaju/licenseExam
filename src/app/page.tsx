"use client";

import {
  CheckCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ScaleIcon } from "lucide-react";
import Testimony from "@/components/Testimony";
import Image from "next/image";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

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

export default function Home() {
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

        <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
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

                  <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between hover:bg-gray-50 transition">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold font-poppins">Question Structure</span>
                    <span className="text-2xl font-extrabold text-gray-900 font-inter mt-3">100 MCQs</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between hover:bg-gray-50 transition">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold font-poppins">Allotted Time</span>
                    <span className="text-2xl font-extrabold text-gray-900 font-inter mt-3">2 Hours</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-green-50/20 border border-green-100 flex flex-col justify-between">
                    <span className="text-xs uppercase tracking-wider text-green-800/60 font-bold font-poppins">Negative Marking</span>
                    <span className="text-2xl font-extrabold text-green-600 font-inter mt-3">None</span>
                  </div>

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

        <section className="py-24 bg-white relative overflow-hidden">
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

          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 border border-gray-100 rounded-3xl bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 hover:border-b-orange-600 flex flex-col justify-between"
              >
                <div>
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

        <Cta />

        <Testimony />

        <Faq />

      </div>
    </div>
  );
}
