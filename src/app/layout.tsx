import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NEC License Exam Preparation | Nepal Engineering Council MCQs",
    template: "%s | NEC License Exam Preparation",
  },
  description:
    "Prepare for the Nepal Engineering Council License exam with targeted MCQ practice tests for Civil, Computer,Software, Architecture, Electrical, Mechanical, and other engineering disciplines. Access chapter-wise quizzes, model questions, and detailed solutions to boost your success.",
  keywords:
    "NEC License MCQ, NEC exam preparation, Nepal Engineering Council questions, license exam practice, engineering MCQs Nepal, NEC registration test,NEC License MCQ, NEC exam practice, Civil Engineering MCQs, Computer Engineering questions, Architecture license exam, Electrical Engineering NEC, Mechanical Engineering test, Engineering licensing Nepal, NEC model questions, engineering chapter quizzes, engineering exam solutions, Nepal engineering license preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
