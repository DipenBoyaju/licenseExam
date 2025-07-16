"use client";

import { useForm } from "react-hook-form";

export default function ReviewPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {

  };

  return (
    <div className="py-20">
      <div className="relative isolate px-6 lg:px-18">
        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl ring-1 ring-zinc-800/10">
          <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">
            Give Us Your Feedback
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-5 w-full">
              <div className="w-full">
                <label className="block text-sm font-medium text-zinc-700">
                  Name (optional)
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="mt-1 block w-full border border-zinc-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-zinc-700">
                  Email (optional)
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="mt-1 block w-full border border-zinc-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700">
                Overall Rating
              </label>
              <select
                {...register("rating", { required: "Please select a rating" })}
                className="mt-1 block w-full border border-zinc-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                <option value="">Select</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Good</option>
                <option value="3">⭐⭐⭐ Average</option>
                <option value="2">⭐⭐ Poor</option>
                <option value="1">⭐ Very Poor</option>
              </select>
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700">
                What did you like the most?
              </label>
              <textarea
                {...register("like")}
                rows="3"
                className="mt-1 block w-full border border-zinc-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700">
                What can we improve?
              </label>
              <textarea
                {...register("improve")}
                rows="3"
                className="mt-1 block w-full border border-zinc-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
