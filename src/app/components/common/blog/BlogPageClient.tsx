"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { blogData } from "@/app/constant/constant"; // Adjust path

type BlogType = (typeof blogData)[number];

import { Metadata } from "next";
export const metadata: Metadata = {};

export default function BlogPageClient() {
  const { blogId } = useParams() as { blogId: string };
  const [blog, setBlog] = useState<BlogType | undefined>();

  useEffect(() => {
    if (!blogId) return;

    const found = blogData.find((b) => b.id === blogId);
    setBlog(found);
  }, [blogId]);

  if (!blog) return <div>Loading...</div>; // Could show notFound or 404

  return (
    <section className="bg-[#f7f7f7] pb-[64px] pt-13">
      <div className="container text-[#484747] flex flex-col gap-4 sm:gap-8 lg:gap-16 mt-16">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold lg:max-w-[60%]">
            {blog.title}
          </h2>
          <div className="mt-8 border-l-4 border-l-[#484747] px-3">
            <h3 className="text-[20px]">{blog.author}</h3>
            <p className="text-[14px]">{blog.date}</p>
          </div>
        </div>

        <div>
          {blog.description1.split("\n").map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="h-auto lg:h-[600px] w-full border">
          <Image
            alt={blog.title}
            src={blog.photo}
            className="rounded-lg h-full w-full object-cover"
            height={600}
            width={1200}
            priority
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-8 lg:gap-16">
          {Array.isArray(blog.description2) &&
            blog.description2.map((desc) => (
              <div key={desc.title}>
                <h3 className="text-[18px] sm:text-xl lg:text-2xl font-semibold">
                  {desc.title}
                </h3>
                <p className="mt-1 sm:mt-3 max-sm:text-sm">{desc.subtitle}</p>
                <ul className="list-decimal">
                  {desc.descriptionList.map((d, index) => (
                    <li key={index} className="ml-6 max-sm:text-sm">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
