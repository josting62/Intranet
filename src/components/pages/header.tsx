// components/Header.tsx
import React from "react";// Ajusta la ruta según tu estructura
import UserMenu from "../userMenu"; // Ajusta la ruta según tu estructura
import hospital from "/assets/hospital.svg";
import moon from "/assets/moon.svg";
import sun from "/assets/sun.svg";

import useDarkMode from "../../hooks/useDarkMode";

const Header: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      <header className="bg-color body-font dark:bg-gray-900">
        <div className="container mx-auto flex flex-row p-5 items-center justify-between relative">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-10 h-10 dark:invert" src={hospital} alt="" />
            <span className="text-white ml-3 text-2xl">Intranet</span>
          </a>
          <div className="flex items-center space-x-2">
            <UserMenu />
            <button
              className="py-2 px-2 bg-white rounded-full hover:bg-gray-700 group hover:-translate-y-2 transform transition-all duration-150"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              <img
                className="w-8 h-8 group-hover:invert"
                src={theme === "dark" ? sun : moon}
                alt="Toggle Dark Mode"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="bg-red-500 dark:bg-indigo-400 h-4"></div>
    </>
  );
};

export default Header;
