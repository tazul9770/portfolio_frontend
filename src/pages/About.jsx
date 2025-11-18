const About = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-gray-300 py-24 px-6 md:px-20 overflow-hidden">

      {/* Soft Gradient Light Behind Text */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-1 bg-red-500 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            About & <span className="text-red-500">Skills</span>
          </h2>
        </div>

        {/* About Me */}
        <div className="space-y-6 text-lg leading-relaxed mb-12">
          <p>
            Hi! I’m <span className="text-red-400 font-semibold">Tazul Islam</span>, a passionate full-stack developer specializing in
            <span className="text-red-400 font-semibold"> Django</span> and <span className="text-red-400 font-semibold">React</span>. I love creating
            applications that are not only functional but also visually appealing and user-friendly.
          </p>
          <p>
            I enjoy building scalable backend systems with Django, implementing clean REST APIs, and connecting them with interactive frontend interfaces using React. I continuously strive for code that is maintainable, readable, and efficient.
          </p>
          <p className="bg-[#111] border border-red-500/30 rounded-xl p-6 text-gray-200 text-lg italic shadow-lg hover:shadow-red-500/20 transition duration-300">
            “Building great software requires a blend of creativity, discipline, and technical expertise.”
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-red-500 mb-6">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skill Item */}
            <div className="flex flex-col bg-[#111] border border-red-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300">
              <h4 className="font-semibold text-lg text-red-400 mb-2">Django</h4>
              <p className="text-gray-400">
                Experienced in building scalable backend systems, RESTful APIs, authentication systems, and integrating with relational databases like PostgreSQL.
              </p>
            </div>

            <div className="flex flex-col bg-[#111] border border-red-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300">
              <h4 className="font-semibold text-lg text-red-400 mb-2">React</h4>
              <p className="text-gray-400">
                Skilled in building responsive and interactive frontends, component-based architecture, state management with hooks and Redux, and smooth UI/UX design.
              </p>
            </div>

            <div className="flex flex-col bg-[#111] border border-red-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300">
              <h4 className="font-semibold text-lg text-red-400 mb-2">Frontend Tools</h4>
              <p className="text-gray-400">
                Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript ES6+, and responsive design for modern web apps.
              </p>
            </div>

            <div className="flex flex-col bg-[#111] border border-red-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300">
              <h4 className="font-semibold text-lg text-red-400 mb-2">Backend & DB</h4>
              <p className="text-gray-400">
                Django ORM, PostgreSQL, SQLite, API integration, and server-side logic to build robust applications.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Approach / Philosophy */}
        <div className="space-y-4 text-gray-400">
          <h3 className="text-2xl font-bold text-red-500 mb-2">How I Work</h3>
          <p>
            I focus on writing clean, modular, and reusable code. Every project I take is approached with attention to detail, prioritizing both performance and user experience.
          </p>
          <p>
            I enjoy collaboration, continuous learning, and exploring new technologies to enhance my skillset and deliver high-quality results.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
