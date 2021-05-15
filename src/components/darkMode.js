import React from "react";
import { FcIdea, FcNoIdea } from "react-icons/fc";
import { useDarkMode } from "../util/context/ThemeContext";

export default function DarkMode() {
	const theme = useDarkMode();
	const { darkMode } = theme.state;

	const toggle = () => {
		return !darkMode
			? theme.dispatch({ type: "DARK" })
			: theme.dispatch({ type: "LIGHT" });
	};

	return (
		<div className="fixed bottom-0 right-0 flex items-center justify-center mx-1 my-2 md:m-4">
			<button
				style={
					darkMode
						? { backgroundColor: `rgb(74, 85, 104)` }
						: { backgroundColor: `rgb(113, 128, 150)` }
				}
				className="p-1 mx-2 rounded dark-mode-btn focus:outline-none"
				type="button"
				onClick={() => toggle()}
			>
				{darkMode ? (
					<FcNoIdea className="w-8 h-8 text-white md:w-10 md:h-10" />
				) : (
					<FcIdea className="w-8 h-8 text-orange-500 md:w-10 md:h-10" />
				)}
			</button>
		</div>
	);
}
