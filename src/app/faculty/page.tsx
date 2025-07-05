'use client'

import { Card, CardContent } from "@/components/ui/card";
import { BrickWall, Laptop } from "lucide-react";
import { useRouter } from "next/navigation";

const departments = [
  { title: "Computer Engineering", icon: <Laptop />, desc: "Includes topics like DSA, OS, CN, DBMS, and Software Engineering." },
  { title: "Civil Engineering", icon: <BrickWall strokeWidth={1} />, desc: "Covers structures, fluid mechanics, surveying, soil, and more." },
  { title: "Architecture", icon: <BrickWall strokeWidth={1} />, desc: "Covers structures, fluid mechanics, surveying, soil, and more." },
]
export default function Page() {
  const router = useRouter()
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
        <div className="mt-32">
          <h1 className="text-4xl font-bold mb-4 text-center text-orange-500 tracking-tight text-balance font-inter ">Select Your Engineering Field</h1>
          <p className="text-center text-gray-600 mb-10">
            Choose your discipline to start practicing NEC license exam questions tailored for your engineering stream.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((branch, idx) => (
            <Card key={idx} className="cursor-pointer hover:shadow-lg transition" onClick={() => router.push('/computer')}>
              <CardContent className="flex items-start gap-4 p-5">
                <div className="text-white bg-orange-500 rounded-md p-2">{branch.icon}</div>
                <div>
                  <h2 className="text-xl font-inter font-semibold">{branch.title}</h2>
                  <p className="text-sm text-gray-600 font-poppins pt-2">{branch.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
