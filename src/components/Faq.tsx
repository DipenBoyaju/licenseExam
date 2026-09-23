import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const faqs = [
  {
    q: "Is this platform free to use for NEC license exam preparation?",
    a: "Yes, you can access free practice questions and basic resources. Premium plans unlock full-length mock tests, detailed analytics, and performance tracking to help you prepare more effectively for the Nepal Engineering Council (NEC) license exam.",
  },
  {
    q: "What is the structure and duration of the NEC license exam in Nepal?",
    a: "The Nepal Engineering Council (NEC) license exam is a 2-hour, computer-based test (CBT) with multiple-choice questions. The exam is out of 100 marks, and candidates must score at least 50 marks to pass. Questions cover core engineering concepts, NEC codes and standards, and professional ethics, with the exact syllabus varying by discipline (civil, electrical, mechanical, etc.).",
  },
  {
    q: "Are all questions in the NEC license exam MCQs?",
    a: "Yes, the NEC license exam is fully MCQ-based (multiple-choice questions). There are no subjective or written-answer questions. Each question has four options, and you select the most appropriate answer. This format makes timed practice with MCQ question sets and mock tests essential for good performance.",
  },
  {
    q: "What question sets should I practice for the NEC license exam?",
    a: "You should practice official model question sets published by the Nepal Engineering Council, along with memory-based and past questions from previous exams. Focus on branch-wise question sets (civil, electrical, mechanical, computer, etc.) that follow the latest NEC pattern and syllabus. Using full-length mock test sets under timed conditions will help you improve speed, accuracy, and exam readiness.",
  },
  {
    q: "Who is eligible to apply for the NEC license exam?",
    a: "To be eligible, you must hold a Bachelor’s degree in engineering (BE / B.Arch) from a university recognized by the Nepal Engineering Council. If you completed your engineering degree outside Nepal, you must first obtain an equivalence certificate from Tribhuvan University before applying.",
  },
  {
    q: "What documents are required for the NEC license exam application?",
    a: "You’ll need scanned, notarized copies of key documents such as your Nepali citizenship certificate, all academic transcripts and character certificates (from SEE/SLC onwards), your Bachelor’s degree or provisional certificate, and an equivalence certificate (if you studied abroad). Recent passport-size photographs and a valid email/phone number are also required for the online application.",
  },
  {
    q: "How do I apply for the NEC license exam in Nepal?",
    a: "Applications are submitted online through the official Nepal Engineering Council portal. You create an account, fill in the registration form, upload the required documents, and pay the exam fee (currently around NPR 2,500) using digital payment options such as Khalti or Connect IPS. After verification, you can select your exam center and download your admit card.",
  },
  {
    q: "What is the passing score for the NEC license exam?",
    a: "The NEC license exam is out of 100 marks, and you must score at least 50% (50 marks) to pass. The exam is objective (MCQ-based) and, as per recent guidelines, does not include negative marking for incorrect answers.",
  },
  {
    q: "Is there a specific syllabus for the NEC license exam?",
    a: "Yes. The Nepal Engineering Council publishes a discipline-wise syllabus for civil, electrical, mechanical, computer, and other engineering fields. The syllabus typically includes fundamental engineering subjects, relevant NEC codes and standards, and professional ethics and practice. Always check the latest syllabus on the official NEC website before you start preparing.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          NEC License Exam – Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Clear answers about eligibility, exam pattern, syllabus, and how to apply for the Nepal Engineering Council license exam.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
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
                    id={`faq-panel-${index}`}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}