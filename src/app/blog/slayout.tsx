import type { Metadata } from "next";
import { baseUrl } from "../constant/constant";

// const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Blog", template: "%s | Yantra RPA" },
  // description: "DK Recruitment",
  metadataBase: new URL(`${baseUrl}`),
  keywords: [
    "Robotic Process Automation",
    "RPA software solutions",
    "RPA implementation services",
    "Automate business processes",
    "RPA for enterprises",
    "Intelligent automation tools",
    "RPA use cases in industries",
    "RPA consulting services",
    "RPA training and certification",
    "Benefits of RPA",
    "RPA technology trends",
    "Workflow automation solutions",
    "RPA best practices",
    "RPA platform comparison",
    "RPA case studies"
],
 
   "description": "RPA Insights Blog, your go-to source for the latest trends and innovations in Robotic Process Automation. Explore expert insights on RPA solutions, implementation strategies, and best practices. Our blog covers use cases, technology advancements, and training resources for businesses and professionals. Whether you're looking to improve operational efficiency or explore new automation opportunities, we provide valuable information to help you stay ahead in the evolving world of RPA. Join our community and stay informed about the future of automation and its impact across industries."

  
  ,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    < >
      <>{children}</>
    </>
  );
}
