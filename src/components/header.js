import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/jcc-logo.png";
import { useDarkMode } from "../util/context/ThemeContext";

function Header() {
	const { darkMode } = useDarkMode().state;
	const [isExpanded, toggleExpansion] = useState(false);

	return (
		<header
			className={`fixed top-0 z-50 w-full text-white ${
				darkMode ? `bg-gray-700` : `bg-gray-500`
			}`}
		>
			<div className="flex flex-wrap items-center justify-between max-w-4xl p-3 mx-auto">
				<Link to="/" onClick={() => toggleExpansion(false)}>
					<img
						alt="JCCDev Logo"
						src={logo}
						className="object-contain h-12 mx-1 focus:outline-none"
					/>
				</Link>

				<button
					className="flex items-center px-3 py-2 border border-white rounded focus:outline-none md:hidden"
					onClick={() => toggleExpansion(!isExpanded)}
				>
					<svg
						className="w-3 h-3 fill-current"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>

				<nav
					className={`${
						isExpanded ? `block` : `hidden`
					} md:flex md:items-center w-full md:w-auto`}
				>
					{[
						{
							route: `#projects`,
							title: `Projects`,
						},
						{
							route: `#contact`,
							title: `Contact`,
						},
					].map((link) => (
						<a
							className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
							key={link.title}
							href={link.route}
							onClick={() => toggleExpansion(!isExpanded)}
						>
							{link.title}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}

export default Header;
