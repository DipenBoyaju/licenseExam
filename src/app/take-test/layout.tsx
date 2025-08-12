import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Take Test",
    description:
        "Prepare effectively for the NEC License exam with our extensive MCQ practice tests. Access chapter-wise quizzes, model question sets, and detailed solutions to master all topics and boost your success.",
    keywords:[
        "NEC License MCQ, NEC exam preparation, Nepal Engineering Council questions, license exam practice, engineering MCQs Nepal, NEC registration test",
    ]
};

interface TakeTestLayout {
  children: ReactNode;
}

export default function TakeTestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
