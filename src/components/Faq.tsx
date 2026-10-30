"use client";

import { PlusIcon, MinusIcon, QuestionMarkCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
  category: "pattern" | "eligibility" | "syllabus" | "general";
}

const faqs: FaqItem[] = [
  {
    category: "pattern",
    q: "What is the structure, total marks, and duration of the NEC license exam in Nepal?",
    a: "The Nepal Engineering Council (NEC) licensing examination is a 2-hour (120 minutes) Computer-Based Test (CBT) consisting of 80 multiple-choice questions (MCQs) for a total of 100 marks. The paper is divided into Section A (60 questions carrying 1 mark each on fundamentals) and Section B (20 questions carrying 2 marks each on analytical engineering problems).",
  },
  {
    category: "pattern",
    q: "What is the passing score for the NEC license exam, and is there negative marking?",
    a: "The passing threshold is 50% (50 marks out of 100). According to official Nepal Engineering Council guidelines, there is currently NO negative marking for incorrect or unanswered questions. Candidates are strongly encouraged to attempt all 80 questions within the 120-minute time limit.",
  },
  {
    category: "pattern",
    q: "Are scientific calculators allowed in the NEC CBT licensing examination?",
    a: "Yes. Candidates are permitted to use non-programmable scientific calculators (such as the Casio fx-82MS, fx-991MS, or fx-991ES series) for the 2-mark analytical and structural calculation questions. Programmable graphing calculators and smart devices are strictly prohibited.",
  },
  {
    category: "eligibility",
    q: "Who is eligible to apply for the Nepal Engineering Council license exam?",
    a: "To be eligible, an applicant must have completed a Bachelor's degree in Engineering (BE, B.Tech, or B.Arch) from an engineering college or university recognized by the Nepal Engineering Council. Candidates who completed their engineering degree abroad must first obtain an equivalence certificate from the Curriculum Development Centre at Tribhuvan University (TU).",
  },
  {
    category: "eligibility",
    q: "What documents are required for the NEC license exam online registration?",
    a: "Applicants need scanned, clear copies of: 1) Nepali Citizenship certificate; 2) Academic transcripts and character certificates from SLC/SEE onwards; 3) Bachelor’s Degree Certificate or Provisional Certificate; 4) Equivalence certificate from Tribhuvan University (for foreign degrees); and 5) Recent digital passport-size photographs.",
  },
  {
    category: "eligibility",
    q: "How do I register and pay the fee for the NEC license exam in Nepal?",
    a: "Applications are submitted through the official Nepal Engineering Council portal (nec.gov.np). Candidates register an account, fill out personal and academic credentials, upload documents, and pay the examination fee (currently NPR 2,500) via digital payment gateways such as ConnectIPS or Khalti. Once verified, the admit card can be downloaded directly from the dashboard.",
  },
  {
    category: "syllabus",
    q: "Is there a specific syllabus for each engineering discipline in the NEC exam?",
    a: "Yes. The Nepal Engineering Council publishes a standardized 10-chapter curriculum for each discipline (Civil, Computer, Electrical, Electronics, Mechanical, Architecture, etc.). Chapters 1–4 cover fundamental concepts, Chapters 5–9 cover practical engineering applications, and Chapter 10 covers Project Management, Procurement, and NEC Professional Ethics (NEC Act 2055).",
  },
  {
    category: "syllabus",
    q: "How important is Chapter 10 (Engineering Ethics and Project Planning)?",
    a: "Chapter 10 carries 10 marks in every single engineering discipline. It tests knowledge of the Nepal Engineering Council Act 2055, codes of professional conduct, public procurement rules, and CPM/PERT network scheduling. Because the passing mark is 50, scoring high in Chapter 10 is crucial for passing.",
  },
  {
    category: "general",
    q: "Is this platform free to use for NEC license exam preparation?",
    a: "Yes. You can access free timed computer-based mock tests, chapter-wise practice questions, and official syllabus PDF downloads for Civil, Computer, Electrical, and Architecture disciplines without mandatory paid subscriptions.",
  },
  {
    category: "general",
    q: "How many times per year is the Nepal Engineering Council license exam conducted?",
    a: "The Nepal Engineering Council typically conducts the licensing examination 2 to 3 times per calendar year. Examination dates, routines, and admit card distributions are published in advance on national newspapers and the official NEC website (nec.gov.np).",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  // Schema.org FAQPage Structured Data for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="bg-gray-50/70 py-24 relative overflow-hidden font-poppins"
      aria-labelledby="faq-main-heading"
    >
      {/* Schema.org FAQPage structured data injected for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4">
            <QuestionMarkCircleIcon className="w-4 h-4 text-orange-600" />
            Official Exam Guidelines &amp; Answers
          </span>
          <h2
            id="faq-main-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-inter leading-tight"
          >
            Nepal Engineering Council (NEC) <br className="hidden sm:inline" />
            <span className="text-orange-600 font-medium">License Exam FAQs</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Essential answers on the computer-based test (CBT) pattern, passing marks, eligibility requirements, negative marking, and syllabus weightages.
          </p>

          {/* Category Filter Pills for Better User Engagement & Dwell Time */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "pattern", label: "Exam Pattern & Rules" },
              { id: "eligibility", label: "Eligibility & Documents" },
              { id: "syllabus", label: "Syllabus & Weightage" },
              { id: "general", label: "General & Mock Tests" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-orange-600 text-white shadow-xs"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List with Semantic Microdata */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={faq.q}
                className={`border rounded-2xl bg-white transition duration-200 shadow-3xs overflow-hidden ${
                  isOpen
                    ? "border-orange-500/40 shadow-sm ring-1 ring-orange-500/10"
                    : "border-gray-200/90 hover:border-gray-300"
                }`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-start justify-between px-6 py-5 text-left group gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`text-base sm:text-lg font-semibold font-inter transition leading-snug ${
                      isOpen
                        ? "text-orange-600"
                        : "text-gray-900 group-hover:text-orange-600"
                    }`}
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`p-1 rounded-lg shrink-0 transition ${
                      isOpen
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600"
                    }`}
                  >
                    {isOpen ? (
                      <MinusIcon className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                        <p itemProp="text">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        {/* Trust Highlight Under FAQs */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2 font-medium">
            <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Have more questions? Review the official Council notices at <a href="https://nec.gov.np" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold underline">nec.gov.np</a></span>
          </div>
          <a
            href="/contact-us"
            className="text-orange-600 font-bold hover:underline shrink-0 font-inter"
          >
            Ask a Question →
          </a>
        </div>
      </div>
    </section>
  );
}
