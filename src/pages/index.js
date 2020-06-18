import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import headshot from "../images/floral-headshot.jpeg";
import { FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";
import { DiFirebase, DiRuby, DiPostgresql } from "react-icons/di";
import { GiDart, GiHummingbird } from "react-icons/gi";
import gatsby from "../images/gatsby.png";
import rails from "../images/rails.png";

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
    icon: FaReact,
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
    icon: FaReact,
    color: ``,
  },
];

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="mx-3 md:w-2/3 md:mr-8 order-last">
          <blockquote className="py-3 md:pl-4 font-serif text-center leading-loose text-justify border-b-4 md:border-l-4 border-gray-300">
            I&apos;m a NYC-based software engineer with an eye for clean design
            and propensity for hands-on approaches. As a former electrician and
            US Army generator mechanic, I understand that efficient
            troubleshooting is key. A lifelong passion for all things computers
            and technology transformed into a strong desire to find out how it
            all works under the hood. I&apos;m prepared to bring levelheadedness
            and out-of-the-box thinking wherever it&apos;s needed.
          </blockquote>
        </div>

        <figure className="w-2/3 lg:order-last md:w-1/3">
          <img alt="Headshot" src={headshot} />
        </figure>
      </section>

      <div className="flex justify-center lg:justify-center">
        <div className="my-10 mx-12 flex md:flex-row flex-wrap justify-center border-b-4 border-r-4 border-gray-300">
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
                className="m-3 mx-2 md:m-5 h-auto font-serif text-lg flex md:flex-row items-center justify-start"
              >
                {Icon === item.icon ? (
                  <Icon
                    className="mx-5 h-auto text-4xl"
                    style={{ color: `${item.color}` }}
                  />
                ) : (
                  <img src={Icon} className="mx-5 w-auto h-10" />
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
