import { motion } from "framer-motion";
import { Layers, PenTool, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <PenTool className="w-6 h-6" />,
    title: "Understand the Problem",
    desc: "I start by deeply understanding the problem, users, and business goals before writing code.",
  },
  {
    step: "02",
    icon: <Layers className="w-6 h-6" />,
    title: "Design the System",
    desc: "I design clean architectures, data flow, and UI structure with scalability in mind.",
  },
  {
    step: "03",
    icon: <Cpu className="w-6 h-6" />,
    title: "Build & Optimize",
    desc: "I write efficient, reusable code and continuously optimize performance and UX.",
  },
  {
    step: "04",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Test & Deliver",
    desc: "I test, refine, and deploy reliable solutions that are ready for real-world use.",
  },
];

const HowBuild = () => {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-gradient-to-b from-[#081826] to-[#0a1a2a] text-white overflow-hidden">

      {/* Floating background element */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[-150px] top-1/3 w-[400px] h-[400px] bg-blue-500/20 blur-[180px]"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-widest text-cyan-400 text-sm mb-3">
            My Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            How I <span className="text-cyan-300">Build Software</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            A simple, effective, and repeatable workflow I follow to deliver high-quality software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-cyan-400/20 hidden md:block" />

          <div className="space-y-16">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`md:flex items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card */}
                <div className="md:w-1/2 bg-[#112533]/60 border border-cyan-400/20 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/30 transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      {item.icon}
                    </div>
                    <span className="text-cyan-400 font-mono text-sm">STEP {item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowBuild;