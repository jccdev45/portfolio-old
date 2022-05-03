import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "@fontsource/montserrat";

import SEO from "../components/seo";

import About from "../sections/about";
import Projects from "../sections/projects";
import Contact from "../sections/contact";

import Skillset from "../sections/skillset";
import Header from "../components/header";
import Footer from "../components/footer";
import DarkMode from "../components/darkMode";
import { ThemeProvider } from "../util/context/ThemeContext";

function IndexPage() {
  const img = useStaticQuery(graphql`
    query bgImg {
      background: file(relativePath: { eq: "bg-red-sky.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = img.background.childImageSharp.fluid;

  return (
    <ThemeProvider>
      <BackgroundImage
        fluid={imageData}
        Tag="section"
        className="w-full bg-fixed bg-no-repeat bg-cover md:bg-contain"
      >
        <SEO
          keywords={[
            `jccdev`,
            `jccdev45`,
            `jordan cruz-correa`,
            `jordan cruz correa`,
            `jordan cruz`,
            `software engineer`,
            `web dev`,
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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="w-full max-w-5xl p-4 mx-auto mt-20 md:p-0 md:px-8 md:py-2">
            <About />
            <Skillset />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <DarkMode />
        </div>
      </BackgroundImage>
    </ThemeProvider>
  );
}

export default IndexPage;
