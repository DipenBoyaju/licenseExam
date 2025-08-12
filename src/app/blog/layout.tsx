import type { Metadata } from "next";
import { baseUrl } from "../constant/constant";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),

  title: "Blogs",

  description:
    "Explore our blog for the latest updates, tips, and insights on NEC License exam preparation. Stay informed with articles covering exam strategies, engineering news, and success stories from the Nepal Engineering Council community.",
  keywords: [
    "NEC License Exam Blog",
    "Nepal Engineering Council updates",
    "engineering exam tips",
    "NEC License preparation blog",
    "engineering news Nepal",
    "NEC License exam insights",
    "engineering community blog",
    "NEC exam success stories",
    "engineering career advice",
    "Nepal engineering council updates",
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <>{children}</>
    </>
  );
}
