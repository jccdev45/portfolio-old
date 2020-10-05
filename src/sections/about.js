import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function About({ darkMode }) {
  const img = useStaticQuery(graphql`
    query img {
      headshot: file(relativePath: { eq: "floral-headshot.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section
      className="flex flex-col items-center w-full p-6 mt-6 rounded md:mt-12 md:items-stretch md:p-8"
      style={
        darkMode.value
          ? { backgroundColor: `rgba(50, 50, 50, 0.75)` }
          : { backgroundColor: `rgba(255, 255, 255, 0.9)` }
      }
    >
      <div className="flex flex-col items-end w-full font-medium md:px-40">
        <h2 className="w-full pb-2 text-xl border-b-4 border-red-300 md:text-3xl">
          <span className="text-red-400">H</span>i there! My name is...
        </h2>
        <h1 className="text-2xl md:text-4xl">
          <span className="text-red-400">J</span>ordan Cruz-Correa
        </h1>
      </div>
      <div className="flex flex-col items-start w-full md:flex-row">
        <blockquote className="leading-loose text-justify border-b-4 border-red-400 md:w-2/3 md:mr-8 md:pl-4 md:border-l-4">
          <span className="text-2xl text-red-400">I</span> am a software engineer
          with an eye for clean design and a propensity for hands-on approaches,
          I learned the value of efficient troubleshooting firsthand as a US
          Army generator mechanic and electrician. Later, my lifelong passion
          for computers and technology transformed into a strong desire to find
          out how it all works and I wanted to put my problem solving, design
          and troubleshooting skills to use in a more comprehensive way. I
          complement my levelheaded approach with outside-the-box thinking
          wherever it&apos;s needed.
          <div className="pt-8 text-2xl text-center">
            <span className="text-3xl text-red-400">P</span>lease feel free to
            take a look at some of
            <a href="#projects" className="text-red-500 underline">
              my work
            </a>
            or if you have any questions,
            <a href="#contact" className="text-red-500 underline">
              contact me.
            </a>
          </div>
        </blockquote>

        <figure className="order-first w-full py-8 md:w-1/3 lg:order-last">
          <Img
            fluid={img.headshot.childImageSharp.fluid}
            className="rounded-lg"
            alt="A very handsome software engineer named Jordan Cruz-Correa"
          />
        </figure>
      </div>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.object,
};

export default About;
