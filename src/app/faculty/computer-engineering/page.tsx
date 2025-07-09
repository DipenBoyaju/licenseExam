import Link from "next/link";
import { BookOpen, History } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 lg:px-18">
        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="max-w-6xl mx-auto pt-28 pb-20">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl">
              Practice Question Sets
            </h2>
            <p className="font-poppins text-gray-600 mt-2 max-w-2xl mx-auto">
              Prepare smartly — take a new quiz or review your previous attempts to see your progress.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Start Quiz Card */}
            <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl hover:border-blue-600 transition">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Start a New Quiz</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Take a fresh quiz from our curated sets and test your knowledge.
                </p>
              </div>
              <Link
                href="/faculty/computer-engineering/quiz"
                className="inline-block self-start px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Start Quiz
              </Link>
            </div>

            {/* View History Card */}
            <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl hover:border-green-600 transition">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <History className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">View Past Sets</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Check your previous quiz results and see how much you’ve improved.
                </p>
              </div>
              <Link
                href="/history"
                className="inline-block self-start px-5 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                View History
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
