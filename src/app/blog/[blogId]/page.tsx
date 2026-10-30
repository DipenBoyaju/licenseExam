import BlogPageClient from "@/app/components/common/blog/BlogPageClient";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogData, baseUrl } from "@/app/constant/constant";

type Props = {
  params: Promise<{ blogId: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { blogId } = await params;

  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post was not found.",
    };
  }

  const defaultKeywords = [
    "nec license moke test",
    "nec license mock test",
    "nec set",
    "nec question set pratice",
    "NEC License Exam",
    "Nepal Engineering Council",
    "NEC Blog",
    "Engineering Nepal",
    "Engineering Blog Nepal",
    "NEC Preparation",
    "NEC Preparation Blog",
  ];

  const keywords = (blog as { keywords?: string[] }).keywords || defaultKeywords;

  return {
    title: blog.title,
    description: blog.description1,
    metadataBase: new URL(baseUrl),
    keywords,
    openGraph: {
      title: blog.title,
      description: blog.description1,
      url: `${baseUrl}/blog/${blog.id}`,
      type: "article",
      publishedTime: blog.date,
      authors: blog.author ? [blog.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description1,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${blog.id}`,
    },
  };
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    blogId: blog.id,
  }));
}

export default async function BlogPage({ params }: Props) {
  const { blogId } = await params;

  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    notFound();
  }

  return <BlogPageClient blog={blog} />;
}