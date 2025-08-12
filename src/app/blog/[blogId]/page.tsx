// app/blog/[blogId]/page.tsx

import BlogPageClient from "@/app/components/common/blog/BlogPageClient";
import type { Metadata } from "next";
import { blogData, baseUrl } from "@/app/constant/constant";

type Props = {
  params: Promise<{ blogId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogId } = await params;

  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post NEC License Exam found.",
    };
  }

  return {
    title: blog.title,
    description: blog.description1,
    metadataBase: new URL(baseUrl),
    keywords: [
      "NEC License Exam",
      "Nepal Engineering Council",
      "NEC Blog",
      "Engineering Nepal",
      "Engineering Blog Nepal",
      "NEC Preparation",
      "NEC Preparation Blog",
    ],
  };
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    blogId: blog.id,
  }));
}

export default function BlogPage() {
  return <BlogPageClient  />;
}
