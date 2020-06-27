import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Project(props) {
  return (
    <div className="my-5 mx-auto -px-3 sm:w-full rounded overflow-hidden shadow-lg">
      {props.project.demo === null ? (
        <span className="mx-auto">Demo video coming soon</span>
      ) : (
        <video src={props.project.demo} controls className="mx-auto" />
      )}
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <a
            className="flex items-center mb-2 font-bold text-xl text-teal-400"
            href={props.project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="mx-1" />
            {props.project.title}
          </a>
          <a
            href={props.project.repoURL}
            className="flex items-center mb-2 font-bold text-xl text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mx-1" />
            Source
          </a>
        </div>
        <p className="text-gray-700 text-base">{props.project.desc}</p>
      </div>
      <div className="px-6 py-4 flex flex-wrap justify-center md:justify-start">
        {props.project.tech.map((tech) => (
          <div
            key={tech}
            className="mx-2 my-1 py-1 px-3 inline-block bg-gray-200 rounded-full"
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
