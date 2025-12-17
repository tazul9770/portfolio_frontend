import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import apiClient from "../services/api_client";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
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

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-400 text-lg"
        >
          Loading projects...
        </motion.p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <p className="text-red-400 text-xl">{error}</p>
      </div>
    );

  if (projects.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <p className="text-gray-400 text-xl">No projects found.</p>
      </div>
    );

  return (
    <section className="min-h-screen bg-gray-900 px-6 py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-white mb-3">
          My Projects
        </h1>
        <p className="text-gray-400 text-lg">
          Some of my recent work & experiments
        </p>
      </div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-7xl mx-auto"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="rounded-2xl bg-gray-800 border border-gray-700 hover:border-gray-600 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No Image
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h2>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack?.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-indigo-600/20 text-indigo-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-xs mb-4">
                {new Date(project.created_at).toLocaleDateString()}
              </p>

              {/* Links */}
              <div className="mt-auto grid grid-cols-2 gap-3">
                <ProjectLink label="Live" link={project.live_link} />
                <ProjectLink label="Backend" link={project.backend_deploy_link} />
                <ProjectLink label="FE GitHub" link={project.github_frontend_link} />
                <ProjectLink label="BE GitHub" link={project.github_backend_link} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const ProjectLink = ({ label, link }) => {
  if (!link)
    return (
      <button
        disabled
        className="px-4 py-2 rounded-lg bg-gray-700 text-gray-400 text-sm cursor-not-allowed"
      >
        {label}
      </button>
    );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm text-center hover:bg-blue-700 transition"
    >
      {label}
    </a>
  );
};

export default Projects;
