import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Sparkles } from "lucide-react";

const traits = [
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Clean Code",
    desc: "Readable, maintainable, and scalable code that stands the test of time.",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Logical Thinking",
    desc: "Breaking complex problems into elegant and efficient solutions.",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Performance Driven",
    desc: "Optimized applications focused on speed, UX, and reliability.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Creative UI",
    desc: "Interfaces that feel modern, intuitive, and delightful to use.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const DeveloperDNA = () => {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-gradient-to-b from-[#0f2538] to-[#081826] text-white overflow-hidden">

      {/* Animated background glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/30 blur-[200px]"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-cyan-400 text-sm mb-3">
            What Makes Me Different
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            My <span className="text-cyan-300">Developer DNA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            This is the mindset, skillset, and philosophy that define how I build software and solve problems.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {traits.map((trait, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="relative group bg-[#112533]/60 border border-cyan-400/20 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/30 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 mb-6">
                  {trait.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{trait.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {trait.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperDNA;
