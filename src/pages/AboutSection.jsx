const AboutSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0f2538] to-[#0a1a2a] text-gray-300 py-24 px-6 md:px-20 overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-1 bg-cyan-400 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-300">Me</span>
          </h2>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-lg leading-relaxed">

          <p>
            I'm a dedicated <span className="text-cyan-300 font-semibold">Software Developer</span> passionate about building clean, modern, and user-focused digital solutions.
            I strive to create products that balance performance, simplicity, and a great user experience.
          </p>

          <p className="text-gray-400">
            My expertise spans <span className="text-cyan-300 font-semibold">frontend and backend development</span>, including frameworks like <span className="text-cyan-300 font-semibold">React, Next.js, Django</span>, and databases such as <span className="text-cyan-300 font-semibold">MySQL & MongoDB</span>. I enjoy writing code that is efficient, maintainable, and scalable.
          </p>

          <p className="text-gray-400">
            Beyond coding, I have a strong interest in <span className="text-cyan-300 font-semibold">UI/UX design principles</span>, ensuring that the applications I build are intuitive and visually engaging. I also follow best practices in <span className="text-cyan-300 font-semibold">version control, testing, and deployment</span> to deliver reliable software.
          </p>

          {/* Quote Card */}
          <div className="bg-[#112533]/60 border border-cyan-400/30 rounded-xl p-6 text-gray-100 italic shadow-lg hover:shadow-cyan-400/20 transition duration-300">
            “Great software is built with clarity, intention, and continuous improvement.”
          </div>

          <p className="text-gray-400">
            I am constantly learning new technologies and keeping up-to-date with industry trends to improve my skills. My focus is on solving real-world problems creatively while maintaining code quality and project efficiency.
          </p>

          <p className="text-gray-400">
            In addition to development, I value <span className="text-cyan-300 font-semibold">team collaboration, communication, and mentoring</span>. I believe that great products are built not only with code, but with teamwork, feedback, and shared vision.
          </p>

          <p className="text-gray-400">
            When I am not coding, I enjoy exploring <span className="text-cyan-300 font-semibold">new technologies, contributing to open-source projects</span>, and refining my design and problem-solving skills through personal projects.
          </p>

          <p className="text-gray-400">
            My philosophy is simple: write clean code, build thoughtful experiences, and continually learn. Every project is an opportunity to create something meaningful, efficient, and impactful.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
