import React from "react";
import { FaGithub } from "react-icons/fa";
import { useDarkMode } from "../util/context/ThemeContext";

export default function Project({ project }) {
  const { darkMode } = useDarkMode().state;
  const { demo, live, repoURL, desc, tech, title, id } = project;

  const borderCalc = () => {
    return id % 2 === 0 ? "md:border-r-4" : "md:border-l-4";
  };

  return (
    <article
      className={`p-2 md:p-5 overflow-hidden border-red-400 rounded shadow-xl sm:w-full ${borderCalc()} border-b-4`}
    >
      <iframe
        title={title}
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
          <div className="my-2 text-2xl font-bold text-center text-red-500 uppercase">
            <a
              className="flex items-center m-0 font-bold text-red-400 uppercase transition-colors ease-in-out duration-400"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </div>
          <div className="flex">
            <a
              href={repoURL}
              className="flex items-center mb-2 font-bold text-red-400 uppercase transition-colors ease-in-out duration-400"
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
            className={`${
              darkMode ? "text-black bg-gray-200" : "text-white bg-gray-500"
            } inline-block px-3 py-1 mx-2 my-1 rounded-full project-tech`}
          >
            {tech}
          </div>
        ))}
      </div>
    </article>
  );
}
