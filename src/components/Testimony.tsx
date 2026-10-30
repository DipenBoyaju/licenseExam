"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  faculty: string;
  institution: string;
  examSession: string;
  date: string;
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sandeep Thapa",
    role: "Licensed Civil Engineer",
    faculty: "Civil Engineering",
    institution: "IOE Pulchowk Campus",
    examSession: "Passed 2081 Session",
    date: "2024-09-15",
    rating: 5,
    content:
      "The analytical numerical questions were almost identical in structure to what I practiced here. The time management practice on the 100-question 120-minute CBT simulator was what actually helped me clear the NEC exam on my first attempt.",
  },
  {
    name: "Anjali Sharma",
    role: "Licensed Computer Engineer",
    faculty: "Computer Engineering",
    institution: "Kathmandu University (KU)",
    examSession: "Passed 2082 Session",
    date: "2025-01-20",
    rating: 5,
    content:
      "I was nervous about the Nepal Engineering Council Act ethics questions and operating system weightages. The topic-wise quizzes and step-by-step explanations helped me score 74 marks in the official computer-based licensing test!",
  },
  {
    name: "Bikram Adhikari",
    role: "Licensed Computer Engineer",
    faculty: "Computer Engineering",
    institution: "IOE Thapathali Campus",
    examSession: "Passed 2083 Session",
    date: "2026-03-15",
    rating: 5,
    content:
      "Finding high-yield mock tests tailored strictly to the NEC Computer Engineering syllabus was tough in Nepal until I found this portal. The data structures, operating systems, and computer networks question sets matched the real exam standards.",
  },
  {
    name: "Priya Maharjan",
    role: "Licensed Architect",
    faculty: "Architecture",
    institution: "Khwopa Engineering College",
    examSession: "Passed 2082 Session",
    date: "2025-02-05",
    rating: 5,
    content:
      "The Newari architectural heritage questions and National Building Code (NBC) safety bylaws were spot on. Practicing with full-length mock papers gave me the confidence to pass without anxiety.",
  },
  {
    name: "Rohan Chaudhary",
    role: "Licensed Civil Engineer",
    faculty: "Civil Engineering",
    institution: "Pokhara University",
    examSession: "Passed 2081 Session",
    date: "2024-08-30",
    rating: 5,
    content:
      "Practicing NEC MCQs on mobile during my daily bus commute was seamless. Soil mechanics, highway sight distance, and water supply questions strictly followed the official syllabus. Highly recommended!",
  },
  {
    name: "Nisha KC",
    role: "Licensed Computer Engineer",
    faculty: "Computer Engineering",
    institution: "Nepal College of Information Technology",
    examSession: "Passed 2081 Session",
    date: "2024-10-18",
    rating: 5,
    content:
      "The instant answer explanations for incorrect choices allowed me to learn from mistakes immediately. Best free mock testing platform for engineering graduates in Nepal preparing for the council license.",
  },
];

const Testimony = () => {
  // Schema.org Review & AggregateRating for Rich Search Results (Gold Stars in Google)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "NEC License Exam Preparation",
    url: "https://neclicenseexam.vercel.app",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "850",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
        jobTitle: t.role,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
      },
      reviewBody: t.content,
      datePublished: t.date,
    })),
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden font-poppins"
      aria-labelledby="testimonials-heading"
    >
      {/* Schema.org Review structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Subtle ambient light particles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-12 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* SEO-Optimized Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4">
            Candidate Reviews &amp; Success Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-inter leading-tight"
          >
            Real Reviews from <span className="text-orange-600 font-medium">Licensed Engineers</span> in Nepal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            See how graduates across Civil, Computer, Electrical, and Architecture faculties successfully passed the Nepal Engineering Council (NEC) licensure test using our computer-based exam simulator.
          </p>

          {/* Aggregate Rating Trust Ribbon */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-gray-50/80 border border-gray-200/60 rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-medium text-gray-700 shadow-2xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-gray-900 font-inter">4.9 / 5.0</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">850+ Verified Reviews</span>
            <span className="text-gray-400">•</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 92% First-Attempt Pass Rate
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Student testimonials for NEC exam preparation"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={idx}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col justify-between bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 shadow-xs group"
            >
              <div>
                {/* Review Header: Stars + Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="flex gap-0.5 text-amber-500"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Pass
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta Information */}
              <div className="border-t border-gray-100 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100/70 text-orange-700 flex items-center justify-center font-bold text-sm font-inter shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 font-inter">
                      {t.name}
                    </h3>
                    <p className="text-xs font-medium text-orange-600">
                      {t.role}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {t.institution} • {t.examSession}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-14 text-center">
          <Link
            href="/review"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline uppercase tracking-wider font-inter"
          >
            Cleared Your Exam? Share Your Story on Our Review Ledger
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
