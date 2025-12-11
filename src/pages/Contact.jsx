import { useForm } from "react-hook-form";
import apiClient from "../services/api_client";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post("/contact/", data);
      if (response.status === 200 || response.status === 201) {
        setMessage("Your message has been sent successfully");
        setTimeout(() => setMessage(null), 5000);
        reset();
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a1a2a] to-[#0f2538] py-20 px-6 md:px-20">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-2xl mx-auto bg-[#132836] shadow-xl rounded-xl p-6 sm:p-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-4 text-cyan-300">Contact Me</h2>
        <p className="text-center text-gray-300 mb-8">
          Have questions or feedback? Send me a message — I will reply soon.
        </p>

        {message && (
          <div className="mb-6 bg-[#0f2538] border border-cyan-400/30 text-white text-center py-3 rounded-lg shadow-md">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              className={`w-full border rounded-lg p-3 bg-[#0f2538] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{11}$/,
                  message: "Phone number must be exactly 11 digits",
                },
              })}
              placeholder="01xxxxxxxxx"
              maxLength={11}
              className={`w-full border rounded-lg p-3 bg-[#0f2538] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                errors.phone_number ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.phone_number && (
              <p className="text-red-400 text-sm mt-1">{errors.phone_number.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={5}
              {...register("comment", { required: "Message is required" })}
              placeholder="Write your comment here..."
              className={`w-full border rounded-lg p-3 bg-[#0f2538] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                errors.comment ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.comment && <p className="text-red-400 text-sm mt-1">{errors.comment.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-3 rounded-lg flex justify-center items-center transition disabled:opacity-50 mt-4"
          >
            {isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 text-gray-900 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
