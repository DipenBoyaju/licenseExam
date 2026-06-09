import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  )
}