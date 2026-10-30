"use client";

import Image from "next/image";
import Link from "next/link";
import type { blogData } from "@/app/constant/constant";
import { BookOpen, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

type BlogType = (typeof blogData)[number];

type BlogPageClientProps = {
  blog: BlogType;
};

export default function BlogPageClient({ blog }: BlogPageClientProps) {
  return (
    <main className="bg-[#fafafa] pb-24 pt-20 font-poppins">
      <article
        className="max-w-5xl mx-auto px-6 lg:px-8 mt-12 text-[#374151]"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Article Breadcrumb & Metadata Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-400">Preparation Guide</span>
          </div>

          <h1
            itemProp="headline"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight font-inter"
          >
            {blog.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 pb-6 border-b border-gray-200">
            {blog.author && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs font-inter">
                  {blog.author.charAt(0)}
                </div>
                <span itemProp="author" className="font-semibold text-gray-800">
                  {blog.author}
                </span>
              </div>
            )}

            {blog.date && (
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                <time itemProp="datePublished" dateTime={blog.date}>
                  {blog.date}
                </time>
              </div>
            )}

            <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified for NEC Exam Syllabus</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {blog.photo && (
          <figure className="mb-12">
            <div className="relative h-[280px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-gray-100">
              <Image
                src={blog.photo}
                alt={`${blog.title} - NEC License Exam Preparation`}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                className="object-cover"
              />
            </div>
            <figcaption className="sr-only">{blog.title}</figcaption>
          </figure>
        )}

        {/* Quick Table of Contents (if description2 has sections) */}
        {Array.isArray(blog.description2) && blog.description2.length > 0 && (
          <nav aria-label="Table of Contents" className="mb-12 p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2 font-inter">
              <BookOpen className="w-4 h-4 text-orange-600" />
              In This Article
            </h2>
            <ul className="space-y-2 text-sm">
              {blog.description2.map((sec, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    className="text-gray-600 hover:text-orange-600 hover:underline flex items-start gap-2"
                  >
                    <span className="text-orange-500 font-semibold">{idx + 1}.</span>
                    <span>{sec.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Introduction */}
        <section
          itemProp="articleBody"
          className="text-base sm:text-lg leading-relaxed text-gray-700 mb-12 space-y-4"
        >
          {blog.description1.split("\n").map((text, index) => (
            <p key={index} className="leading-relaxed">
              {text}
            </p>
          ))}
        </section>

        {/* Main Article Sections */}
        {Array.isArray(blog.description2) && blog.description2.length > 0 && (
          <div className="flex flex-col gap-12">
            {blog.description2.map((desc, index) => (
              <section
                key={desc.title}
                id={`section-${index}`}
                className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-xs"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-inter leading-tight">
                  {desc.title}
                </h2>

                {desc.subtitle && (
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                    {desc.subtitle}
                  </p>
                )}

                {Array.isArray(desc.descriptionList) && desc.descriptionList.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {desc.descriptionList.map((description, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Interactive Practice Call to Action Box */}
        <div className="my-16 p-8 rounded-3xl bg-linear-to-r from-orange-600 to-amber-600 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-inter">
              Ready to test your knowledge?
            </h3>
            <p className="text-sm text-orange-100 max-w-lg">
              Take free computer-based mock tests modeled after the official Nepal Engineering Council (NEC) examination pattern.
            </p>
          </div>
          <Link
            href="/take-test"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-6 py-3 rounded-xl shadow-md transition shrink-0 text-sm font-inter"
          >
            Start Free Test <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Author & Reviewer Badge Footer */}
        <footer
          className="border-t border-gray-200 pt-8 mt-12 text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          itemProp="publisher"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div>
            <p className="font-semibold text-gray-800">
              Published by <span itemProp="name">NEC License Exam Preparation</span>
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Curated by engineering graduates and licensed practitioners in Nepal.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wider inline-flex items-center gap-1"
          >
            ← View All Articles
          </Link>
        </footer>
      </article>
    </main>
  );
}
