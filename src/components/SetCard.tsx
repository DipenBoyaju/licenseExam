'use client'

import { FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

export default function SetCard({ set }) {
  const router = useRouter()
  return (
    <Card className="cursor-pointer" onClick={() => router.push('/sets')}>
      <CardContent className="flex items-center gap-4">
        <div className="bg-orange-500 text-white rounded-full p-3">
          <FileText strokeWidth={1} size={30} />
        </div>
        <div className="">
          <span className="font-inter text-sm text-orange-500">Computer Engineering</span>
          <p className="font-poppins text-lg">Question Set {set.id}</p>
        </div>
      </CardContent>
    </Card>
  )
}