import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-zinc-100/80 border-t border-zinc-900/10">
      <div className=" px-6 lg:px-18">
        <div className="grid md:grid-cols-6 md:py-20 py-10">
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-bold text-3xl md:w-[60%]">Engineering License Exam Preparation</h4>
            <p className="text-zinc-600 md:w-[50%]">Prepare for the Nepal Engineering Council license exam with our practice questions.</p>
          </div>
          <div className="md:col-span-2 mt-10 md:mt-0">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="">
                <h6 className="uppercase font-semibold text-orange-600 text-lg">Quick Links</h6>
                <ul className="space-y-2 mt-3">
                  <li className="hover:text-orange-400 transition-all duration-500 ease-in-out hover:pl-2 font-semibold text-zinc-600"><Link href="/">Home</Link></li>
                  <li className="hover:text-orange-400 transition-all duration-500 ease-in-out hover:pl-2 font-semibold text-zinc-600"><Link href="/take-test">Take Test</Link></li>
                  <li className="hover:text-orange-400 transition-all duration-500 ease-in-out hover:pl-2 font-semibold text-zinc-600"><Link href="/blog">Blog</Link></li>
                  <li className="hover:text-orange-400 transition-all duration-500 ease-in-out hover:pl-2 font-semibold text-zinc-600"><Link href="/review">Review Us</Link></li>
                </ul>
              </div>
              <div className="">
                <h6 className="uppercase font-semibold text-orange-600 text-lg">Faculty</h6>
                <ul className="space-y-2 mt-3">
                  <li className="hover:text-orange-400 transition-all duration-500 ease-in-out hover:pl-2 font-semibold text-zinc-600"><Link href="/faculty/computer-engineering">Computer Engineering</Link></li>
                  <li className="hover:text-orange-400 transition-all duration-500 ease-in-out hover:pl-2 font-semibold text-zinc-600"><Link href="/faculty/civil-engineering">Civil Engineering</Link></li>
                  <li className="hover:text-orange-400 transition-all duration-500 ease-in-out hover:pl-2 font-semibold text-zinc-600"><Link href="/faculty/architecture">Architecture</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-zinc-900/10">
          <p className="font-inter text-center text-sm text-zinc-800">
            © 2025 <a href="https://dipenboyaju.com.np/" className="underline cursor-pointer hover:text-orange-400 text-orange-500 transition" target="_blank">Dipen Boyaju</a> & <a href="https://www.linkedin.com/in/ashish-lawaju-aba628238/?trk=public_profile_samename-profile&originalSubdomain=np" className="underline cursor-pointer hover:text-orange-400 text-orange-500 transition" target="_blank">Ashish Lawaju</a>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}