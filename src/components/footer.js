import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer
      className={`flex rounded justify-center md:mb-4 mb-2 w-1/2 md:w-1/3 p-2 mx-auto text-white text-md md:p-4 ${
        darkMode.value ? `bg-gray-700` : `bg-gray-600`
      }`}
    >
      <p className="flex items-center justify-between order-first">
        <a
          className="mx-1 text-xl font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://github.com/jccdev45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
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
          href="https://instagram.com/jccdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="mx-1 text-xl font-bold no-underline lg:mx-5 md:text-2xl"
          href="https://twitter.com/jccdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </p>
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.object,
};

export default Footer;
