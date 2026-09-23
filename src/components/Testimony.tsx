import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sandeep Thapa",
    role: "Civil Engineer",
    image: "https://i.pravatar.cc/150?u=sandeep",
    content:
      "The mock tests were almost identical to the actual NEC exam format. The detailed explanations for the 2-mark questions were a lifesaver during my NEC exam preparation!",
  },
  {
    name: "Anjali Sharma",
    role: "Computer Engineer",
    image: "https://i.pravatar.cc/150?u=anjali",
    content:
      "I was worried about the new 2079 amendment syllabus, but this platform was updated instantly. Passed my NEC license exam on the first attempt!",
  },
  {
    name: "Rohan Chaudhary",
    role: "Civil Engineer",
    image: "https://i.pravatar.cc/150?u=rohan",
    content:
      "Being able to practice NEC MCQs on my mobile during my commute made all the difference. Best online NEC prep for busy engineering graduates in Nepal.",
  },
  {
    name: "Priya Maharjan",
    role: "Computer Engineer",
    image: "https://i.pravatar.cc/150?u=priya",
    content:
      "The topic-wise quizzes aligned perfectly with the latest NEC syllabus 2079. Their analytics helped me focus on weak areas before the licensing exam.",
  },
  {
    name: "Aarav Shrestha",
    role: "Civil Engineer",
    image: "https://i.pravatar.cc/150?u=aarav",
    content:
      "Realistic full-length mock exams and instant feedback boosted my confidence. Highly recommend for anyone preparing for the Nepal Engineering Council exam.",
  },
  {
    name: "Nisha KC",
    role: "Computer Engineer",
    image: "https://i.pravatar.cc/150?u=nisha",
    content:
      "Clear video solutions and updated notes for the 2079 amendment made studying efficient. This is the top choice for NEC exam preparation in Nepal.",
  },

  // --- 3 new (only Civil or Computer) ---
  {
    name: "Bikram Rai",
    role: "Civil Engineer",
    image: "https://i.pravatar.cc/150?u=bikram",
    content:
      "The timed mock tests simulated real exam pressure perfectly. Their focus on the updated 2079 amendment syllabus gave me an edge in the NEC licensing exam.",
  },
  {
    name: "Srijana Gurung",
    role: "Computer Engineer",
    image: "https://i.pravatar.cc/150?u=srijana",
    content:
      "I struggled with self-study until I found this platform. The structured NEC exam preparation plan and previous-year questions helped me clear on my second attempt.",
  },
  {
    name: "Manish Adhikari",
    role: "Civil Engineer",
    image: "https://i.pravatar.cc/150?u=manish",
    content:
      "Affordable, updated, and focused on the Nepal Engineering Council exam pattern. The short notes and quick revision tests were perfect before my exam date.",
  },
];

const Testimony = () => {
  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header with SEO-friendly headings */}
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-base font-semibold text-orange-600 uppercase tracking-wide"
          >
            Success Stories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by thousands of future engineers preparing for the NEC exam
          </p>
        </div>

        {/* Testimonials grid */}
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          role="list"
          aria-label="Student testimonials for NEC exam preparation"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={idx}
              role="listitem"
              itemScope
              itemType="https://schema.org/Review"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-between bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-orange-200 transition-colors shadow-sm"
            >
              <div>
                {/* Star rating (visual + accessible) */}
                <div
                  className="flex gap-1 text-orange-500 mb-4"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review content */}
                <p
                  className="text-gray-600 italic leading-relaxed font-poppins"
                  itemProp="reviewBody"
                >
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Reviewer info */}
              <div
                className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-6"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="sr-only">
                  {/* Hidden structured-data-only name for schema */}
                  <span itemProp="name">{t.name}</span>
                  <span itemProp="jobTitle">{t.role}</span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {t.name}
                  </h3>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;