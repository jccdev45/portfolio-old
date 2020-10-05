import React from "react";
import PropTypes from "prop-types";

import Project from "../components/project";
import myProjects from "../assets/data/projectList";

function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className="p-4 my-20 rounded md:p-6"
      style={
        darkMode.value
          ? { backgroundColor: `rgba(50, 50, 50, 0.75)` }
          : { backgroundColor: `rgba(255, 255, 255, 0.9)` }
      }
    >
      <h1 className="w-3/4 pl-4 mb-4 text-2xl uppercase border-b-4 border-red-300">
        <span className="text-4xl text-red-400">P</span>rojects
      </h1>
      <div className="flex flex-wrap mt-6">
        {myProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  darkMode: PropTypes.object,
};

export default Projects;
