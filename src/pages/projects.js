import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from "../components/project";
// import Skillbox from "../components/skillBox";
import myProjects from "../assets/data/projectList";

function ProjectsPage() {
  // const [checked, toggleCheck] = useState(false);
  // const [checkedList, toggleCheckedList] = useState([]);
  const [projects] = useState(myProjects);

  // const techToUniqueArray = () => {
  //   let allTech = [];
  //   projects.map((project) => {
  //     project.tech.map((item) => allTech.push(item));
  //   });
  //   let filtered = allTech.filter((a, b) => allTech.indexOf(a) === b);
  //   return filtered;
  // };

  // const techTags = () => {
  //   return techToUniqueArray().map((tech) => (
  //     <Skillbox
  //       key={tech}
  //       tech={tech}
  //       // checked={checked}
  //       handleClick={(e) => addCheckedToFilteredArray(e)}
  //     />
  //   ));
  // };

  // const addCheckedToFilteredArray = (e) => {
  //   let checkedArr = [];
  //   checkedArr.push({
  //     name: e.target.name,
  //     checked: true
  //   });
  //   // toggleCheck(!checked);
  //   toggleCheckedList(checkedArr);
  //   console.log(checkedList);
  // };

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
        title="Projects"
      />

      <section className="w-full pt-5">
        {/* <div className="flex flex-wrap items-center justify-around align-middle">
          {techTags()}
        </div> */}
        <div className="flex flex-wrap px-3">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
