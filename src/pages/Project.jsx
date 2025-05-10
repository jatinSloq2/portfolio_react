import React, { useState } from 'react'; // Importing useState to manage component state
import { projectsData } from '../data/projects/pojest.js'; // Import project data (adjust path accordingly)
import Heading from '../components/Utils/Heading.jsx';
import ProjectCard from '../components/Main/ProjectCard.jsx';

const Project = () => {
  // State hook to toggle between showing all projects or a limited number (6)
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  // Conditionally set which projects to display
 

  return (
    <section
      id="projects"
      className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700"
    >
      <Heading name="&lt; My Projects. /&gt;" tagline={"Driven by Purpose, Delivered with Precision"}/>

      {/* Projects Grid: Displays project cards */}
     <ProjectCard visibleProjects={visibleProjects}/>

      {/* Button to toggle between showing all projects or a subset */}
      {projectsData.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)} // Toggle the showAll state
            className="text-white bg-emerald-600 dark:bg-emerald-500 px-6 py-3 -full hover:bg-emerald-700 transition"
          >
            {showAll ? "Show Less" : "All Projects"} {/* Button text changes based on state */}
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
