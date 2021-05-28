import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useDarkMode } from "../util/context/ThemeContext";

function About() {
  const { darkMode } = useDarkMode().state;

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
      className={`${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
      } flex flex-col bg-opacity-90 items-center w-full p-6 mt-2 rounded md:items-stretch md:p-8`}
    >
      <div
        className={`${
          darkMode ? "text-white" : "text-black"
        } flex flex-col items-end w-full font-medium md:px-20 lg:px-40`}
      >
        <h2 className="w-full pb-2 text-xl border-b-4 border-red-300 md:text-3xl">
          <span className="text-red-400">H</span>i there! My name is...
        </h2>
        <h1 className="text-2xl tracking-wider md:text-4xl">
          <span className="text-red-400">J</span>ordan Cruz-Correa
        </h1>
      </div>
      <div className="flex flex-col items-start w-full md:items-center lg:flex-row">
        <blockquote
          className={`${
            darkMode ? "text-white" : "text-black"
          } leading-loose text-lg border-b-4 border-red-400 lg:w-2/3 md:mr-8 md:pl-4 md:border-l-4`}
        >
          <span className="text-2xl text-red-400">I</span> am a software
          engineer with an eye for clean design and a propensity for hands-on
          approaches, I learned the value of efficient troubleshooting firsthand
          as a US Army generator mechanic and electrician. Later, my lifelong
          passion for computers and technology transformed into a strong desire
          to find out how it all works and I wanted to put my problem solving,
          design and troubleshooting skills to use in a more comprehensive way.
          I complement my levelheaded approach with outside-the-box thinking
          wherever it&apos;s needed.
          <div className="pt-8 text-2xl text-center">
            <span className="text-3xl text-red-400">P</span>lease feel free to
            take a look at some of
            <a href="#projects" className="text-red-500 ">
              my work
            </a>
            or if you have any questions,
            <a href="#contact" className="text-red-500 ">
              contact me.
            </a>
          </div>
        </blockquote>

        <figure className="order-first w-full py-8 md:w-1/2 lg:order-last">
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

export default About;
