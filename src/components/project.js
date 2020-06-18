import React from "react";
import PropTypes from "prop-types";

export default function Project(props) {
  return (
    <div className="my-5 mx-auto -px-3 sm:w-full rounded overflow-hidden shadow-lg">
      {props.project.demo === null ? (
        <span className="mx-auto">Demo video coming soon</span>
      ) : (
        <video src={props.project.demo} controls className="mx-auto" />
      )}
      <div className="px-6 py-4">
        <a
          className="mb-2 font-bold text-xl text-teal-400"
          href={props.project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.project.title}
        </a>
        <p className="text-gray-700 text-base">{props.project.desc}</p>
      </div>
      <div className="px-6 py-4">
        {props.project.tech.map((tech) => (
          <div key={tech} className="mx-2 py-1 px-3 inline-block bg-gray-200 rounded-full">
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
