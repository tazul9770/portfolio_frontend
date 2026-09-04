import {
  Code,
  Layout,
  Database,
  UserCheck,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6 text-cyan-300" />,
      title: "Full-Stack Development",
      desc: "Expert in building scalable frontend & backend applications with modern frameworks.",
    },
    {
      icon: <Layout className="w-6 h-6 text-cyan-300" />,
      title: "UI/UX Design",
      desc: "Designing intuitive and visually appealing user interfaces for web & mobile.",
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-300" />,
      title: "Databases",
      desc: "Skilled with MySQL, PostgreSQL, and efficient data management techniques.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-cyan-300" />,
      title: "Collaboration",
      desc: "Strong team player emphasizing communication, mentoring, and code reviews.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-cyan-300" />,
      title: "Problem Solving",
      desc: "Creative solutions with clarity, intention, and continuous improvement.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b1e30] via-[#0a1a2a] to-[#07131f] px-4 py-16 text-gray-300 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex items-center gap-3 sm:mb-14 sm:gap-4">
          <div className="h-10 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-600 shadow-[0_0_18px_rgba(34,211,238,0.5)] sm:h-12" />

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Get to know me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              About{" "}
              <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.25)]">
                Me
              </span>
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* About Text */}
          <div className="space-y-6">

            <div className="space-y-5 text-base leading-7 sm:text-lg sm:leading-8">
              <p>
                I'm a dedicated{" "}
                <span className="font-semibold text-cyan-300">
                  Software Developer
                </span>{" "}
                passionate about building clean, modern, and user-focused
                digital solutions. I strive to create products that balance
                performance, simplicity, and a great user experience.
              </p>

              <p className="text-gray-400">
                My expertise spans{" "}
                <span className="font-semibold text-cyan-300">
                  frontend and backend development
                </span>
                , including frameworks like{" "}
                <span className="font-semibold text-cyan-300">
                  React, Django
                </span>
                , and databases such as{" "}
                <span className="font-semibold text-cyan-300">
                  MySQL & PostgreSQL
                </span>
                .
              </p>
            </div>

            {/* Quote Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.035] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-400/10 sm:p-7">
              
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-3 text-3xl text-cyan-400/60">“</div>

                <p className="text-base font-medium italic leading-7 text-gray-100 sm:text-lg">
                  Great software is built with clarity, intention, and
                  continuous improvement.
                </p>
              </div>
            </div>

            <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I am constantly learning new technologies and keeping up-to-date
              with industry trends to improve my skills. My focus is on solving
              real-world problems creatively while maintaining code quality and
              project efficiency.
            </p>

            {/* Small Bottom Accent */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-px w-12 bg-cyan-400/50" />
              <span className="text-xs font-medium uppercase tracking-widest text-cyan-400/70">
                Always learning
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className="grid gap-4 sm:gap-5">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:shadow-xl hover:shadow-cyan-400/10 sm:p-6"
              >
                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                  {skill.icon}
                </div>

                {/* Content */}
                <div className="relative min-w-0 flex-1">
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {skill.title}
                    </h3>

                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                  </div>

                  <p className="text-sm leading-6 text-gray-400">
                    {skill.desc}
                  </p>
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