import SyllabusButtonSection from "@/app/components/SyllabusButtonSection";
import { facultyDetails, FacultyDetail } from "@/app/constant/facultyDetails";
import FacultyDetailPageButton from "@/components/FacultyDetailPageButton";
import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  Compass,
  HelpCircle,
  ArrowLeft
} from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const formattedSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedSlug} - NEC License Exam Preparation`,
    description: `Prepare for the NEC License exam with ${formattedSlug} resources. Explore the syllabus, key topics, and tips for success in the exam.`,
    keywords: [
      `NEC License Exam ${formattedSlug}`,
      "NEC License Exam Preparation",
      `${formattedSlug} Syllabus`,
      "NEC License Exam Tips",
      `NEC License Exam Resources for ${formattedSlug}`,
    ],
  };
}

export default async function page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const data: FacultyDetail | undefined = facultyDetails[slug];
  const syllabusPath = data?.pdfPath || "/syllabus/NEC_Civil_Engineering_Syllabus.pdf";

  if (!data) {
    return (
      <div className="bg-white min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 text-center">
        {/* Structural ambient lighting blurred shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-md">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4 font-poppins">
            Curriculum Pipeline
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-inter">
            Coming Soon
          </h1>
          <p className="mt-4 text-base text-gray-500 capitalize leading-relaxed font-poppins">
            Our academic board is actively structuring resources and curated datasets for{" "}
            <span className="font-semibold text-gray-800">
              {slug.replace(/-/g, " ")}
            </span>.
          </p>
          <div className="w-16 h-1 bg-orange-500 mt-6 mx-auto rounded-full animate-pulse" />

          <Link
            href="/"
            className="mt-8 group inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-100 px-5 py-2.5 text-sm font-bold text-neutral-700 shadow-xs hover:bg-neutral-200/80 transition-all font-poppins"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Platform-standard signature ambient layout light particles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative isolate px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20">
        <main className="pt-12">
          {/* Asymmetrical 12-Column Main Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Main Content Canvas Stack (Spans 8 Columns) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Dynamic Course Header Card */}
              <div>
                <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4 font-poppins">
                  Official Syllabus Module
                </span>
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-inter leading-tight">
                  {data.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-500 font-poppins leading-relaxed">
                  {data.subtitle}
                </p>
              </div>

              {/* Refactored Interactive Syllabus Overview Accordion Section */}
              <section className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                    Syllabus Overview
                  </h2>
                </div>

                {/* Styled structural stream blocks instead of flat un-styled lists */}
                <div className="space-y-3 font-poppins text-sm sm:text-base">
                  {data.syllabus.map((chapter, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-3xs hover:border-orange-500/30 hover:shadow-xs transition duration-200"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-xs font-bold text-neutral-600 font-inter">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-700 font-medium leading-relaxed pt-0.5">
                        {chapter}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Upgraded Optional PDF Controller Button Wrapper row */}
                <div className="mt-8 p-4 rounded-2xl bg-gray-50/50 border border-gray-100">
                  <SyllabusButtonSection pdfPath={syllabusPath} />
                </div>
              </section>
            </div>

            {/* Right: Floating Study Tips & Resources Aside Sidebar (Spans 4 Columns) */}
            <aside className="lg:col-span-4 sticky top-24 lg:mt-2">
              <div className="relative group rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/40">
                <div className="absolute -inset-px bg-gradient-to-b from-orange-500/5 to-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-lg font-bold text-gray-900 font-inter tracking-tight mb-5 flex items-center gap-2 pb-3 border-b border-gray-100">
                    <Compass className="w-4 h-4 text-orange-600" />
                    Tips & Resources
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm font-poppins text-gray-600 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-gray-900 block font-inter font-semibold">Core Concept Focus</strong>
                        Prioritize foundation weights first to safely maximize baseline scoring.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <HelpCircle className="w-3 h-3" />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-gray-900 block font-inter font-semibold">Past Set Analytics</strong>
                        Consistently solve historical sequences to match required pace targets.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <BookOpen className="w-3 h-3" />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-gray-900 block font-inter font-semibold">Peer Group Review</strong>
                        Engage with our digital engineering lounge to resolve edge problems quickly.
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Action Navigation Hub Button Component block */}
                  <div className="pt-2 border-t border-gray-50">
                    <FacultyDetailPageButton faculty={slug} />
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