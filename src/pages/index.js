import React from "react";
import useDarkMode from "use-dark-mode";

import Layout from "../components/layout";
import SEO from "../components/seo";

import About from "../sections/about";
import Projects from "../sections/projects";
import Contact from "../sections/contact";

import Skillset from "../sections/skillset";

function IndexPage() {
  const darkMode = useDarkMode(false);

  return (
    <Layout darkMode={darkMode}>
      <SEO
        keywords={[
          `jccdev45`,
          `jordan cruz-correa`,
          `software engineer`,
          `software engineering`,
          `web development`,
          `front end development`,
          `back end development`,
          `gatsby`,
          `tailwind`,
          `react`,
          `tailwindcss`,
        ]}
        title="Home"
      />

      <About darkMode={darkMode} />
      <Skillset darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </Layout>
  );
}

export default IndexPage;
