import React from "react";
import PropTypes from "prop-types";

function Toggle({ darkMode }) {
  return (
    <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-check focus:outline-none"
        style={
          darkMode.value
            ? { left: `16px`, transition: `left 1s ease-in` }
            : {}
        }
      />
      <label
        htmlFor="toggle"
        className="block h-6 overflow-hidden rounded-full cursor-pointer toggle-label"
        style={
          darkMode.value
            ? { backgroundColor: `gray` }
            : { backgroundColor: `lightGray` }
        }
      ></label>
    </div>
  );
}

Toggle.propTypes = {
  darkMode: PropTypes.object,
  setDarkMode: PropTypes.func,
};

export default Toggle;
