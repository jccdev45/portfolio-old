import React from "react";
import PropTypes from "prop-types";
import { FcIdea, FcNoIdea } from "react-icons/fc";

export default function DarkMode({ darkMode }) {
  return (
    <div className="fixed bottom-0 right-0 flex items-center justify-center mx-1 my-2 md:m-4">
      <button
        style={
          darkMode.value
            ? { backgroundColor: `rgb(74, 85, 104)` }
            : { backgroundColor: `rgb(113, 128, 150)` }
        }
        className="p-1 mx-2 rounded dark-mode-btn focus:outline-none"
        type="button"
        onClick={darkMode.toggle}
      >
        {darkMode.value ? (
          <FcNoIdea className="w-8 h-8 text-white md:w-10 md:h-10" />
        ) : (
          <FcIdea className="w-8 h-8 text-orange-500 md:w-10 md:h-10" />
        )}
      </button>
    </div>
  );
}

DarkMode.propTypes = {
  darkMode: PropTypes.object,
};
