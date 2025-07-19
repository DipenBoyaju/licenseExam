export default function FacultyPage() {
  return (
    <div>
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
        <main className="mt-32 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left: Main Content */}
            <div className="md:col-span-2">
              {/* Page Header */}
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Computer Engineering
              </h1>
              <p className="mb-10 text-gray-600 max-w-3xl">
                Get an overview of the core syllabus and key topics for the NEC License Exam in Computer Engineering.
              </p>

              {/* Syllabus Overview */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Syllabus Overview
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Engineering Mathematics</li>
                  <li>Computer Organization & Architecture</li>
                  <li>Digital Logic Design</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Operating Systems</li>
                  <li>Database Management Systems</li>
                  <li>Computer Networks</li>
                  <li>Software Engineering</li>
                </ul>
                {/* Optional PDF */}
                <a
                  href="/files/computer-engineering-syllabus.pdf"
                  className="inline-block mt-4 text-orange-600 font-medium hover:underline"
                  download
                >
                  Download Full Syllabus PDF →
                </a>
              </section>
            </div>

            {/* Right: Tips & Resources */}
            <aside className="bg-gray-50 border border-gray-200 rounded-lg p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Tips & Resources
              </h2>
              <p className="text-gray-700 mb-3">
                ✅ Focus on core concepts first.
              </p>
              <p className="text-gray-700 mb-3">
                ✅ Solve previous year questions.
              </p>
              <p className="text-gray-700 mb-3">
                ✅ Join our community for notes & doubt solving.
              </p>
              <a
                href="/community"
                className="text-orange-600 font-medium hover:underline"
              >
                Join Community →
              </a>

              <a
                href="/mock-tests/computer-engineering"
                className="mt-4 inline-block w-full bg-orange-600 text-center text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
              >
                Start Mock Tests →
              </a>
            </aside>
          </div>
        </main>
      </div>
    </div>
  )
}