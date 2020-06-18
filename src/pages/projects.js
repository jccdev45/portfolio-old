import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Petsy from "../demos/petsy.mp4";
import Creator from "../demos/creator.mp4";
import Collab from "../demos/Collab.mp4";
import Luz from "../demos/Luz-Demo.mp4";
import Project from "../components/project";

const projects = [
  {
    title: "Luz Electric",
    desc:
      "Updated version of existing site. Luz Electric is a residential, commercial and industrial electrical contracting company based in the Bronx.",
    tech: ["GatsbyJS", "React-Bootstrap", "ani-link"],
    live: "https://luz-electric.netlify.com/",
    repoURL: ["https://github.com/JordanCruzCorrea/luz-electric"],
    demo: Luz,
  },
  {
    title: "UX Collab",
    desc:
      "App to provide easy, quickly prepared meal kits. Made in collaboration with the User Experience cohort and a team of fellow engineers.",
    tech: ["React", "React-Bootstrap", "3rd Party API", "Sass"],
    live: "http://mealprepapp.surge.sh/",
    repoURL: ["https://github.com/wwhite11/CollabProject"],
    demo: Collab,
  },
  {
    title: "Character Creator",
    desc:
      "Create characters for the world of Westeros, customize your avatar and enter your name, aliases, titles and allegiances.",
    tech: ["Responsive", "React", "MockAPI", "3rd Party API"],
    live: "http://got-creator.surge.sh/",
    repoURL: ["https://github.com/JordanCruzCorrea/character-creation"],
    demo: Creator,
  },
  {
    title: "Petsy",
    desc:
      "One stop shop for animal needs including toys, food, clothing, grooming and walking services.",
    tech: ["HTML/CSS", "Responsive", "JavaScript"],
    live: "https://jordancruzcorrea.github.io/Petsy/",
    repoURL: ["https://github.com/JordanCruzCorrea/Petsy"],
    demo: Petsy,
  },
  {
    title: "Petsy Redeux",
    desc:
      "A full-stack version of the original Petsy project (frontend revamp in progress)",
    tech: ["React", "React-Router", "Ruby on Rails", "React-Bootstrap"],
    live: "https://petsy-redeux.netlify.com/",
    repoURL: [
      "https://github.com/JordanCruzCorrea/petsy_redeux_api",
      "https://github.com/JordanCruzCorrea/petsy_redeux_client",
    ],
    demo: null,
  },
];

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Projects"
      />

      <section className="-mx-3">
        <div className="flex flex-wrap px-3">{projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}</div>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
