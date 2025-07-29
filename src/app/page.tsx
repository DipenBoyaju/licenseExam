"use client"

import { CheckCircleIcon, AcademicCapIcon, ClockIcon, ChartBarIcon, DevicePhoneMobileIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link';

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
]

const faqs = [
  {
    q: "Is this platform free?",
    a: "We offer free practice questions and premium plans for advanced mock tests and analytics.",
  },
  {
    q: "Can I use this on mobile?",
    a: "Yes! Our platform is fully responsive and works on mobile, tablet, and desktop.",
  },
  {
    q: "How often is the content updated?",
    a: "Our team updates questions every exam cycle to reflect the latest NEC syllabus.",
  },
  {
    q: "Do I get detailed solutions?",
    a: "Yes. Every question includes clear explanations and references for better understanding.",
  },
]

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-28 lg:py-40 px-6">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-orange-900/30 hover:ring-orange-900/40">
              Join <span className="text-orange-500 font-bold">2,000+</span> students preparing for the NEC license exam.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-7xl font-inter">
              Engineering License Exam Preparation
            </h1>
            <p className="mt-8 text-base font-normal text-pretty text-gray-500 font-poppins">
              Prepare for the Nepal Engineering Council license exam with our practice questions.
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

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:border-orange-500"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
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
    </div >
  )
}
