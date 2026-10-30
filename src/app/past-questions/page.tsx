import Link from "next/link";
import {
  DocumentArrowDownIcon,
  BookOpenIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Past Question Format & Model Question Guidelines | NEC License Exam",
  description:
    "Explore the Nepal Engineering Council (NEC) examination pattern, past question formats, chapter weightages, and download official syllabus blueprints for all disciplines.",
};

const syllabusDownloads = [
  {
    discipline: "Computer Engineering",
    filename: "NEC_Computer_Engineering_Syllabus.pdf",
    path: "/syllabus/NEC_Computer_Engineering_Syllabus.pdf",
    testUrl: "/take-test/computer-engineering",
    active: true,
  },
  {
    discipline: "Civil Engineering",
    filename: "NEC_Civil_Engineering_Syllabus.pdf",
    path: "/syllabus/NEC_Civil_Engineering_Syllabus.pdf",
    testUrl: "/take-test/civil-engineering",
    active: true,
  },
  {
    discipline: "Electrical & Electronics Engineering",
    filename: "NEC_Electrical&Electronics_Engineering_Syllabus.pdf",
    path: "/syllabus/NEC_Electrical&Electronics_Engineering_Syllabus.pdf",
    testUrl: "/take-test",
    active: false,
  },
  {
    discipline: "Architecture Engineering",
    filename: "NEC_Architecture_Engineering_Syllabus.pdf",
    path: "/syllabus/NEC_Architecture_Engineering_Syllabus.pdf",
    testUrl: "/take-test",
    active: false,
  },
];

const examStructure = [
  {
    section: "Section A: Core Engineering & Sciences",
    weight: "60 Questions (60 Marks)",
    type: "1 Mark Each",
    description:
      "Assesses fundamental concepts, mathematical reasoning, foundational engineering sciences, and core discipline knowledge.",
  },
  {
    section: "Section B: Analytical & Professional Practice",
    weight: "20 Questions (40 Marks)",
    type: "2 Marks Each",
    description:
      "Deep problem-solving, numerical analysis, engineering ethics, standard codes of Nepal, safety bylaws, and project management.",
  },
];

export default function PastQuestionsPage() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-poppins pt-24 pb-20">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4">
            Exam Architecture & Archives
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
            NEC Exam <span className="text-orange-600 font-medium">Question Format</span> & Resources
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            Understand the official Nepal Engineering Council licensing test framework, question distribution, and download verified syllabus blueprints to prepare systematically.
          </p>
        </div>

        {/* Exam Structure Matrix */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 font-inter mb-6">
            Official Exam Pattern Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examStructure.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-sm font-semibold text-gray-700 font-inter">
                    {item.weight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-inter mb-2">
                  {item.section}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-orange-50/50 border border-orange-200/50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ClipboardDocumentCheckIcon className="w-6 h-6 text-orange-600 shrink-0" />
              <p className="text-sm text-orange-950 font-medium">
                <strong>Total Marks:</strong> 100 Marks | <strong>Pass Threshold:</strong> 50 Marks | <strong>Duration:</strong> 120 Minutes | <strong>Format:</strong> Computer Based Test (CBT)
              </p>
            </div>
            <Link
              href="/take-test"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 hover:text-orange-800 uppercase tracking-wider shrink-0"
            >
              Start Practice Test <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Official Blueprints and Syllabus Downloads */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-inter">
              Official Discipline Blueprints & Syllabi
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Download the official curriculum documents issued for the Nepal Engineering Council licensing examination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {syllabusDownloads.map((doc) => (
              <div
                key={doc.discipline}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-gray-100 bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 hover:border-b-orange-600"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <BookOpenIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 font-inter mb-1">
                    {doc.discipline}
                  </h3>
                  <p className="text-xs text-gray-400 font-poppins mb-6">
                    Official NEC Syllabus Guide
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-50">
                  <a
                    href={doc.path}
                    download
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-50 hover:bg-orange-50 hover:text-orange-600 py-2.5 px-3 text-xs font-bold text-gray-700 transition"
                  >
                    <DocumentArrowDownIcon className="w-4 h-4" /> Download PDF
                  </a>
                  {doc.active && (
                    <Link
                      href={doc.testUrl}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 py-2.5 px-3 text-xs font-bold text-white transition"
                    >
                      Take Mock Test <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Guidelines */}
        <div className="rounded-3xl border border-gray-100 bg-gray-50/50 p-8 sm:p-10">
          <h2 className="text-xl font-bold text-gray-900 font-inter mb-6 flex items-center gap-2.5">
            <AcademicCapIcon className="w-6 h-6 text-orange-600" />
            Strategic Preparation Guidelines for Previous-Year & Model Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 leading-relaxed">
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 font-inter mb-2 flex items-center gap-2">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
                Focus on 2-Mark Numerical Concepts
              </h3>
              <p>
                Section B questions carry 2 marks each and comprise 40% of your total score. Prioritize standard formula derivations, structural checks, and algorithm complexities.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 font-inter mb-2 flex items-center gap-2">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
                Pace Your Time Per Question
              </h3>
              <p>
                With 80 total questions to complete in 120 minutes, allocate roughly 60 seconds per 1-mark question to preserve ample time for analytical multi-step calculations.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 font-inter mb-2 flex items-center gap-2">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
                Review Engineering Ethics & Bylaws
              </h3>
              <p>
                Every engineering stream includes questions on the Nepal Engineering Council Act 2055, professional liability, public safety, and professional codes of conduct.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
