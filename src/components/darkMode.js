import React, { useState } from "react";
import { Switch } from "@headlessui/react";
// import { FcIdea, FcNoIdea } from "react-icons/fc";
import { SiNintendoswitch } from "react-icons/si";
import { useDarkMode } from "../util/context/ThemeContext";

export default function DarkMode() {
  const theme = useDarkMode();
  const { darkMode } = theme.state;
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    return !darkMode
      ? theme.dispatch({ type: "DARK" })
      : theme.dispatch({ type: "LIGHT" });
  };

  return (
    <div className="fixed bottom-0 right-0 flex items-center justify-center mx-1 my-2 md:m-4">
      <Switch
        className={`${
          darkMode ? "bg-gray-700" : "bg-gray-500"
        } p-1 mx-2 rounded dark-mode-btn focus:outline-none`}
        type="button"
        // onClick={toggle}
        onChange={() => {
          setEnabled();
          toggle();
        }}
        checked={enabled}
      >
        {darkMode ? (
          <SiNintendoswitch className="w-10 h-10 p-2 text-red-500 bg-gray-700 md:w-14 md:h-14" />
        ) : (
          <SiNintendoswitch className="w-10 h-10 p-2 text-blue-800 bg-gray-500 md:w-14 md:h-14" />
        )}
      </Switch>
    </div>
  );
}
