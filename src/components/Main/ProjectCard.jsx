import React from "react";

const ProjectCard = ({ visibleProjects }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 px-4">
        {visibleProjects.map((project, index) => (
          <div
            key={index} // Unique key for each project
            className="bg-gray-100 dark:bg-white/10 backdrop-blur-md p-6 transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mb-4"
            />

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-black dark:text-gray-300 text-sm mb-3">
              {project.description}
            </p>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i} // Unique key for each technology
                  className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-white text-xs font-medium px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm me-2 text-white bg-emerald-600 dark:bg-emerald-500 px-4 py-2 hover:bg-emerald-700 transition"
            >
              <i className="fas fa-desktop me-1"></i> Live Preview
            </a>
            <a
              href={project.githubLink || "#"} // If no GitHub link, default to '#'
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-emerald-600 dark:bg-emerald-500 px-4 py-2 hover:bg-emerald-700 transition"
            >
              <i className="fa-brands fa-github me-1"></i> GitHub
            </a>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default ProjectCard;
