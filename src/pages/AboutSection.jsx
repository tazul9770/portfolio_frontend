import { Code, Layout, Database, UserCheck, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: <Code className="w-6 h-6 text-cyan-300" />, title: 'Full-Stack Development', desc: 'Expert in building scalable frontend & backend applications with modern frameworks.' },
    { icon: <Layout className="w-6 h-6 text-cyan-300" />, title: 'UI/UX Design', desc: 'Designing intuitive and visually appealing user interfaces for web & mobile.' },
    { icon: <Database className="w-6 h-6 text-cyan-300" />, title: 'Databases', desc: 'Skilled with MySQL, PostgreSQL, and efficient data management techniques.' },
    { icon: <UserCheck className="w-6 h-6 text-cyan-300" />, title: 'Collaboration', desc: 'Strong team player emphasizing communication, mentoring, and code reviews.' },
    { icon: <Lightbulb className="w-6 h-6 text-cyan-300" />, title: 'Problem Solving', desc: 'Creative solutions with clarity, intention, and continuous improvement.' },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0f2538] to-[#0a1a2a] text-gray-300 py-24 px-2 md:px-20 overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-1 bg-cyan-400 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-300">Me</span>
          </h2>
        </div>

        {/* Text + Skill Cards */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* About Text */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm a dedicated <span className="text-cyan-300 font-semibold">Software Developer</span> passionate about building clean, modern, and user-focused digital solutions.
              I strive to create products that balance performance, simplicity, and a great user experience.
            </p>

            <p className="text-gray-400">
              My expertise spans <span className="text-cyan-300 font-semibold">frontend and backend development</span>, including frameworks like <span className="text-cyan-300 font-semibold">React,  Django</span>, and databases such as <span className="text-cyan-300 font-semibold">MySQL & PostgreSQL</span>.
            </p>

            <div className="bg-[#112533]/60 border border-cyan-400/30 rounded-xl p-6 text-gray-100 italic shadow-lg hover:shadow-cyan-400/20 transition duration-300">
              “Great software is built with clarity, intention, and continuous improvement.”
            </div>

            <p className="text-gray-400">
              I am constantly learning new technologies and keeping up-to-date with industry trends to improve my skills. My focus is on solving real-world problems creatively while maintaining code quality and project efficiency.
            </p>
          </div>

          {/* Skills Cards */}
          <div className="grid gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="flex gap-4 bg-[#112533]/40 border border-cyan-400/20 p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-400/20 transition duration-300">
                <div className="flex-shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{skill.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;