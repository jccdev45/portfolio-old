import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";
import { DiFirebase, DiRuby, DiPostgresql } from "react-icons/di";
import { GiDart, GiHummingbird } from "react-icons/gi";

import Layout from "../components/layout";
import SEO from "../components/seo";
import gatsby from "../images/gatsby.png";
import rails from "../images/rails.png";

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
      rails: file(relativePath: { eq: "rails.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const skills = [
    {
      skill: `CSS`,
      icon: FaCss3,
      color: `rgb(0, 90, 231)`,
    },
    {
      skill: `Javascript`,
      icon: FaJs,
      color: `rgb(235, 208, 86)`,
    },
    {
      skill: `React`,
      icon: FaReact,
      color: `rgb(29, 206, 240)`,
    },
    {
      skill: `GatsbyJS`,
      icon: img.gatsby.childImageSharp.fluid,
      color: ``,
    },
    {
      skill: `NodeJS`,
      icon: FaNode,
      color: `rgb(90, 160,	94)`,
    },
    {
      skill: `PostgreSQL`,
      icon: DiPostgresql,
      color: `rgb(29,	92,	131	`,
    },
    {
      skill: `Dart`,
      icon: GiDart,
      color: `rgb(0, 170, 233)`,
    },
    {
      skill: `Flutter`,
      icon: GiHummingbird,
      color: `rgb(40, 190, 236)`,
    },
    {
      skill: `Firebase`,
      icon: DiFirebase,
      color: `rgb(248, 191, 63)`,
    },
    {
      skill: `Ruby`,
      icon: DiRuby,
      color: `rgb(180,	22,	16)`,
    },
    {
      skill: `Rails`,
      icon: img.rails.childImageSharp.fluid,
      color: ``,
    },
  ];

  return (
    <Layout>
      <SEO keywords={[`jccdev45`, `jordan cruz-correa`]} title="Home" />

      <section className="flex flex-col items-center md:flex-row">
        <div className="order-last mx-3 md:w-2/3 md:mr-8">
          <blockquote className="py-3 font-serif leading-loose text-center border-b-4 border-gray-300 md:pl-4 md:border-l-4">
            I&apos;m a NYC-based software engineer with an eye for clean design
            and propensity for hands-on approaches. As a former electrician and
            US Army generator mechanic, I understand that efficient
            troubleshooting is key. A lifelong passion for all things computers
            and technology transformed into a strong desire to find out how it
            all works under the hood. Please feel free to take a look at some of
            <AniLink
              cover
              duration={0.75}
              bg="cyan"
              to="/projects"
              className="text-teal-500"
            >
              {" "}
              my work
            </AniLink>{" "}
            or if you have any questions,{" "}
            <AniLink
              cover
              duration={0.75}
              bg="cyan"
              to="/contact"
              className="text-teal-500"
            >
              contact me.
            </AniLink>{" "}
          </blockquote>
        </div>

        <figure className="w-2/3 lg:order-last md:w-1/3">
          <Img fluid={img.headshot.childImageSharp.fluid} />
        </figure>
      </section>

      <div className="flex justify-center lg:justify-center">
        <div className="flex flex-wrap justify-center my-10 border-gray-300 md:my-20 md:mx-12 md:flex-row md:border-b-4 md:border-r-4">
          {skills.map((item) => {
            let Icon;

            if (item.skill === "GatsbyJS") {
              Icon = gatsby;
            } else if (item.skill === "Rails") {
              Icon = rails;
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
                  <img src={Icon} className="w-auto h-10 mx-5" />
                )}
                <span>{item.skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
