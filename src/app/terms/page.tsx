import {
  DocumentCheckIcon,
  ScaleIcon,
  ShieldExclamationIcon,
  BookOpenIcon,
  ArrowPathIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NEC License Exam Preparation",
  description:
    "Review the terms of service, acceptable use guidelines, and independent educational disclaimers for the NEC License Exam Preparation platform.",
};

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-poppins">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28 relative">
        {/* Header Block */}
        <div className="border-b border-gray-100 pb-10 mb-16 text-left">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4 font-poppins">
            Legal Terms & Framework
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
            Terms of <span className="text-orange-600 font-medium">Service</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400 font-poppins">
            Last updated: March 30, 2026 • Platform Version 1.0
          </p>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Index (4 Columns) */}
          <aside className="lg:col-span-4 sticky top-24 hidden lg:block font-inter">
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                Document Sections
              </h3>
              <nav className="space-y-1 text-sm font-medium text-gray-500">
                <a
                  href="#acceptance"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition"
                >
                  <DocumentCheckIcon className="w-4 h-4 shrink-0" /> 1. Acceptance of Terms
                </a>
                <a
                  href="#disclaimer"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition"
                >
                  <ExclamationCircleIcon className="w-4 h-4 shrink-0" /> 2. Official Disclaimer
                </a>
                <a
                  href="#educational"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition"
                >
                  <BookOpenIcon className="w-4 h-4 shrink-0" /> 3. Educational Scope
                </a>
                <a
                  href="#liability"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition"
                >
                  <ShieldExclamationIcon className="w-4 h-4 shrink-0" /> 4. Limitation of Liability
                </a>
                <a
                  href="#conduct"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition"
                >
                  <ScaleIcon className="w-4 h-4 shrink-0" /> 5. Acceptable Conduct
                </a>
                <a
                  href="#modifications"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition"
                >
                  <ArrowPathIcon className="w-4 h-4 shrink-0" /> 6. Amendments
                </a>
              </nav>
            </div>
          </aside>

          {/* Right Text Content (8 Columns) */}
          <div className="lg:col-span-8 space-y-12 font-poppins text-gray-600 text-sm sm:text-base leading-relaxed">
            <p className="text-lg text-gray-500 leading-relaxed font-normal">
              Please review these Terms of Service carefully before utilizing the{" "}
              <strong>NEC License Exam Preparation</strong> website and services.
              By accessing or using our mock tests, syllabus guides, or analytical dashboards, you agree to be bound by these provisions.
            </p>

            {/* 1. Acceptance */}
            <section id="acceptance" className="scroll-mt-24 pt-4 first:pt-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <DocumentCheckIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p>
                By navigating this website, attempting computer-based mock assessments, downloading syllabus materials, or submitting contact inquiries, you confirm that you are at least 16 years of age and hold the legal capacity to agree to these Terms. If you do not agree with any part of these terms, please discontinue use immediately.
              </p>
            </section>

            {/* 2. Official Disclaimer */}
            <section id="disclaimer" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <ExclamationCircleIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                  2. Independent Educational Platform & Non-Affiliation
                </h2>
              </div>
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-amber-950 space-y-2">
                <p className="font-semibold text-sm">Strict Independence Notice:</p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  NEC License Exam Preparation is an <strong>independent educational practice resource</strong>. We are NOT associated with, authorized by, endorsed by, or affiliated with the <strong>Nepal Engineering Council (NEC)</strong> or any statutory government agency in Nepal.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  All trademarks, organizational logos, and licensing titles (&ldquo;Nepal Engineering Council&rdquo;, &ldquo;NEC&rdquo;) referenced on this site belong exclusively to their respective owners. For official licensing regulations, applicant registration, exam dates, and statutory results, candidates must consult the official council portal at <a href="https://nec.gov.np" target="_blank" rel="noopener noreferrer" className="underline font-bold text-orange-700">nec.gov.np</a>.
                </p>
              </div>
            </section>

            {/* 3. Educational Scope */}
            <section id="educational" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <BookOpenIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                  3. Educational Purpose & No Outcome Guarantee
                </h2>
              </div>
              <p>
                The multiple-choice questions, model answer keys, timed quizzes, and study articles published on this platform are provided strictly for practice, self-assessment, and academic revision.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>While we strive to curate accurate question sets aligned with the NEC Act 2055 exam syllabus, we make no representations or warranties regarding the absolute accuracy, completeness, or currency of all materials.</li>
                <li>Completion of mock tests or high performance on this platform does not guarantee passing the actual Nepal Engineering Council licensing examination.</li>
              </ul>
            </section>

            {/* 4. Limitation of Liability */}
            <section id="liability" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <ShieldExclamationIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                  4. Limitation of Liability
                </h2>
              </div>
              <p>
                In no event shall the platform creators, contributors, or maintainers be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use this platform, including but not limited to examination performance outcomes, loss of data, or reliance on information presented.
              </p>
            </section>

            {/* 5. Acceptable Conduct */}
            <section id="conduct" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <ScaleIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                  5. Acceptable User Conduct
                </h2>
              </div>
              <p>You agree to use this platform only for lawful educational purposes. You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Deploy automated scrapers, crawlers, or extraction scripts against our question databases without explicit written authorization.</li>
                <li>Attempt to bypass security constraints, overload platform servers, or disrupt mock test availability for other students.</li>
                <li>Republish, sell, or commercialize question collections or site content under fraudulent pretexts.</li>
              </ul>
            </section>

            {/* 6. Modifications */}
            <section id="modifications" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <ArrowPathIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">
                  6. Amendments to Terms
                </h2>
              </div>
              <p>
                We reserve the right to revise these Terms of Service at any time to reflect platform improvements, legal requirements, or evolving service features. Updated versions will be posted to this page with an updated effective date. Continued usage constitutes your consent to modified terms.
              </p>
            </section>

            {/* 7. Contact Desk */}
            <div className="relative group max-w-full w-full pt-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-10" />
              <div className="relative bg-neutral-950 p-6 sm:p-8 rounded-2xl text-white shadow-xl border border-neutral-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-orange-600 shadow-xs">
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-inter tracking-tight">
                    7. Inquiries & Legal Contact Desk
                  </h3>
                </div>
                <p className="text-neutral-400 font-poppins text-sm leading-relaxed mb-4">
                  For legal inquiries, copyright notices, or questions regarding these Terms, contact our administration desk:
                </p>
                <div className="space-y-2 text-xs sm:text-sm font-poppins text-neutral-300">
                  <p>
                    <strong>Contact Form:</strong>{" "}
                    <Link href="/contact-us" className="text-orange-400 hover:underline">
                      Interactive Support Desk
                    </Link>
                  </p>
                  <p>
                    <strong>Privacy Policy:</strong>{" "}
                    <Link href="/privacy" className="text-orange-400 hover:underline">
                      Read Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

