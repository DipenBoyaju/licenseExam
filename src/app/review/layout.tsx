export function generateMetadata() {
  return {
    title: "Review Us",
    description: "Share your feedback and suggestions for our services.",
    keywords: [
      "NEC License Exam Review",
      "Feedback",
      "User Experience",
      "NEC License Exam Suggestions",
      "Engineering Community Feedback",
    ],
  };
}
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
