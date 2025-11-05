const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-gray-300 py-24 px-6 md:px-20 overflow-hidden">

      {/* Soft Gradient Light Behind Text */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Header & Accent Line */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-1 bg-red-500 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            About <span className="text-red-500">Me</span>
          </h2>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-gray-300">
            I’m a passionate <span className="text-red-400 font-semibold">Software Developer</span> who loves
            turning ideas into beautifully crafted digital experiences. I build products with
            a strong foundation in clean structure, thoughtful UI/UX, and smooth functionality.
          </p>

          <p className="text-gray-400">
            Every line of code I write aims to deliver clarity, consistency, and performance.
            I enjoy solving problems creatively and continuously improving both myself and the
            work I produce.
          </p>

          {/* Highlight Statement */}
          <div className="bg-[#111] border border-red-500/30 rounded-xl p-6 text-gray-200 text-lg italic shadow-lg hover:shadow-red-500/20 transition duration-300">
            “Great software isn't just built — it's crafted with patience, intention, and vision.”
          </div>

          <p className="text-gray-400">
            I believe in simplicity with depth. Technology should feel elegant, intuitive, and
            meaningful. Whether it's the backend logic or the visual finish, everything deserves
            equal attention and care.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
