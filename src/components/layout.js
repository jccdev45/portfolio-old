import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Header from "./header";
import Footer from "./footer";

function Layout({ children, darkMode }) {
  const bgImg = useStaticQuery(graphql`
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

  const imageData = bgImg.background.childImageSharp.fluid;

  return (
    <BackgroundImage
      fluid={imageData}
      Tag="section"
      className="w-full bg-fixed bg-no-repeat bg-cover md:bg-contain"
    >
      <div className="flex flex-col min-h-screen">
        <Header darkMode={darkMode} />

        <main className="w-full max-w-5xl p-4 mx-auto my-20 md:p-0 md:px-8 md:py-2">
          {children}
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </BackgroundImage>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkMode: PropTypes.any,
};

export default Layout;
