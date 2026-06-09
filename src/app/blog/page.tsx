import React from "react";
import { blogData } from "../constant/constant";
import { Metadata } from "next";
import BlogCard from "../components/common/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    /* 1. Updated background to match clean page themes.
      2. Set pt-24 to safely slide content underneath your fixed global navigation header.
    */
    <section className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Hero Title Section Block */}
        <div className="py-12 border-b border-zinc-100">
          <div className="flex sm:items-center justify-between w-full flex-col sm:flex-row sm:gap-20 sm:justify-start">
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl sm:min-w-[35%] font-inter">
              Latest <br className="max-sm:hidden" />
              <span className="text-[#f54a00]">Blog Posts</span>
            </h2>
            <p className="text-zinc-500 sm:max-w-[65%] lg:w-full max-sm:mt-4 text-base leading-relaxed">
              Fresh Insights, Dive into Our Latest Blog Post for Innovative
              Ideas and Inspirations. Unlock your creativity with our blog post
              and discover fresh perspectives! Get ready to be inspired and
              ignite your imagination today!
            </p>
          </div>
        </div>

        {/* Main Grid Section:
          Replaced 'place-items-center' with robust flex align tokens to prevent 
          cards from losing layout shape across differing paragraph height variations.
        */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="flex flex-col items-start justify-between">
              <BlogCard
                title={blog.title}
                photo={blog.photo}
                id={blog.id}
                description1={blog.description1}
                date={blog.date}
                author={blog.author}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}