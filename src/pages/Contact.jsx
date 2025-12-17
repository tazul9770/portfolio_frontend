import { useForm } from "react-hook-form";
import apiClient from "../services/api_client";
import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineChat } from 'react-icons/hi';

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

      <div className="relative max-w-2xl mx-auto bg-[#132836] shadow-2xl rounded-3xl p-8 sm:p-12 text-white border border-cyan-400/20">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-cyan-300">Contact Me</h2>
        <p className="text-center text-gray-300 mb-10">
          Have questions or feedback? Send me a message — I will reply soon.
        </p>

        {message && (
          <div className="mb-6 bg-[#0f2538] border border-cyan-400/30 text-white text-center py-3 rounded-xl shadow-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <HiOutlineMail className="absolute top-1/2 left-3 -translate-y-1/2 text-cyan-300 w-5 h-5" />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              className={`w-full border rounded-xl p-3 pl-10 bg-[#0f2538] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1 ml-1">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="relative">
            <HiOutlinePhone className="absolute top-1/2 left-3 -translate-y-1/2 text-cyan-300 w-5 h-5" />
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
              className={`w-full border rounded-xl p-3 pl-10 bg-[#0f2538] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${
                errors.phone_number ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.phone_number && (
              <p className="text-red-400 text-sm mt-1 ml-1">{errors.phone_number.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <HiOutlineChat className="absolute top-3 left-3 text-cyan-300 w-5 h-5" />
            <textarea
              rows={5}
              {...register("comment", { required: "Message is required" })}
              placeholder="Write your comment here..."
              className={`w-full border rounded-xl p-3 pt-8 pl-10 bg-[#0f2538] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${
                errors.comment ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.comment && <p className="text-red-400 text-sm mt-1 ml-1">{errors.comment.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-3 rounded-xl flex justify-center items-center transition disabled:opacity-50 mt-4 shadow-lg"
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
