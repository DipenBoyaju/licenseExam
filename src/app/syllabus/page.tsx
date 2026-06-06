import { facultyDetails } from "@/app/constant/facultyDetails";
import SyllabusGrid from "@/components/SyllabusGrid";

export const metadata = {
  title: "Engineering Syllabus - NEC License Exam",
  description: "Explore the official NEC license exam syllabus for all engineering faculties.",
};

export default function SyllabusPage() {
  // Convert our facultyDetails object into an array for the grid
  const faculties = Object.entries(facultyDetails).map(([slug, detail]) => ({
    slug,
    ...detail,
  }));

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Structural ambient lighting blurred shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-16 sm:py-24">

          {/* Asymmetrical 12-Column Split Hero Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

            {/* Left Narrative Block (Spans 6 Columns) */}
            <div className="lg:col-span-6 text-left">
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-6">
                Official Curriculum
              </span>

              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
                Course <span className="text-orange-600 font-medium">Syllabus</span> & Schemes
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-500 font-poppins">
                Select your engineering faculty below to unpack comprehensive chapter weights,
                official curriculum guidelines, and targeted sub-topics approved under the NEC Act.
              </p>

              {/* Minimal dynamic info strip */}
              <div className="mt-6 flex flex-wrap gap-3 items-center text-xs font-semibold text-gray-400 font-poppins">
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Updated 2082/2083
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  CBT Compliant
                </span>
              </div>
            </div>

            {/* Right Abstract Mesh Framework Block (Spans 6 Columns) */}
            <div className="lg:col-span-6 relative w-full hidden lg:block">
              <div className="absolute inset-0 bg-linear-to-r from-orange-100 to-amber-50 rounded-3xl blur-xl opacity-30 pointer-events-none" />

              {/* Clean minimalist info dashboard module placeholder mimicking image layout curves */}
              <div className="relative border border-gray-100 bg-linear-to-b from-gray-50/50 to-white p-8 rounded-2xl shadow-xs overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none font-mono text-[120px] font-bold select-none leading-none -translate-y-4 translate-x-4 text-orange-600">
                  NEC
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 font-inter mb-4">Exam Blueprint Matrix</h3>
                <div className="space-y-3 font-poppins text-sm">
                  <div className="flex justify-between items-center pb-2.5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Basic Sciences & Core Eng.</span>
                    <span className="font-bold text-gray-900">30 Marks</span>
                  </div>
                  <div className="flex justify-between items-center pb-2.5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Faculty Specific Subjects</span>
                    <span className="font-bold text-gray-900">60 Marks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Professional Practice & Ethics</span>
                    <span className="font-bold text-orange-600">10 Marks</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* The Client-Side Grid Component */}
          <div className="relative pt-6 border-t border-gray-100">
            <SyllabusGrid faculties={faculties} />
          </div>

        </div>
      </div>
    </div>
  );
}