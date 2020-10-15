import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Project({ project }) {
  const { demo, live, repoURL, desc, tech, title, id } = project;

  const borderCalc = () => {
    return id % 2 === 0 ? "md:border-r-4" : "md:border-l-4";
  };

  return (
    <div
      className={`p-2 md:p-5 my-4 overflow-hidden border-red-400 rounded shadow-xl sm:w-full ${borderCalc()} border-b-4`}
    >
      <iframe
        className="sm:w-full"
        style={{ height: `25rem`, width: `100%` }}
        samesite="none"
        secure="true"
        src={demo}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="p-3 md:px-6">
        <div className="flex flex-col items-center justify-between my-2 md:flex-row">
          <div className="my-2 text-2xl font-bold text-center text-red-500 uppercase">{title}</div>
          <div className="flex">
            <a
              className="flex items-center mb-2 font-bold text-red-400 underline uppercase transition-colors ease-in-out duration-400 hover:bg-gray-300"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="w-6 h-6 mx-1" />
              Live
            </a>
            <a
              href={repoURL}
              className="flex items-center mb-2 font-bold text-red-400 underline uppercase transition-colors ease-in-out duration-400 hover:bg-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 mx-1" />
              Source
            </a>
          </div>
        </div>
        <p className="text-base text-justify">{desc}</p>
      </div>
      <div className="flex flex-wrap justify-center py-4 md:px-6 md:justify-start">
        {tech.map((tech) => (
          <div
            key={tech}
            className="inline-block px-3 py-1 mx-2 my-1 text-black bg-gray-200 rounded-full project-tech"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
  title: PropTypes.string,
  desc: PropTypes.string,
  tech: PropTypes.array,
  live: PropTypes.string,
  repoURL: PropTypes.string,
  demo: PropTypes.string,
};
