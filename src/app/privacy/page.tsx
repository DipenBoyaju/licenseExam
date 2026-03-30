"use client";

import { ShieldCheckIcon, LockClosedIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ShieldCheckIcon className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-inter">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-500 font-poppins">
            Last updated: 30 March 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-slate max-w-none text-gray-600 font-poppins leading-relaxed">
          <p className="text-lg">
            Welcome to <strong>NEC License Exam Preparation</strong> (https://neclicenseexam.vercel.app).
            This Privacy Policy explains how we collect, use, and protect your information when you use our website.
          </p>

          <hr className="my-10 border-gray-100" />

          {/* 1. Information Collection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-6 h-6 text-orange-600" /> 1. What information we collect
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Basic usage data:</strong> IP address, browser type, device information, pages visited, and time spent on the site via standard analytics.</li>
              <li><strong>Optional information:</strong> Name, email address, and message content if you contact us via form or email.</li>
              <li><strong>Test/quiz data:</strong> Temporary storage of answers and results for session-only feedback. We do not store personal identifiers unless explicitly submitted.</li>
            </ul>
            <p className="mt-4 italic text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
              We do <strong>not</strong> currently collect sensitive data such as government IDs or financial details unless explicitly provided in a necessary context.
            </p>
          </section>

          {/* 2. Usage */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How we use your information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Deliver and maintain the website and practice-test features.</li>
              <li>Improve content and user experience (fixing bugs, optimizing question banks).</li>
              <li>Respond to your contact-form messages or emails.</li>
              <li>Monitor usage patterns to understand user interaction.</li>
            </ul>
            <p className="mt-2 font-semibold text-gray-900">We do not sell your personal data to third parties.</p>
          </section>

          {/* 3. Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies and tracking</h2>
            <p>Our site may use cookies to remember your preferences and analyze traffic. You can manage or disable cookies in your browser settings, though this may limit some site features.</p>
          </section>

          {/* 4. Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <LockClosedIcon className="w-6 h-6 text-orange-600" /> 4. Data sharing and security
            </h2>
            <p>
              We do not share your personal data with advertisers or third-party data brokers. Data is processed on secure servers (Vercel) using HTTPS and access controls.
              While we take reasonable measures, no internet transmission is 100% secure.
            </p>
          </section>

          {/* 5. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Children’s privacy</h2>
            <p>Our resources are intended for engineering students and professionals. We do not knowingly collect personal information from children under 16 without parental consent.</p>
          </section>

          {/* 6. Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your rights</h2>
            <p>You may have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us using the information below.</p>
          </section>

          {/* 7. Changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to this policy</h2>
            <p>We may update this policy periodically. Any changes will be posted on this page with a new “Last updated” date.</p>
          </section>

          {/* 8. Contact */}
          <section className="mt-16 p-8 bg-orange-600 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-4">8. Contact us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, reach out to us:</p>
            <div className="space-y-2">
              <p><strong>Contact:</strong> <a href="https://neclicenseexam.vercel.app/contact-us" className="underline text-orange-100">Contact Form</a></p>
              {/* <p><strong>Email:</strong> support@neclicenseexam.vercel.app</p> */}
              <p><strong>Website:</strong> <a href="https://neclicenseexam.vercel.app" className="underline text-orange-100">neclicenseexam.vercel.app</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}