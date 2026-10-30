import SyllabusButtonSection from "@/app/components/SyllabusButtonSection";
import { facultyDetails, FacultyDetail } from "@/app/constant/facultyDetails";
import FacultyDetailPageButton from "@/components/FacultyDetailPageButton";
import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  Compass,
  HelpCircle,
  ArrowLeft,
  CheckCircle2,
  ListOrdered,
  GraduationCap,
  ClipboardList,
} from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = slug === "architectural-engineering" ? "architecture" : slug;
  const data: FacultyDetail | undefined = facultyDetails[canonicalSlug];

  const title = data ? data.title : slug.replace(/-/g, " ");

  return {
    title: `${title} Syllabus & Model Questions | NEC License Exam Preparation`,
    description: `Official Nepal Engineering Council (NEC) curriculum blueprint, chapter weightages, study notes, and verified model questions for ${title}.`,
    keywords: [
      `NEC ${title} License Exam`,
      `${title} NEC Syllabus`,
      `NEC Nepal ${title} Model Questions`,
      "Nepal Engineering Council License Exam Preparation",
    ],
  };
}

export default async function FacultyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonicalSlug = slug === "architectural-engineering" ? "architecture" : slug;
  const data: FacultyDetail | undefined = facultyDetails[canonicalSlug];
  const syllabusPath = data?.pdfPath || "/syllabus/NEC_Civil_Engineering_Syllabus.pdf";

  if (!data) {
    return (
      <div className="bg-white min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 text-center font-poppins pt-24 pb-20">
        <div className="relative z-10 max-w-md">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 mb-4">
            Curriculum Information
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 font-inter">Faculty Not Found</h1>
          <p className="mt-4 text-sm text-gray-500">
            Please choose from our supported engineering faculties.
          </p>
          <Link
            href="/syllabus"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-500 transition"
          >
            <ArrowLeft className="w-4 h-4" /> View All Syllabi
          </Link>
        </div>
      </div>
    );
  }

  // Schema.org FAQPage structured data for high SEO authority and quality signals
  const faqSchema = data.faqs && data.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-poppins">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative isolate px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20">
        <main className="pt-12">
          {/* Main 12-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Main Stream (8 Columns) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Header Title Segment */}
              <div>
                <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4">
                  Official Syllabus & Preparation Blueprint
                </span>
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-inter leading-tight">
                  {data.title} <span className="text-orange-600 font-medium">License Exam</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
                  {data.subtitle}
                </p>

                {/* Key Metrics Quick Ribbon */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Exam Duration</span>
                    <span className="text-base font-bold text-gray-900 font-inter">120 Mins</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Total Questions</span>
                    <span className="text-base font-bold text-gray-900 font-inter">100 MCQs</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Total Marks</span>
                    <span className="text-base font-bold text-gray-900 font-inter">100 Marks</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Pass Threshold</span>
                    <span className="text-base font-bold text-orange-600 font-inter">50% (50 Marks)</span>
                  </div>
                </div>
              </div>

              {/* Exam Overview Section */}
              <section className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                    Discipline Overview & Council Guidelines
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {data.examOverview}
                </p>
              </section>

              {/* Detailed Chapters Breakdown */}
              <section className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                    Official Chapter Breakdown & Weightage
                  </h2>
                </div>

                <div className="space-y-4">
                  {(data.chapters && data.chapters.length > 0
                    ? data.chapters
                    : data.syllabus.map((title, idx) => ({
                        chapterNumber: idx + 1,
                        title,
                        weight: "10 Marks",
                        description: `Core concepts and professional application in ${title}.`,
                        subtopics: [
                          "Fundamental concepts, definitions, and formulas",
                          "Discipline-specific analytical problem-solving",
                          "National and international engineering standards",
                        ],
                      }))
                  ).map((chap) => (
                    <div
                      key={chap.chapterNumber}
                      className="p-5 border border-gray-100 rounded-2xl bg-white shadow-3xs hover:border-orange-500/30 hover:shadow-sm transition"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-xs font-bold text-orange-600 font-inter">
                            {String(chap.chapterNumber).padStart(2, "0")}
                          </span>
                          <h3 className="font-bold text-gray-900 font-inter text-base">
                            {chap.title}
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-orange-600 bg-orange-50/80 px-2.5 py-1 rounded-full shrink-0">
                          {chap.weight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 pl-10">
                        {chap.description}
                      </p>
                      {chap.subtopics && (
                        <div className="pl-10 space-y-1.5 pt-2 border-t border-gray-50">
                          {chap.subtopics.map((sub, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                              <span>{sub}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* PDF Download Action Ribbon */}
                <div className="mt-8 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <SyllabusButtonSection pdfPath={syllabusPath} />
                </div>
              </section>

              {/* Verified Model Questions with Explanations */}
              {data.modelQuestions && data.modelQuestions.length > 0 && (
                <section className="border-t border-gray-100 pt-8">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                      <ClipboardList className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                        Sample Model Questions & Step-by-Step Solutions
                      </h2>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Practice representative questions modeled after actual council examination standards.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {data.modelQuestions.map((mq, qIdx) => (
                      <div
                        key={qIdx}
                        className="p-6 border border-gray-100 rounded-2xl bg-gray-50/40 hover:bg-white hover:shadow-md transition"
                      >
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-2 font-inter">
                          Sample Question {qIdx + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 leading-relaxed">
                          {mq.question}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition ${
                                opt === mq.answer
                                  ? "border-emerald-500 bg-emerald-50/60 text-emerald-950 font-semibold"
                                  : "border-gray-200/80 bg-white text-gray-700"
                              }`}
                            >
                              <span className="mr-2 text-gray-400">
                                {String.fromCharCode(65 + oIdx)}.
                              </span>
                              {opt}
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl bg-white border border-emerald-100 p-4 text-xs sm:text-sm text-gray-600 space-y-1">
                          <p className="font-bold text-emerald-900 flex items-center gap-1.5 font-inter">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Correct Answer: {mq.answer}
                          </p>
                          <p className="text-gray-500 leading-relaxed pt-1">
                            <strong>Explanation:</strong> {mq.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Discipline-Specific FAQs */}
              {data.faqs && data.faqs.length > 0 && (
                <section className="border-t border-gray-100 pt-8">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                      Frequently Asked Questions ({data.title})
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {data.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-5 border border-gray-100 rounded-2xl bg-white shadow-3xs"
                      >
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base font-inter mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Sticky Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 sticky top-24 lg:mt-2">
              <div className="relative group rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/40">
                <div className="relative z-10 space-y-6">
                  <h2 className="text-lg font-bold text-gray-900 font-inter tracking-tight flex items-center gap-2 pb-3 border-b border-gray-100">
                    <Compass className="w-4 h-4 text-orange-600" />
                    Preparation Strategy
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm font-poppins text-gray-600">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-gray-900 block font-inter font-semibold">
                          Master Chapter 10 (10%)
                        </strong>
                        Ethics and project management carry 10 marks across all streams.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <ListOrdered className="w-3 h-3" />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-gray-900 block font-inter font-semibold">
                          Uniform 1-Mark Weightage
                        </strong>
                        All 100 questions carry 1 mark each (100 marks total). Practice formulas, conceptual definitions, and numerical problems uniformly.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <BookOpen className="w-3 h-3" />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-gray-900 block font-inter font-semibold">
                          Timed CBT Simulations
                        </strong>
                        Complete full 120-minute mock exams to improve pacing under pressure.
                      </p>
                    </div>
                  </div>

                  {/* Start Mock Test Button */}
                  <div className="pt-2 border-t border-gray-50">
                    <FacultyDetailPageButton faculty={canonicalSlug} />
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </main>
      </div>
    </div>
  );
}
