import React from "react";

import skills from "../assets/data/skillList";

import gatsby from "../assets/images/gatsby.png";
import rails from "../assets/images/rails.png";
import tailwind from "../assets/images/tailwind.png";
import { useDarkMode } from "../util/context/ThemeContext";

function Skillset() {
	const { darkMode } = useDarkMode().state;

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
					className="flex flex-col items-center h-auto mx-2 my-3 text-lg rounded md:m-3 md:flex-row md:justify-start"
				>
					{Icon === item.icon ? (
						<Icon
							className="h-auto text-4xl md:mr-5"
							style={{ color: `${item.color}` }}
						/>
					) : (
						<img
							src={Icon}
							alt={item.skill}
							className="w-auto h-10 mx-5 rounded-full"
						/>
					)}
					<span>{item.skill}</span>
				</div>
			);
		});
	};

	return (
		<section
			className="flex flex-col justify-center order-last p-6 my-20 rounded lg:justify-center"
			style={
				darkMode
					? { backgroundColor: `rgba(50, 50, 50, 0.75)`, color: `white` }
					: { backgroundColor: `rgba(255, 255, 255, 0.9)`, color: `black` }
			}
		>
			<h1 className="w-3/4 pl-4 text-2xl uppercase border-b-4 border-red-300">
				<span className="text-4xl text-red-400">S</span>
				<span>killset</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center border-b-4 border-red-400 md:mt-6 md:p-4 md:flex-row md:border-r-4">
				{skillMap()}
			</div>
		</section>
	);
}

export default Skillset;
