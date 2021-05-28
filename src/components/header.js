import React, { useState } from "react";
import { Link } from "gatsby";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ImCross, ImMenu } from "react-icons/im";
import logo from "../assets/images/jcc-logo.png";
import { useDarkMode } from "../util/context/ThemeContext";

function Header() {
  const { darkMode } = useDarkMode().state;
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 z-50 w-full text-white p-2 ${
        darkMode ? `bg-gray-700` : `bg-gray-500`
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-5xl px-2 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-between flex-1 w-full sm:items-stretch">
                <div className="flex items-center flex-shrink-0">
                  <Link to="/">
                    <img
                      alt="JCCDev Logo"
                      src={logo}
                      className="object-contain mx-1 h-14 focus:outline-none"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex items-center justify-between h-full m-auto">
                    {[
                      {
                        route: `#projects`,
                        title: `Projects`,
                      },
                      {
                        route: `#contact`,
                        title: `Contact`,
                      },
                    ].map((item) => (
                      <a
                        key={item.title}
                        href={item.route}
                        className={`${
                          item.title === "Projects" ? "mx-8" : ""
                        } block h-full text-xl tracking-wider no-underline uppercase hover:underline md:inline-flex md:items-center`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ImCross className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <ImMenu className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  {
                    route: `#projects`,
                    title: `Projects`,
                  },
                  {
                    route: `#contact`,
                    title: `Contact`,
                  },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.route}
                    className="block p-2 my-2 mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
    // 	<header
    // 		className={`fixed top-0 z-50 w-full text-white ${
    // 			darkMode ? `bg-gray-700` : `bg-gray-500`
    // 		}`}
    // 	>
    // 		<div className="flex flex-wrap items-center justify-between max-w-4xl p-3 mx-auto">
    // 			<Link to="/" onClick={() => toggleExpansion(false)}>
    // 				<img
    // 					alt="JCCDev Logo"
    // 					src={logo}
    // 					className="object-contain h-12 mx-1 focus:outline-none"
    // 				/>
    // 			</Link>

    // 			<button
    // 				className="flex items-center px-3 py-2 border border-white rounded focus:outline-none md:hidden"
    // 				onClick={() => toggleExpansion(!isExpanded)}
    // 			>
    // 				<svg
    // 					className="w-3 h-3 fill-current"
    // 					viewBox="0 0 20 20"
    // 					xmlns="http://www.w3.org/2000/svg"
    // 				>
    // 					<title>Menu</title>
    // 					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    // 				</svg>
    // 			</button>

    // 			<nav
    // 				className={`${
    // 					isExpanded ? `block` : `hidden`
    // 				} md:flex md:items-center w-full md:w-auto`}
    // 			>
    // 				{[
    // 					{
    // 						route: `#projects`,
    // 						title: `Projects`,
    // 					},
    // 					{
    // 						route: `#contact`,
    // 						title: `Contact`,
    // 					},
    // 				].map((link) => (
    // 					<a
    // 						className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
    // 						key={link.title}
    // 						href={link.route}
    // 						onClick={() => toggleExpansion(!isExpanded)}
    // 					>
    // 						{link.title}
    // 					</a>
    // 				))}
    // 			</nav>
    // 		</div>
    // 	</header>
  );
}

export default Header;
