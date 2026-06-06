"use client";

import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Background ambient radial glow to blend with your other pages */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28 relative">
        {/* Asymmetrical 12-column grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Contextual Headline & Information Cards (Spans 5 Columns) */}
          <div className="lg:col-span-5 relative">
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-6">
              Contact Support
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-inter leading-tight">
              Get in <span className="text-orange-600 font-medium">Touch</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-500 font-poppins mb-12">
              Have questions about the NEC syllabus or found a technical issue?
              Our team is here to help you on your journey to becoming a licensed engineer.
            </p>

            {/* Stacked Informational Meta Rows */}
            <div className="space-y-4">
              {/* Row 1: Email */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <EnvelopeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 font-inter">Email Support</h3>
                  <p className="text-xs text-gray-400 font-poppins mt-0.5">For general inquiries and setup support</p>
                  <a href="mailto:support@neclicenseexam.vercel.app" className="text-sm text-orange-600 font-semibold hover:underline block mt-1 font-poppins">
                    support@neclicenseexam.vercel.app
                  </a>
                </div>
              </div>

              {/* Row 2: Feedback Loop */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 font-inter">Error Correction</h3>
                  <p className="text-xs text-gray-400 font-poppins mt-0.5">Report inaccurate MCQs or answer keys</p>
                  <span className="text-xs text-gray-500 font-medium font-poppins block mt-1 italic">Reviewed by Licensed Engineers</span>
                </div>
              </div>

              {/* Row 3: Operational Headquarters */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 font-inter">Location</h3>
                  <p className="text-xs text-gray-400 font-poppins mt-0.5">Operating centrally from</p>
                  <span className="text-sm text-gray-700 font-semibold tracking-wide block mt-1 font-poppins">Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Floating Form Panel Container (Spans 7 Columns) */}
          <div className="relative group lg:col-span-7 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-10 group-hover:opacity-15 transition duration-1000" />

            <div className="relative bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="mb-8 border-b border-gray-100 pb-6">
                <h2 className="text-xl font-bold text-gray-900 font-inter">Send us a Message</h2>
                <p className="text-xs text-gray-400 font-poppins mt-0.5">We typically respond to technical error tickets within 24 hours.</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-y-6 font-poppins">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Subject Classification</label>
                  <select className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition appearance-none">
                    <option>General Inquiry</option>
                    <option>Question Error Report</option>
                    <option>Feature Recommendation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Message Description</label>
                  <textarea
                    rows={4}
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 shadow-2xs placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-0 outline-none transition"
                    placeholder="Provide specific details here..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group/btn relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3.5 text-sm font-bold text-white shadow-md hover:bg-orange-500 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Send Message
                    <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}