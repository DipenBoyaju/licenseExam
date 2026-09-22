"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export type BlogType = {
  id: string;
  title: string;
  description1: string;
  description2?: Array<{
    title: string;
    subtitle?: string;
    descriptionList?: string[];
  }>;
  photo?: StaticImageData;
  author?: string;
  date?: string;
};

const BlogCard = ({
  id,
  title,
  description1,
  photo,
}: BlogType) => {
  return (
    <article className="group w-full max-w-[389px]">
      <Link
        href={`/blog/${id}`}
        aria-label={`Read ${title}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6540E] focus-visible:ring-offset-4 rounded-lg"
      >
        {/* Blog Image */}
        <div className="relative overflow-visible">
          <div className="h-[270px] overflow-hidden rounded-lg border">
            {photo ? (
              <Image
                src={photo}
                alt={title}
                width={389}
                height={270}
                sizes="(max-width: 640px) 100vw, 389px"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center bg-gray-100"
                aria-label="Blog image unavailable"
              >
                <span className="text-sm text-gray-500">
                  Blog image
                </span>
              </div>
            )}
          </div>

          {/* Read More Icon */}
          <span
            aria-hidden="true"
            className="absolute -right-5 -bottom-5 rounded-[28px] border-[13px] border-white bg-white"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F6540E] p-4 transition-transform duration-300 group-hover:rotate-45">
              <GoArrowUpRight className="text-[32px] text-white" />
            </span>
          </span>
        </div>

        {/* Blog Content */}
        <div className="mt-6 px-2">
          <h2 className="text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#F6540E]">
            {title}
          </h2>

          <p className="mt-3 line-clamp-2 text-[14px] font-light leading-relaxed text-[#828282]">
            {description1}
          </p>

          <span className="sr-only">
            Read the full article: {title}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;