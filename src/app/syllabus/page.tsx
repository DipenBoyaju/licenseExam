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
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Reuse your decorative background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-200 to-orange-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl py-24 sm:py-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-inter">
              Course <span className="text-orange-600">Syllabus</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-poppins max-w-2xl mx-auto">
              Select your engineering faculty to view the detailed marking scheme,
              key chapters, and official NEC syllabus requirements.
            </p>
          </div>

          {/* The Client-Side Grid Component */}
          <SyllabusGrid faculties={faculties} />
        </div>
      </div>
    </div>
  );
}