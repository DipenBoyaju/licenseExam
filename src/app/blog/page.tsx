import React from "react";
import { blogData } from "../constant/constant";
import { Metadata } from "next";
import BlogCard from "../components/common/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => {
  return (
    <section className="bg-white-bg ">
      <div className="pt-3 mt-10 container">
        <div className="py-16">
          <div className="flex sm:items-center justify-between w-full flex-col sm:flex-row sm:gap-20 sm:justify-start">
            <h2 className="text-3xl font-semibold sm:min-w-[35%]">
              Latest <br className="max-sm:hidden" />
              <span className="text-[#828282]">Blog Post</span>
            </h2>
            <p className="text-[#828282] sm:max-w-[65%] lg:w-full max-sm:mt-4">
              Fresh Insights, Dive into Our Latest Blog Post for Innovative
              Ideas and Inspirations. Unlock your creativity with our blog post
              and discover fresh perspectives! Get ready to be inspired and
              ignite your imagination today!
            </p>
          </div>

          {/* Blog section */}
          <div className="mt-8 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-12">
            {blogData.map((blog) => (
              <div key={blog.id}>
                <BlogCard
                  title={blog.title}
                  photo={blog.photo}
                  id={blog.id}
                  description1={blog.description1}
                  date={blog.date}
                  author={blog.author}
                  // description2={blog.description2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
