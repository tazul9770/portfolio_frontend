import { useEffect, useState } from "react";
import apiClient from "../services/api_client";

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
        <p className="text-gray-400 animate-pulse text-lg">Loading projects...</p>
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
    <div className="min-h-screen p-6 bg-gray-900">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gray-800 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 text-lg">
                  No Image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <p className="text-2xl font-semibold text-gray-200 mb-2">{project.name}</p>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack &&
                  project.tech_stack.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-700 text-indigo-100 rounded-full text-sm font-medium"
                    >
                      {tech.trim()}
                    </span>
                  ))}
              </div>

              <p className="text-gray-400 text-sm mb-4">
                Created: {new Date(project.created_at).toLocaleDateString()}
              </p>

              <p className="text-xl font-semibold text-white mb-2">All Links</p>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.live_link ? (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                  >
                    Live Link
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed opacity-50">
                    Live Link
                  </span>
                )}

                {project.backend_deploy_link ? (
                  <a
                    href={project.backend_deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                  >
                    Backend Deploy
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed opacity-50">
                    Backend Deploy
                  </span>
                )}

                {project.github_frontend_link ? (
                  <a
                    href={project.github_frontend_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 shadow-md"
                  >
                    Frontend Github
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed opacity-50">
                    Frontend Github
                  </span>
                )}

                {project.github_backend_link ? (
                  <a
                    href={project.github_backend_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 shadow-md"
                  >
                    Backend Github
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed opacity-50">
                    Backend Github
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
