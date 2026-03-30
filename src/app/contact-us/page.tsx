"use client";

import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-24 sm:py-32 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-inter">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-poppins font-normal">
            Have questions about the NEC syllabus or found a technical issue?
            Our team is here to help you on your journey to becoming a licensed engineer.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:border-orange-500 transition group">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 mb-6 group-hover:bg-orange-100 transition">
                <EnvelopeIcon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4">For support and inquiries</p>
              {/* <a href="mailto:support@neclicenseexam.vercel.app" className="text-orange-600 font-semibold hover:underline">
                support@neclicenseexam.vercel.app
              </a> */}
            </div>

            {/* Support Card */}
            <div className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:border-orange-500 transition group">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 mb-6 group-hover:bg-orange-100 transition">
                <ChatBubbleLeftRightIcon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Feedback</h3>
              <p className="text-gray-500 text-sm mb-4">Report an error in a question</p>
              {/* <span className="text-gray-900 font-medium italic">Available 24/7 via Email</span> */}
            </div>

            {/* Location Card */}
            <div className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:border-orange-500 transition group">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 mb-6 group-hover:bg-orange-100 transition">
                <MapPinIcon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-500 text-sm mb-4">Operating from</p>
              <span className="text-gray-900 font-medium uppercase tracking-wider">Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Simple Contact Form for "Value Content" points */}
          <div className="mt-20 max-w-2xl mx-auto bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                <input type="text" className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Subject</label>
                <select className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm">
                  <option>General Inquiry</option>
                  <option>Question Error Report</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={4} className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-600 uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}