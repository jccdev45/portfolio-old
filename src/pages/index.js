import React from "react";
import useDarkMode from "use-dark-mode";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "@fontsource/montserrat";

import SEO from "../components/seo";

import About from "../sections/about";
import Projects from "../sections/projects";
import Contact from "../sections/contact";

import Skillset from "../sections/skillset";
import Header from "../components/header";
import Footer from "../components/footer";
import DarkMode from "../components/darkMode";

function IndexPage() {
	const darkMode = useDarkMode(true);

	const img = useStaticQuery(graphql`
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

	const imageData = img.background.childImageSharp.fluid;

	return (
		<BackgroundImage
			fluid={imageData}
			Tag="section"
			className="w-full bg-fixed bg-no-repeat bg-cover md:bg-contain"
		>
			<SEO
				keywords={[
					`jccdev45`,
					`jordan cruz-correa`,
					`software engineer`,
					`software engineering`,
					`web development`,
					`front end development`,
					`back end development`,
					`gatsby`,
					`tailwind`,
					`react`,
					`tailwindcss`,
				]}
				title="Home"
			/>
			<div className="flex flex-col min-h-screen">
				<Header darkMode={darkMode} />

				<main className="w-full max-w-5xl p-4 mx-auto mt-20 md:p-0 md:px-8 md:py-2">
					<About darkMode={darkMode} />
					<Skillset darkMode={darkMode} />
					<Projects darkMode={darkMode} />
					<Contact darkMode={darkMode} />
				</main>

				<Footer darkMode={darkMode} />
				<DarkMode darkMode={darkMode} />
			</div>
		</BackgroundImage>
	);
}

export default IndexPage;
