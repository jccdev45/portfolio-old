import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiSunrise, GiSunset } from "react-icons/gi";
import Toggle from "./Toggle";

function Footer({ darkMode }) {
  return (
    <footer
      className={`fixed bottom-0 z-50 flex justify-around w-full p-2 mx-auto text-white text-md md:p-4 ${
        darkMode.value ? `bg-gray-700` : `bg-gray-600`
      }`}
    >
      <div className="flex items-center justify-center">
        <button
          style={
            darkMode.value
              ? {}
              : { backgroundColor: `rgba(255, 255, 255, 0.3)` }
          }
          className="mx-2 dark-mode-btn"
          type="button"
          onClick={darkMode.disable}
        >
          <GiSunrise
            className={`w-6 h-6 md:w-10 md:h-10 ${
              darkMode.value ? "text-gray-500" : "text-yellow-500"
            } `}
          />
        </button>
        <Toggle className="mx-2" darkMode={darkMode} />
        <button
          style={
            darkMode.value
              ? { backgroundColor: `rgba(255, 255, 255, 0.3)` }
              : {}
          }
          className="mx-2 dark-mode-btn"
          type="button"
          onClick={darkMode.enable}
        >
          <GiSunset
            className={`w-6 h-6 md:w-10 md:h-10 ${
              darkMode.value ? "text-orange-500" : "text-gray-500"
            } `}
          />
        </button>
      </div>

      <p className="flex items-center justify-between order-first">
        <a
          className="mx-1 text-xl font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://linkedin.com/in/Jordan-Cruz-Correa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="mx-1 text-xl font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://github.com/JordanCruzCorrea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="mx-1 text-xl font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://twitter.com/jccdev45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="mx-1 text-xl font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://instagram.com/jccdev45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </p>
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.object,
};

export default Footer;
