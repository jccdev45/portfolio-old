import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import skills from "../assets/data/skillList";
import Layout from "../components/layout";
import SEO from "../components/seo";
import gatsby from "../assets/images/gatsby.png";
import rails from "../assets/images/rails.png";
import tailwind from "../assets/images/tailwind.png";

function IndexPage() {
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

  const skillMap = () => {
    return skills.map((item) => {
      let Icon;

      if (item.skill === "GatsbyJS") {
        Icon = gatsby;
      } else if (item.skill === "Rails") {
        Icon = rails;
      } else if (item.skill === "TailwindCSS") {
        Icon = tailwind;
      } else {
        Icon = item.icon;
      }

      return (
        <div
          key={item.skill}
          className="flex flex-col items-center h-auto m-3 mx-2 font-serif text-lg md:m-5 md:flex-row md:justify-start"
        >
          {Icon === item.icon ? (
            <Icon
              className="h-auto mx-5 text-4xl"
              style={{ color: `${item.color}` }}
            />
          ) : (
            <img src={Icon} className="w-auto h-10 mx-5 rounded-full" />
          )}
          <span>{item.skill}</span>
        </div>
      );
    });
  };

  return (
    <Layout>
      <SEO
        keywords={[
          `jccdev45`,
          `jordan cruz-correa`,
          `gatsby`,
          `tailwind`,
          `react`,
          `tailwindcss`,
        ]}
        title="Home"
      />

      <section className="flex flex-col items-center mt-24 md:flex-row">
        <div className="order-last mx-3 md:w-2/3 md:mr-8">
          <blockquote className="py-3 font-serif leading-loose text-center border-b-4 border-gray-300 md:text-justify md:pl-4 md:border-l-4">
            A software engineer with an eye for clean design and a propensity
            for hands-on approaches, I learned the value of efficient
            troubleshooting firsthand as a US Army generator mechanic and
            electrician. Later, my lifelong passion for computers and technology
            transformed into a strong desire to find out how it all works and I
            wanted to put my problem solving, design and troubleshooting skills
            to use in a more comprehensive way. I complement my levelheaded
            approach with outside-the-box thinking wherever it&apos;s needed. Please
            feel free to take a look at some of
            <AniLink
              cover
              duration={0.75}
              bg="cyan"
              to="/projects"
              className="text-teal-500"
            >
              my work
            </AniLink>
            or if you have any questions,
            <AniLink
              cover
              duration={0.75}
              bg="cyan"
              to="/contact"
              className="text-teal-500"
            >
              contact me.
            </AniLink>
          </blockquote>
        </div>

        <figure className="w-2/3 lg:order-last md:w-1/3">
          <Img
            fluid={img.headshot.childImageSharp.fluid}
            className="rounded-lg"
            alt="A very handsome software engineer named Jordan Cruz-Correa"
          />
        </figure>
      </section>

      <div className="flex justify-center lg:justify-center">
        <div className="flex flex-wrap justify-center my-10 border-gray-300 md:my-20 md:mx-12 md:flex-row md:border-b-4 md:border-r-4">
          {skillMap()}
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
