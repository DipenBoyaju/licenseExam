import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sandeep Thapa",
    role: "Civil Engineer",
    image: "https://i.pravatar.cc/150?u=sandeep", // Replace with real images
    content: "The mock tests were almost identical to the actual NEC exam format. The detailed explanations for the 2-mark questions were a lifesaver!",
  },
  {
    name: "Anjali Sharma",
    role: "Computer Engineer",
    image: "https://i.pravatar.cc/150?u=anjali",
    content: "I was worried about the new 2079 amendment syllabus, but this platform was updated instantly. Passed on my first attempt!",
  },
  {
    name: "Rohan Chaudhary",
    role: "Electrical Engineer",
    image: "https://i.pravatar.cc/150?u=rohan",
    content: "Being able to practice on my mobile during my commute made all the difference. Highly recommend for busy graduates.",
  },
];

const Testimony = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-orange-600 uppercase tracking-wide">
            Success Stories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by thousands of future engineers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-between bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-orange-200 transition-colors shadow-sm"
            >
              <div>
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed font-poppins">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Testimony