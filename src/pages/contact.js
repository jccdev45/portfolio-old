import React, { useState, useRef } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";

function ContactPage() {
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
    <Layout>
      <SEO keywords={[`jordan cruz-correa`, `jccdev45`]} title="Contact" />
      <section className="mt-16">
        <form
          className="mx-auto md:w-2/3"
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
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            Name
          </label>

          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Dr. Crentist the Dentist, DDS"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="email"
          >
            Email
          </label>

          <input
            onChange={handleChange}
            value={state.email}
            name="email"
            className="w-full mb-6 form-input"
            id="email"
            placeholder="crentist@totallyrealdentists.com"
            type="email"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            onChange={handleChange}
            value={state.message}
            name="message"
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="You should floss more..."
            rows="8"
          />

          <button
            className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
