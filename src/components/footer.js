import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiSunrise, GiSunset } from "react-icons/gi";
import Toggle from "./Toggle";

function Footer({ darkMode }) {
  return (
    <footer className="fixed bottom-0 z-50 flex justify-around w-full p-2 mx-auto text-white bg-teal-500 text-md md:p-4">
      <div className="flex items-center justify-center">
        <button
          style={
            darkMode.value
              ? {}
              : { backgroundColor: `rgba(255, 255, 255, 0.3)` }
          }
          className="mx-2"
          type="button"
          onClick={darkMode.disable}
        >
          <GiSunrise className="w-10 h-10" />
        </button>
        <Toggle className="mx-2" darkMode={darkMode} />
        <button
          style={
            darkMode.value
              ? { backgroundColor: `rgba(255, 255, 255, 0.3)` }
              : {}
          }
          className="mx-2"
          type="button"
          onClick={darkMode.enable}
        >
          <GiSunset className="w-10 h-10" />
        </button>
      </div>
      <p className="flex items-center justify-between">
        <a
          className="mx-1 text-lg font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://linkedin.com/in/Jordan-Cruz-Correa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="mx-1 text-lg font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://github.com/JordanCruzCorrea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="mx-1 text-lg font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://twitter.com/jccdev45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="mx-1 text-lg font-bold no-underline lg:mx-5 md:text-2xl"
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
  darkMode: PropTypes.any,
};

export default Footer;
