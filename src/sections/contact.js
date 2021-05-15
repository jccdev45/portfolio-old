import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import { useDarkMode } from "../util/context/ThemeContext";

function Contact() {
	const { darkMode } = useDarkMode().state;
	const [state, setContactState] = useState({});
	const contactRef = useRef(null);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactState({ ...state, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = contactRef.current;

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...state,
			}),
		})
			.then(() => navigate("/"))
			.catch((error) => alert(error));
		setContactState({ name: "", email: "", message: "" });
	};

	return (
		<section
			id="contact"
			className="flex flex-col items-center w-full p-6 mt-12 rounded md:mt-24 md:mb-12 md:items-stretch"
			style={
				darkMode
					? { backgroundColor: `rgba(50, 50, 50, 0.75)`, color: `white` }
					: { backgroundColor: `rgba(255, 255, 255, 0.9)`, color: `black` }
			}
		>
			<h1 className="w-3/4 pl-4 mb-4 text-2xl uppercase border-b-4 border-red-300">
				<span className="text-4xl text-red-400">C</span>ontact
			</h1>
			<form
				className="p-4 border-b-4 border-red-400 md:border-r-4 md:px-40"
				method="post"
				action="/"
				netlify-honeypot="bot-field"
				data-netlify="true"
				name="Contact"
				onSubmit={handleSubmit}
				ref={contactRef}
			>
				<input type="hidden" name="bot-field" onChange={handleChange} />
				<input type="hidden" name="form-name" value="Contact" />
				<label
					className="relative block mb-2 font-bold uppercase"
					htmlFor="first-name"
				>
					<small
						className={`${
							darkMode ? "bg-gray-400" : "bg-white"
						} absolute px-2 font-bold rounded -top-3 left-2`}
					>
						Name
					</small>
					<input
						onChange={handleChange}
						value={state.name}
						name="name"
						className="w-full p-2 mb-6 rounded-lg focus:outline-none form-input"
						id="first-name"
						placeholder="Dr. Crentist the Dentist, DDS"
						type="text"
					/>
				</label>

				<label
					className="relative block mb-2 font-bold uppercase"
					htmlFor="email"
				>
					<small
						className={`${
							darkMode ? "bg-gray-400" : "bg-white"
						} absolute px-2 font-bold rounded -top-3 left-2`}
					>
						Email
					</small>
					<input
						onChange={handleChange}
						value={state.email}
						name="email"
						className="w-full p-2 mb-6 rounded-lg focus:outline-none form-input"
						id="email"
						placeholder="crentist@totallyrealdentists.com"
						type="email"
					/>
				</label>
				<label
					className="relative block mb-2 font-bold uppercase"
					htmlFor="message"
				>
					<small
						className={`${
							darkMode ? "bg-gray-400" : "bg-white"
						} absolute px-2 font-bold rounded -top-3 left-2`}
					>
						Message
					</small>
					<textarea
						onChange={handleChange}
						value={state.message}
						name="message"
						className="w-full p-2 mb-6 rounded-lg focus:outline-none form-textarea"
						id="message"
						placeholder="You should floss more..."
						rows="8"
					/>
				</label>
				<div className="grid w-full place-items-center">
					<button
						className="w-1/4 p-3 mx-auto text-sm font-bold text-white bg-red-500 rounded hover:bg-red-600"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</section>
	);
}

export default Contact;
