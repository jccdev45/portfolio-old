import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-5xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-teal-400">
        <nav className="flex justify-center max-w-5xl p-1 mx-auto text-sm md:p-8">
          {/* <p className="text-white"> */}
          {/* <strong>Designed by:</strong> Jordan Cruz-Correa */}
          {/* Based off https://www.gatsbyjs.org/starters/taylorbryant/gatsby-starter-tailwind/ */}
          {/* </p> */}

          <p className="flex justify-between">
            <a
              className="font-bold text-lg text-white no-underline mx-5"
              href="https://linkedin.com/in/Jordan-Cruz-Correa"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="font-bold text-lg text-white no-underline mx-5"
              href="https://github.com/JordanCruzCorrea"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="font-bold text-lg text-white no-underline mx-5"
              href="https://twitter.com/jccdev45"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="font-bold text-lg text-white no-underline mx-5"
              href="https://instagram.com/jccdev45"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
