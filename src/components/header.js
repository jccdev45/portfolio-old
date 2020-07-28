import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from "../assets/images/jcc-logo.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="fixed top-0 z-50 w-full text-white bg-teal-500">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-3 mx-auto">
        <AniLink
          to="/"
          cover
          bg="rgb(56, 178, 172)"
          duration={0.75}
          className="flex"
        >
          <img
            alt="JCCDev Logo"
            src={logo}
            className="object-contain h-12 mx-1"
          />
          <h1 className="flex items-center no-underline">
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </AniLink>

        <button
          className="flex items-center px-3 py-2 border border-white rounded md:hidden"
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
              route: `/projects`,
              title: `Projects`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <AniLink
              cover
              bg="rgb(56, 178, 172)"
              duration={0.75}
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </AniLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
