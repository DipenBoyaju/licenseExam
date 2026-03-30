"use client";

import { motion } from "framer-motion";
import { DocumentArrowDownIcon, LockClosedIcon, BeakerIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function PastQuestionsComingSoon() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600 ring-1 ring-inset ring-orange-600/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Coming Q2 2082
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-inter">
            Past Question <span className="text-orange-600">Archive</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-poppins">
            We are currently digitizing and verifying solutions for the last 10 years of NEC exams.
            Get access to authentic question papers with expert-verified answer keys.
          </p>
        </div>

        {/* Feature Preview Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Year-Wise Archive",
                description: "Filter questions by year and faculty (Civil, Computer, Electrical) to track exam trends.",
                icon: FunnelIcon,
              },
              {
                name: "Verified Solutions",
                description: "Not just questions. Every set comes with step-by-step solutions mapped to the NEC syllabus.",
                icon: BeakerIcon,
              },
              {
                name: "Printable PDFs",
                description: "Download high-quality question sets for offline practice and group study.",
                icon: DocumentArrowDownIcon,
              },
            ].map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 ring-1 ring-gray-200">
                  <feature.icon className="h-8 w-8 text-gray-400" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Notify Me Form */}
        <div className="mt-20 flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-25" />
            <div className="relative bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 text-gray-900 border-none focus:ring-0 rounded-md outline-none"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-all whitespace-nowrap">
                Notify Me
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
            <LockClosedIcon className="h-4 w-4" />
            No spam. Only a one-time launch notification.
          </p>
        </div>
      </div>
    </section>
  );
}