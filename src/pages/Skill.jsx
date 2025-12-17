import { SiHtml5, SiCss3, SiJavascript, SiPython, SiReact, SiDjango, SiTailwindcss, SiMysql, SiMongodb, SiGithub, SiPostman } from 'react-icons/si';
import { HiLightBulb } from 'react-icons/hi';

const skills = [
  { name: 'HTML', icon: <SiHtml5 className="w-6 h-6 text-cyan-300" /> },
  { name: 'CSS', icon: <SiCss3 className="w-6 h-6 text-cyan-300" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6 text-cyan-300" /> },
  { name: 'Python', icon: <SiPython className="w-6 h-6 text-cyan-300" /> },
  { name: 'React', icon: <SiReact className="w-6 h-6 text-cyan-300" /> },
  { name: 'Django', icon: <SiDjango className="w-6 h-6 text-cyan-300" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-cyan-300" /> },
  { name: 'MySQL', icon: <SiMysql className="w-6 h-6 text-cyan-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-cyan-300" /> },
  { name: 'Git & GitHub', icon: <SiGithub className="w-6 h-6 text-cyan-300" /> },
  { name: 'REST API', icon: <SiPostman className="w-6 h-6 text-cyan-300" /> },
  { name: 'Problem Solving', icon: <HiLightBulb className="w-6 h-6 text-cyan-300" /> }, // Fixed here
];

const Skill = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1a2a] to-[#0f2538] text-white py-20 px-6 md:px-20 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl pointer-events-none"></div>

      <h2 className="text-center text-4xl font-extrabold mb-14 tracking-wide relative z-10">
        My <span className="text-cyan-300">Skills</span>
      </h2>

      <div className="relative max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center py-6 px-4 rounded-2xl bg-[#132836] border border-[#1f3b4d] shadow-lg hover:shadow-cyan-400/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="mb-3 text-3xl">
              {skill.icon}
            </div>
            <span className="text-lg font-semibold group-hover:text-cyan-300 transition">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skill;
