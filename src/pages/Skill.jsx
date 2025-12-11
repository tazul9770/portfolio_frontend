const skills = [
  "HTML",
  "CSS",
  "C",
  "C++",
  "JavaScript",
  "Python",
  "React",
  "Django",
  "Tailwind CSS",
  "Git & GitHub",
  "MySQL",
  "REST API",
  "Problem Solving",
];

const Skill = () => {

  return (
    <section className="bg-gradient-to-b from-[#0a1a2a] to-[#0f2538] text-white py-20 px-6 md:px-20 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl pointer-events-none"></div>

      <h2 className="text-center text-4xl font-extrabold mb-14 tracking-wide relative z-10">
        My <span className="text-cyan-300">Skills</span>
      </h2>

      <div className="relative max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex items-center justify-center py-4 px-6 rounded-xl bg-[#132836] border border-[#1f3b4d] shadow-lg 
            hover:shadow-cyan-400/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span className="text-lg font-semibold group-hover:text-cyan-300 transition">
              {skill}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skill;
