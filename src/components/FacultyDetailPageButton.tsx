'use client'

import { useQuizStore } from "@/store/quizStore";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

const FacultyDetailPageButton = ({ faculty }: { faculty: string }) => {
  const router = useRouter();
  const reset = useQuizStore((s) => s.reset);

  const handleStart = () => {
    reset();
    router.push(`/take-test/${faculty}/quiz`)
  }
  return (
    <Button
      onClick={handleStart}
      className="mt-4 inline-block w-full bg-orange-600 text-center text-white px-4 py-2 rounded-md hover:bg-orange-500 transition cursor-pointer"
    >
      Start Mock Tests →
    </Button>
  )
}
export default FacultyDetailPageButton