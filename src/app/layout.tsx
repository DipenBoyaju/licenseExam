import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";
import CookieConsent from "./components/common/CookieConsent";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neclicenseexam.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NEC License Exam Preparation | Nepal Engineering Council CBT Mock Tests",
    template: "%s | NEC License Exam Preparation",
  },
  description:
    "Prepare for the Nepal Engineering Council (NEC) License Exam with timed CBT mock tests, chapter-wise question sets, and official syllabi for Computer, Civil, Electrical, and Architecture disciplines.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "NEC license exam",
    "Nepal Engineering Council mock test",
    "NEC question sets",
    "Computer engineering NEC MCQs",
    "Civil engineering NEC license",
    "Electrical engineering NEC practice",
    "Architecture NEC license exam",
    "NEC exam syllabus Nepal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NEC License Exam Preparation",
    title: "NEC License Exam Preparation | Free Engineering CBT Mock Tests",
    description:
      "Practice targeted MCQs, timed mock exams, and official syllabi for Nepal Engineering Council license exams. Free preparation for Computer, Civil, Electrical, and Architecture graduates.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "NEC License Exam Preparation Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEC License Exam Preparation | Free CBT Mock Tests",
    description:
      "Practice targeted MCQs, timed mock exams, and official syllabi for Nepal Engineering Council license exams.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="NEC License Exam Preparation RSS Feed"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Take Test",
                  item: (process.env.NEXT_PUBLIC_SITE_URL || "https://neclicenseexam.vercel.app") + "/take-test",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Syllabus",
                  item: (process.env.NEXT_PUBLIC_SITE_URL || "https://neclicenseexam.vercel.app") + "/syllabus",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Blog",
                  item: (process.env.NEXT_PUBLIC_SITE_URL || "https://neclicenseexam.vercel.app") + "/blog",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "About Us",
                  item: (process.env.NEXT_PUBLIC_SITE_URL || "https://neclicenseexam.vercel.app") + "/about-us",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q7126RVQTC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Q7126RVQTC');
          `}
        </Script>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
         <CookieConsent />
      </body>
    </html>
  );
}
