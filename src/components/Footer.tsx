import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 relative overflow-hidden font-poppins">
      {/* Subtle brand ambient lighting blur radiating from the corner bottom */}
      <div className="absolute bottom-0 right-0 translate-y-24 translate-x-24 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 py-16 gap-12 lg:gap-8">

          {/* Brand Presentation Section (Spans 5 Columns) */}
          <div className="lg:col-span-5 space-y-5">
            <h4 className="font-bold text-2xl text-white font-inter tracking-tight">
              Engineering License <br />
              <span className="text-orange-500 font-medium">Exam Preparation</span>
            </h4>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Prepare for the official Nepal Engineering Council license examinations with localized computer-based mock assessments tailored strictly to official frameworks.
            </p>
          </div>

          {/* Navigation Links Grid (Spans 7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-2 gap-8 lg:justify-items-end">

            {/* Quick Links Group Column */}
            <div>
              <h6 className="text-xs font-bold uppercase tracking-wider text-orange-500 font-inter mb-4">
                Quick Links
              </h6>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { label: "Home", path: "/" },
                  { label: "Take Test", path: "/take-test" },
                  { label: "Blog", path: "/blog" },
                  { label: "Review Us", path: "/review" },
                  { label: "Privacy Policy", path: "/privacy" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="group flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 text-orange-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Faculty Specific Group Column */}
            <div>
              <h6 className="text-xs font-bold uppercase tracking-wider text-orange-500 font-inter mb-4">
                Faculties
              </h6>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { label: "Computer Engineering", path: "/faculty/computer-engineering" },
                  { label: "Civil Engineering", path: "/faculty/civil-engineering" },
                  { label: "Architecture", path: "/faculty/architecture" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="group flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 text-orange-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Credits Ledger Segment */}
        <div className="py-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
          <p className="font-inter order-2 sm:order-1 text-center sm:text-left">
            © {new Date().getFullYear()} Portal Ecosystem. All rights reserved.
          </p>
          <p className="font-inter order-1 sm:order-2 text-center sm:text-right leading-relaxed">
            Architected by{" "}
            <a
              href="https://dipenboyaju.com.np/"
              className="text-neutral-400 hover:text-orange-500 underline decoration-neutral-800 hover:decoration-orange-500 transition"
              target="_blank"
              rel="noreferrer"
            >
              Dipen Boyaju
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/ashish-lawaju-aba628238/"
              className="text-neutral-400 hover:text-orange-500 underline decoration-neutral-800 hover:decoration-orange-500 transition"
              target="_blank"
              rel="noreferrer"
            >
              Ashish Lawaju
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}