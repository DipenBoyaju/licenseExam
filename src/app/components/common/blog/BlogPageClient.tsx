"use client";

import Image from "next/image";
import type { blogData } from "@/app/constant/constant";

type BlogType = (typeof blogData)[number];

type BlogPageClientProps = {
  blog: BlogType;
};

export default function BlogPageClient({
  blog,
}: BlogPageClientProps) {
  return (
    <main className="bg-[#f7f7f7] pb-[64px] pt-13">
      <article
        className="container mx-auto flex flex-col gap-8 lg:gap-16 mt-16 text-[#484747]"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Article Header */}
        <header>
          <h1
            itemProp="headline"
            className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-tight lg:max-w-[70%]"
          >
            {blog.title}
          </h1>

          <div className="mt-8 border-l-4 border-l-[#484747] px-3">
            {blog.author && (
              <p
                itemProp="author"
                className="text-[20px] font-medium"
              >
                {blog.author}
              </p>
            )}

            {blog.date && (
              <time
                itemProp="datePublished"
                className="text-[14px] text-gray-600"
                dateTime={blog.date}
              >
                {blog.date}
              </time>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {blog.photo && (
          <figure className="order-first lg:order-none">
            <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full overflow-hidden rounded-lg">
              <Image
                src={blog.photo}
                alt={`${blog.title} - RP Ayantra`}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                className="object-cover"
              />
            </div>

            <figcaption className="sr-only">
              {blog.title}
            </figcaption>
          </figure>
        )}

        {/* Introduction */}
        <section
          itemProp="articleBody"
          className="max-w-4xl text-[16px] leading-8"
        >
          {blog.description1.split("\n").map((text, index) => (
            <p
              key={index}
              className="mb-4"
            >
              {text}
            </p>
          ))}
        </section>

        {/* Main Article Sections */}
        {Array.isArray(blog.description2) &&
          blog.description2.length > 0 && (
            <div className="flex flex-col gap-10 lg:gap-14">
              {blog.description2.map((desc, index) => (
                <section
                  key={desc.title}
                  className="max-w-4xl"
                >
                  <h2 className="text-[20px] sm:text-2xl lg:text-3xl font-semibold leading-tight">
                    {desc.title}
                  </h2>

                  {desc.subtitle && (
                    <p className="mt-3 text-[15px] sm:text-base leading-7 text-gray-600">
                      {desc.subtitle}
                    </p>
                  )}

                  {Array.isArray(desc.descriptionList) &&
                    desc.descriptionList.length > 0 && (
                      <ul className="mt-4 list-disc space-y-3 pl-6">
                        {desc.descriptionList.map(
                          (description, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-[14px] sm:text-base leading-7"
                            >
                              {description}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </section>
              ))}
            </div>
          )}

        {/* Author Information */}
        <footer
          className="border-t pt-6 text-sm text-gray-600"
          itemProp="publisher"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">RP Ayantra</span>
        </footer>
      </article>
    </main>
  );
}
