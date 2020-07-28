import PropTypes from "prop-types";
import React from "react";
import useDarkMode from "use-dark-mode";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  const darkMode = useDarkMode(false);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-1 w-full max-w-5xl p-4 mx-auto my-20 md:px-8 md:py-2">
        {children}
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
