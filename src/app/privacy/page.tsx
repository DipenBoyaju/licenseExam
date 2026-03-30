"use client";

import { ShieldCheckIcon, LockClosedIcon, EyeIcon } from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ShieldCheckIcon className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-inter">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-500 font-poppins">
            Last Updated: March 30, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-gray-600 font-poppins leading-relaxed">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <EyeIcon className="w-6 h-6 text-orange-600" /> 1. Information We Collect
            </h2>
            <p>
              At <strong>NEC License Exam Portal</strong>, we collect minimal data to provide you with the best study experience. This includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Personal Data:</strong> Name and email address (only if you create an account).</li>
              <li><strong>Usage Data:</strong> Which mock tests you take and your scores to track progress.</li>
              <li><strong>Log Data:</strong> IP address, browser type, and pages visited.</li>
            </ul>
          </section>

          {/* CRITICAL FOR ADSENSE APPROVAL */}
          <section className="mb-12 p-8 bg-orange-50 rounded-2xl border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Advertising & Cookies</h2>
            <p className="mb-4">
              We use <strong>Google AdSense</strong> to serve advertisements. Google, as a third-party vendor, uses cookies to serve ads on our site.
            </p>
            <div className="space-y-4 text-sm">
              <p>
                • <strong>DoubleCLick Cookie:</strong> Google’s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
              </p>
              <p>
                • <strong>Opt-Out:</strong> Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="text-orange-600 underline font-semibold">Google Ad Settings</a>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <LockClosedIcon className="w-6 h-6 text-orange-600" /> 3. Data Security
            </h2>
            <p>
              Your data security is important to us. We implement industry-standard encryption to protect your mock test results and account information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p>
              We may use third-party analytics (like Google Analytics) to monitor and analyze the use of our Service. These third parties have access to your Personal Data only to perform these tasks on our behalf.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4 font-bold text-gray-900">
              Email: support@neclicenseexam.vercel.app
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}