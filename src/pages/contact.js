import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.ContactPage = React.createRef();
    this.state = {};
  }

  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = this.ContactPage.current;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then((response) => {
        console.log("=======================");
        console.log(`${JSON.stringify(response, null, 2)}`);
        console.log("=======================");
        navigate(form.getAttribute("action"));
      })
      .catch((error) => {
        console.log("=======================");
        console.log(`Error in form submit: ${error}`);
        console.log("=======================");
      });
  };

  render() {
    return (
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Contact"
        />
        <section>
          <form
            className="mx-auto md:w-1/2"
            method="post"
            action="#"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="Contact"
            onSubmit={this.handleSubmit}
            ref={this.ContactPage}
          >
            <input
              type="hidden"
              name="bot-field"
              onChange={this.handleChange}
            />
            <input type="hidden" name="form-name" value="Contact" />
            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="first-name"
            >
              First Name
            </label>

            <input
              onChange={this.handleChange}
              className="w-full mb-6 form-input"
              id="first-name"
              placeholder="Crentist"
              type="text"
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="last-name"
            >
              Last Name
            </label>

            <input
              onChange={this.handleChange}
              className="w-full mb-6 form-input"
              id="last-name"
              placeholder="the Dentist"
              type="text"
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="email"
            >
              Email
            </label>

            <input
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
}

export default ContactPage;
