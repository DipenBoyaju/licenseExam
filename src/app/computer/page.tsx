import SetCard from "@/components/SetCard";

const sets = [
  {
    id: "1",
    title: "Set 1",
    description: "Covers basic computer engineering concepts.",
  },
  {
    id: "2",
    title: "Set 2",
    description: "Includes questions on microprocessors.",
  },
  {
    id: "3",
    title: "Set 3",
    description: "Focus on computer networks.",
  },
  {
    id: "4",
    title: "Set 4",
    description: "Operating systems concepts and questions.",
  },
  {
    id: "5",
    title: "Set 5",
    description: "Data structures and algorithms.",
  },
  {
    id: "6",
    title: "Set 6",
    description: "Database systems and queries.",
  },
  {
    id: "7",
    title: "Set 7",
    description: "Web technologies and applications.",
  },
  {
    id: "8",
    title: "Set 8",
    description: "Software engineering and SDLC.",
  },
  {
    id: "9",
    title: "Set 9",
    description: "Computer architecture topics.",
  },
  {
    id: "10",
    title: "Set 10",
    description: "Miscellaneous and advanced topics.",
  },
];

export default function page() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6  lg:px-18">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="pt-28 pb-10">
          <div className="space-y-3">
            <h2 className="font-inter font-bold text-2xl">Practice Question Sets</h2>
            <p className="font-poppins text-sm">Choose from multiple sets, each curated to help you master a specific topic in physics.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-6">
            {
              sets.map((item) => (
                <SetCard key={item.id} set={item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
