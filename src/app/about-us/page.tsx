"use client";

import Image from "next/image";
import Link from "next/link";
import Testimony from "@/components/Testimony";
import {
  UserGroupIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  ScaleIcon
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

      {/* 1. High-Fidelity Asymmetrical Split Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Content Column (5 Columns wide) */}
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-6">
                Get to Know Us
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
                About the <span className="text-orange-600 font-medium">Portal</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-500 font-poppins">
                The NEC License Exam Portal is a specialized digital ecosystem designed to help engineers
                master the Nepal Engineering Council licensing examination through data-driven preparation.
              </p>
            </div>

            {/* Right Asset Frame (7 Columns wide - Integrating the design requested) */}
            <div className="relative w-full max-w-md lg:max-w-none lg:col-span-7 mx-auto">
              <div className="absolute -inset-2 bg-linear-to-tr from-orange-400 to-amber-200 rounded-3xl blur-2xl opacity-20 pointer-events-none" />

              <div className="relative h-[420px] w-full rounded-2xl shadow-2xl border border-gray-100 overflow-hidden bg-white">
                <Image
                  src="/image1.avif"
                  alt="Engineering graduate preparing for licensing exam portal"
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  priority
                  className="object-cover"
                />

                {/* Floating Metrics Badge Card matching your screenshot's properties */}
                <div className="absolute bottom-6 inset-x-6 bg-[#C98A64] rounded-xl py-4 px-6 flex items-center justify-around text-white z-10 shadow-lg border border-white/10 backdrop-blur-xs">
                  <div className="text-center">
                    <span className="block text-xl sm:text-2xl font-extrabold font-inter">800K+</span>
                    <span className="text-[10px] uppercase tracking-wider text-orange-100 font-poppins font-semibold">Simulated MCQs</span>
                  </div>
                  <div className="w-px h-8 bg-orange-300/40" />
                  <div className="text-center">
                    <span className="block text-xl sm:text-2xl font-extrabold font-inter">10+</span>
                    <span className="text-[10px] uppercase tracking-wider text-orange-100 font-poppins font-semibold">Competitive Faculties</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Upgraded Interactive Core Values Grid */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-8 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 hover:border-b-orange-600"
              >
                {/* Micro-interactive animated icon canvas container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <value.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 font-inter tracking-tight">{value.title}</h3>
                <p className="text-gray-500 text-sm font-poppins leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Asymmetric Split Structural Context Block */}
      <section className="bg-linear-to-b from-gray-50 to-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Narrative Frame */}
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4">
                Our Vision
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-inter leading-tight">
                Bridging the Gap <br />to <span className="text-orange-600 font-medium">Professionalism</span>
              </h2>
              <div className="mt-6 space-y-6 text-gray-500 text-base font-poppins leading-relaxed">
                <p>
                  In the current engineering landscape of Nepal, the introduction of the <strong>mandatory licensing exam</strong>
                  by the Nepal Engineering Council (the NEC Act 2055) represents a pivotal shift towards ensuring quality in our national infrastructure.
                </p>
                <p>
                  We recognized that while graduates possess dense theoretical knowledge, there was a significant lack of resources that simulated the specific <strong>Computer Based Test (CBT)</strong> interface configurations and constraints.
                </p>
              </div>
            </div>

            {/* Right Cards Cluster Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Method Card 1 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                    <BookOpenIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-inter tracking-tight">Curated Question Banks</h3>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-poppins">
                  We categorize our banks into Basic Sciences, Faculty Core, and Ethics, ensuring the exact legal weightage requested by the Council is maintained in every mock session.
                </p>
              </div>

              {/* Method Card 2 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                    <PresentationChartLineIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-inter tracking-tight">Real-time Performance</h3>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-poppins">
                  Success isn't just about answers—it's about managing your 120 minutes. Our portal logs real-time operational speeds per question, pinpointing weaknesses instantly.
                </p>
              </div>

              {/* Supporting Nepal Infrastructure Sub block */}
              <div className="p-6 rounded-2xl bg-orange-50/20 border border-orange-100 sm:col-span-2">
                <h4 className="text-sm font-bold text-orange-800 uppercase tracking-wider font-inter mb-2">Supporting Nepal's Infrastructure</h4>
                <p className="text-gray-600 text-sm font-poppins leading-relaxed">
                  Whether you are appearing for Civil, Computer, Electrical, or Electronics streams, our portal functions as your absolute final dashboard checkpoint before the true test.
                </p>
              </div>
            </div>

          </div>

          {/* 4. Full-Width Glass Obsidian Commitments Section */}
          <div className="relative group max-w-5xl mx-auto w-full mt-24">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-10" />
            <div className="relative bg-neutral-950 p-8 sm:p-10 rounded-2xl text-white shadow-xl border border-neutral-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-orange-600 shadow-xs">
                  <ScaleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-inter tracking-tight">A Firm Commitment to Professional Ethics</h3>
              </div>
              <p className="italic text-neutral-300 text-base sm:text-lg leading-relaxed font-poppins pl-2 border-l-2 border-orange-500/50 mt-4">
                "Our primary focus is not merely helping you pass a standard threshold code. We want to ensure that every graduate sets foot directly onto national infrastructural works with an airtight grasp of liabilities, professional regulations, and civil codes of safety."
              </p>
            </div>
          </div>

        </div>
      </section>

      <Testimony />
    </div>
  );
}