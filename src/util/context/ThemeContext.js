import React, { useContext, createContext, useReducer } from "react";

const themeReducer = (state, action) => {
	switch (action.type) {
		case "LIGHT":
			return { darkMode: false };
		case "DARK":
			return { darkMode: true };
		default:
			return state;
	}
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [state, dispatch] = useReducer(themeReducer, {
		darkMode: true,
	});

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useDarkMode() {
	return useContext(ThemeContext);
}
