"use client";

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
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-50/50">
        <div className="mx-auto max-w-3xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-inter">
              About the <span className="text-orange-600">Portal</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-poppins">
              The NEC License Exam Portal is a specialized digital ecosystem designed to help engineers
              master the Nepal Engineering Council licensing examination through data-driven preparation.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-24">
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

      {/* Narrative Section - Enhanced for AdSense "Value Content" */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-orange max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Bridging the Gap to Professionalism</h2>
            <div className="space-y-6 text-gray-600 leading-7 font-poppins">
              <p>
                In the current engineering landscape of Nepal, the introduction of the <strong>mandatory licensing exam</strong>
                by the Nepal Engineering Council (NEC) represents a pivotal shift towards ensuring quality in our
                national infrastructure. We recognized that while graduates possess the theoretical knowledge,
                there was a significant lack of resources that simulated the specific <strong>Computer Based Test (CBT)</strong>
                interface and time-pressure constraints.
              </p>
              <p>
                Our platform was born out of a necessity to provide localized, high-quality preparation material that
                aligns with the <strong>2082/2083 Revised Syllabus</strong>. By focusing on core engineering concepts
                alongside the critical "Professional Practice" section, we ensure our users are fully prepared for
                both technical and ethical questions.
              </p>
            </div>

            {/* Added Content Block 1: Methodology */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 not-prose">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpenIcon className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Curated Question Banks</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every question on our portal undergoes a rigorous review process. We categorize our
                  bank into Section A (Basic Science), Section B (Faculty Core), and Section C (Ethics),
                  ensuring the exact weightage requested by the Council is maintained in every mock session.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <PresentationChartLineIcon className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Real-time Performance</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Success in the NEC exam isn't just about what you know, but how you manage your 120 minutes.
                  Our simulator provides instant analytics, highlighting your speed-per-question and
                  identifying the specific chapters where you need further review.
                </p>
              </div>
            </div>

            {/* Added Content Block 2: The Vision */}
            <div className="mt-16 space-y-6 text-gray-600 leading-7 font-poppins border-t border-gray-200 pt-10">
              <h3 className="text-2xl font-bold text-gray-900">Supporting Nepal's Infrastructure</h3>
              <p>
                We believe that better-prepared engineers build a better nation. Whether you are appearing for the
                Civil, Computer, Electrical, or Electronics examination, our portal is designed to be your final
                check-point. We are committed to updating our database with the latest official notices and
                past-question patterns to keep our resources relevant and effective.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-orange-600 p-8 text-white shadow-xl shadow-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <ScaleIcon className="w-8 h-8 text-orange-100" />
                <h3 className="text-xl font-bold">A Commitment to Ethics</h3>
              </div>
              <p className="italic text-orange-50 leading-relaxed">
                "Our goal is not just to help you pass the license exam, but to ensure you enter the professional
                field with a firm grasp of the codes of conduct, professional liability, and the technical standards
                that the Nepal Engineering Council demands."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimony />
    </div>
  );
}