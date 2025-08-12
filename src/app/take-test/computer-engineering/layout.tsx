import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Computer Engineering - NEC License Exam Preparation MCQ",
  description:
    "Prepare for the NEC License exam with Computer Engineering MCQs covering DSA, OS, CN, DBMS, and Software Engineering. Practice with chapter-wise quizzes and model questions.",
  keywords:
    "NEC License MCQ, Computer Engineering MCQs, NEC exam preparation, DSA MCQs, OS questions, CN practice, DBMS quizzes, Software Engineering test, Nepal Engineering Council exam",
  
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
