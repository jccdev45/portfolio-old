import React from "react";

import Project from "../components/project";
import myProjects from "../assets/data/projectList";
import { useDarkMode } from "../util/context/ThemeContext";

function Projects() {
	const { darkMode } = useDarkMode().state;

	return (
		<section
			id="projects"
			className="p-4 my-20 rounded md:p-6"
			style={
				darkMode
					? { backgroundColor: `rgba(50, 50, 50, 0.75)`, color: `white` }
					: { backgroundColor: `rgba(255, 255, 255, 0.9)`, color: `black` }
			}
		>
			<h1 className="w-3/4 pl-4 mb-4 text-2xl uppercase border-b-4 border-red-300">
				<span className="text-4xl text-red-400">P</span>rojects
			</h1>
			<div className="flex flex-wrap mt-6">
				{myProjects.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
