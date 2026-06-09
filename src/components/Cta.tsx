import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative">
      <div className="relative isolate overflow-hidden bg-neutral-950 px-6 py-20 text-center shadow-2xl rounded-3xl border border-neutral-800 sm:px-16">

        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/[0.04] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-pattern" width={40} height={40} patternUnits="userSpaceOnUse" x="50%">
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        <div className="absolute top-0 right-1/4 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div
            className="aspect-1155/678 w-[45rem] bg-gradient-to-tr from-orange-600 to-amber-400 opacity-25"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <span className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400 ring-1 ring-inset ring-orange-500/20 mb-6 tracking-wide uppercase">
          Instant Access • 100% Free
        </span>

        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-inter leading-tight">
          Ready to Secure Your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Engineering License?</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-neutral-400 font-poppins leading-relaxed">
          Take your first step towards passing the NEC exam with confidence. Jump straight into an automated mock test session right now.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/take-test"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-md hover:bg-orange-500 transition-all duration-200 hover:shadow-orange-600/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Your Mock Test
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}