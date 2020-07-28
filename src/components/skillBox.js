import React from "react";
import PropTypes from "prop-types";

export default function Skillbox({ tech, checked, handleClick }) {
  return (
    <div className="w-auto mx-3">
      <input
        type="checkbox"
        className="p-1 mr-2 leading-tight focus:outline-none"
        id={tech}
        name={tech}
        checked={checked}
        onChange={handleClick}
      />
      <label htmlFor={tech} className="text-sm">
        {tech}
      </label>
    </div>
  );
}

Skillbox.propTypes = {
  tech: PropTypes.string,
  checked: PropTypes.bool,
  handleClick: PropTypes.func,
};
