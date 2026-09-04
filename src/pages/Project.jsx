import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Server,
  Code2,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import apiClient from "../services/api_client";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get("/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  // Loading
  if (loading) {
    return (
      <section className="min-h-screen bg-[#06121f] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin"></div>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Loading projects...
          </motion.p>
        </div>
      </section>
    );
  }

  // Error
  if (error) {
    return (
      <section className="min-h-screen bg-[#06121f] flex items-center justify-center px-4">
        <div className="text-center border border-red-400/20 bg-red-400/5 rounded-2xl px-8 py-10">
          <p className="text-red-400 text-lg sm:text-xl">
            {error}
          </p>
        </div>
      </section>
    );
  }

  // Empty
  if (projects.length === 0) {
    return (
      <section className="min-h-screen bg-[#06121f] flex items-center justify-center px-4">
        <div className="text-center">
          <Code2 className="w-12 h-12 mx-auto mb-4 text-gray-600" />

          <p className="text-gray-400 text-lg sm:text-xl">
            No projects found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06121f] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16">

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>

      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]"></div>

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px]"></div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:50px_50px]"></div>

      {/* Main Container */}

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            <Code2 className="h-4 w-4" />
            My Work
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            My{" "}
            <span className="text-cyan-300 drop-shadow-[0_0_20px_rgba(103,232,249,0.25)]">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
            Some of my recent work & experiments
          </p>

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>

        {/* Project Grid */}

        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-400/10"
            >

              {/* Image */}

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0b1c2b]">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Code2 className="h-12 w-12 text-gray-600" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#06121f] via-transparent to-transparent opacity-80"></div>

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md">
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">

                <h2 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                  {project.name}
                </h2>

                {/* Description */}

                <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-400 sm:text-[15px]">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech_stack
                    ?.split(",")
                    .map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-300 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>

                {/* Divider */}

                <div className="mb-4 h-px w-full bg-white/5"></div>

                {/* Date */}

                <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
                  <CalendarDays className="h-4 w-4" />

                  {new Date(
                    project.created_at
                  ).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>

                {/* Links */}

                <div className="mt-auto grid grid-cols-2 gap-2.5">

                  <ProjectLink
                    label="Live"
                    link={project.live_link}
                    icon={<ExternalLink className="h-4 w-4" />}
                    primary={true}
                  />

                  <ProjectLink
                    label="Backend"
                    link={project.backend_deploy_link}
                    icon={<Server className="h-4 w-4" />}
                  />

                  <ProjectLink
                    label="FE GitHub"
                    link={project.github_frontend_link}
                    icon={<Github className="h-4 w-4" />}
                  />

                  <ProjectLink
                    label="BE GitHub"
                    link={project.github_backend_link}
                    icon={<Github className="h-4 w-4" />}
                  />

                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectLink = ({
  label,
  link,
  icon,
  primary = false,
}) => {

  if (!link) {
    return (
      <button
        type="button"
        disabled
        className="flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2.5 text-xs font-medium text-gray-600 sm:text-sm"
      >
        {icon}
        <span>{label}</span>
      </button>
    );
  }

  const primaryClasses =
    "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/10";

  const normalClasses =
    "border-white/10 bg-white/[0.04] text-gray-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "group/link flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm " +
        (primary ? primaryClasses : normalClasses)
      }
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default Projects;
