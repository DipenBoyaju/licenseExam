"use client";

import {
  LockClosedIcon,
  DocumentTextIcon,
  EyeIcon,
  UserGroupIcon,
  ScaleIcon,
  ArrowPathIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import { CookieIcon } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Platform-standard signature ambient layout light particles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-12 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28 relative">

        {/* Modernized Minimalist Header Section block */}
        <div className="border-b border-gray-100 pb-10 mb-16 text-left">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-4 font-poppins">
            Legal Architecture
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
            Privacy <span className="text-orange-600 font-medium">Policy</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400 font-poppins">
            Last updated: March 30, 2026 • Effective Platform Version 1.0
          </p>
        </div>

        {/* Asymmetrical 12-Column Split Framework Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Sticky Index Selector Navigation Module (Spans 4 Columns) */}
          <aside className="lg:col-span-4 sticky top-24 hidden lg:block font-inter">
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Document Sections</h3>
              <nav className="space-y-1 text-sm font-medium text-gray-500">
                <a href="#collection" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition">
                  <DocumentTextIcon className="w-4 h-4 shrink-0" /> 1. Data Collection
                </a>
                <a href="#usage" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition">
                  <EyeIcon className="w-4 h-4 shrink-0" /> 2. Information Usage
                </a>
                <a href="#cookies" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition">
                  <CookieIcon className="w-4 h-4 shrink-0" /> 3. Cookies & Tracking
                </a>
                <a href="#security" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition">
                  <LockClosedIcon className="w-4 h-4 shrink-0" /> 4. Data Security
                </a>
                <a href="#children" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition">
                  <UserGroupIcon className="w-4 h-4 shrink-0" /> 5. Youth Protection
                </a>
                <a href="#rights" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition">
                  <ScaleIcon className="w-4 h-4 shrink-0" /> 6. Your Legal Rights
                </a>
                <a href="#changes" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-white hover:text-orange-600 hover:shadow-xs transition">
                  <ArrowPathIcon className="w-4 h-4 shrink-0" /> 7. Policy Adjustments
                </a>
              </nav>
            </div>
          </aside>

          {/* Right Text Content Stream Frame (Spans 8 Columns) */}
          <div className="lg:col-span-8 space-y-12 font-poppins text-gray-600 text-sm sm:text-base leading-relaxed">

            <p className="text-lg text-gray-500 leading-relaxed font-normal">
              Welcome to the <strong>NEC License Exam Preparation Ecosystem</strong> (https://neclicenseexam.vercel.app).
              This disclosure explicitly clarifies the data models, system logs, and security strategies deployed to guard your privacy.
            </p>

            {/* 1. Information Collection */}
            <section id="collection" className="scroll-mt-24 pt-4 first:pt-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <DocumentTextIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">1. What Information We Collect</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Basic usage data:</strong> IP address, device telemetry matrices, browser versions, and real-time interaction metrics via standard processing handlers.</li>
                <li><strong>Optional configuration data:</strong> Full name, electronic mail address, and message payloads explicitly provided inside our Contact form layers.</li>
                <li><strong>Test application state logs:</strong> Temporary runtime processing storage tracking submitted question choices to deliver isolated, session-specific metric outputs.</li>
              </ul>
              <p className="mt-4 italic text-xs sm:text-sm bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500 text-gray-500">
                We do <strong>not</strong> build data pipelines to handle, track, or process legal identity records, passwords, or financial cards.
              </p>
            </section>

            {/* 2. Usage */}
            <section id="usage" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <EyeIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">2. How We Use Your Information</h2>
              </div>
              <p>All operational data models are managed to accomplish precise platform objectives:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Deploy, secure, and stabilize our localized mock assessment environment features.</li>
                <li>Audit query accuracy rates to prune out incorrect answer choices or broken sub-topic weight parameters.</li>
                <li>Route customer care text queries and support replies to your email accurately.</li>
              </ul>
              <p className="mt-3 font-semibold text-gray-900">We do not sell your personal data to third parties.</p>
            </section>

            {/* 3. Cookies */}
            <section id="cookies" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <CookieIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">3. Cookies and Tracking</h2>
              </div>
              <p>
                Our core systems deploy cookies to retain session settings and compile traffic metrics.
                You can completely isolate, block, or delete cookies via your browser settings panel at your discretion.
              </p>
            </section>

            {/* 4. Security */}
            <section id="security" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <LockClosedIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">4. Data Sharing & Security</h2>
              </div>
              <p>
                We do not share your structural information profiles with third-party advertising brokers.
                All data packets are processed using cloud infrastructure nodes (Vercel) over secure HTTPS channels.
                While we enforce structural safety controls, no web transaction is 100% airtight.
              </p>
            </section>

            {/* 5. Children's Privacy */}
            <section id="children" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <UserGroupIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">5. Children’s Privacy Guidelines</h2>
              </div>
              <p>
                Our study assets are tailored exclusively for engineering professionals and university students.
                We do not knowingly log, trace, or harvest profiles belonging to individuals under 16 years of age.
              </p>
            </section>

            {/* 6. Rights */}
            <section id="rights" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <ScaleIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">6. Your Legal System Rights</h2>
              </div>
              <p>
                Depending on your location, you hold the right to read, modify, or erase all personal data markers.
                To deploy these right settings, drop an operational ticket to our team via the communication paths below.
              </p>
            </section>

            {/* 7. Changes */}
            <section id="changes" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 shadow-2xs">
                  <ArrowPathIcon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-inter tracking-tight">7. Policy Adjustments</h2>
              </div>
              <p>
                We reserve the right to modify these terms. All upcoming adjustments will be logged onto this path,
                and we will refresh the validation date flag at the top of the canvas instantly.
              </p>
            </section>

            {/* 8. Contact (Upgraded Premium Glass Obsidian Theme block) */}
            <div className="relative group max-w-full w-full pt-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-10" />
              <div className="relative bg-neutral-950 p-6 sm:p-8 rounded-2xl text-white shadow-xl border border-neutral-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-orange-600 shadow-xs">
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-inter tracking-tight">8. Legal Support & Queries</h3>
                </div>
                <p className="text-neutral-400 font-poppins text-sm leading-relaxed mb-6">
                  Have compliance concerns or privacy integration questions? Get in touch with our security compliance desk:
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm font-poppins">
                  <p><strong className="text-neutral-300">Contact Path:</strong> <a href="/contact-us" className="text-orange-400 hover:underline">Interactive Support Desk Form</a></p>
                  <p><strong className="text-neutral-300">Central Hub:</strong> <Link href="/" className="text-orange-400 hover:underline">neclicenseexam.vercel.app</Link></p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}