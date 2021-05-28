import React from "react";

import skills from "../assets/data/skillList";

import gatsby from "../assets/images/gatsby.png";
import rails from "../assets/images/rails.png";
import tailwind from "../assets/images/tailwind.png";
import express from "../assets/images/express.png";
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
      } else if (item.skill === "Express") {
        Icon = express;
      } else {
        Icon = item.icon;
      }

      return (
        <div
          key={item.skill}
          className={`${
            darkMode ? "border-gray-400" : "border-gray-200"
          } flex flex-col items-center border-2 h-full hover:bg-white hover:bg-opacity-50 hover:shadow-md transition-all duration-200 ease-in-out shadow px-4 md:my-3 text-lg rounded md:flex-row md:justify-between`}
        >
          {Icon === item.icon ? (
            <Icon
              className="h-auto text-4xl text-center w-14"
              style={{ color: `${item.color}` }}
            />
          ) : (
            <img
              src={Icon}
              alt={item.skill}
              className={`${
                item.skill === "Express" ? "w-16 h-12 md:w-20" : "w-14"
              } text-center rounded-full`}
            />
          )}
          <span className="tracking-wider md:text-xl">{item.skill}</span>
        </div>
      );
    });
  };

  return (
    <section
      className={`${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
      } flex flex-col bg-opacity-90 justify-center order-last py-10 px-6 my-20 rounded lg:justify-center`}
    >
      <h1 className="w-3/4 pl-4 text-2xl uppercase border-b-4 border-red-300">
        <span className="text-4xl text-red-400">S</span>
        <span>killset</span>
      </h1>
      <div className="grid grid-cols-2 gap-1 border-b-4 border-red-400 md:gap-2 md:grid-cols-3 md:mt-6 md:p-4 md:flex-row md:border-r-4">
        {skillMap()}
      </div>
    </section>
  );
}

export default Skillset;
