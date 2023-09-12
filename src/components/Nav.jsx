import { useState, useEffect } from "react";
import {
  hamburguer,
  iconLogo,
  closeIcon,
  moonIcon,
  sunIcon,
  iconLogoWhite,
  closeIconWhite,
  hamburguerWhite,
} from "../assets/icons";
import { navLinks, subMenu } from "../constant";
import { BsTelephoneForward } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  //Toggle menu
  const [add, setAdd] = useState(false);

  //Theme Dark or Light
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  //Cambio de botón hamburguer según el theme
  const toggleHamburger = () => {
    if (add) {
      if (theme == "dark") {
        return closeIconWhite;
      }
      return closeIcon;
    } else {
      if (theme == "dark") {
        return hamburguerWhite;
      }
      return hamburguer;
    }
  };

  return (
    <header className="bg-slate-50 dark:text-slate-50 dark:bg-gray-900 dark:border-b dark:border-gray-600  px-2xl shadow-md fixed w-full z-50 py-md lg:py-sm font-medium">
      <nav className="flex justify-between items-center gap-sm">
        <a href="#" className="xl:mr-[4.2rem]">
          <img src={theme == "dark" ? iconLogoWhite : iconLogo} alt="Logo" />
        </a>
        <ul
          className={`flex max-lg:px-2xl max-lg:dark:bg-gray-800 max-lg:py-md max-lg:text-sm max-lg:grid max-md:grid-cols-2 max-lg:grid-cols-4 max-lg:bg-secondary max-lg:text-slate-50 gap-sm xl:gap-lg xl:mr-auto max-lg:absolute max-lg:top-full left-[0] right-[0]  transition-all duration-300 ease-in-out ${
            add
              ? "max-lg:translate-x-[0%] max-lg:opacity-100"
              : "max-lg:translate-x-full"
          }`}
        >
          {subMenu.map((label) => (
            <li
              key={label.label}
              className="whitespace-nowrap group cursor-pointer relative lg:px-[1rem] py-[.25rem] lg:flex items-center lg:hover:bg-gray-light dark:hover:bg-gray-800 duration-300 ease-in-out rounded-t-lg gap-[8px]"
            >
              <span className="max-lg:uppercase">{label.label} </span>
              <span className="max-lg:hidden">
                <FaChevronDown className="w-[12px] h-[12px] group-hover:rotate-180 transition duration-300 ease-in-out"></FaChevronDown>
              </span>
              <ul className="opacity-0 dark:bg-gray-800 py-[0.25rem] group-hover:visible group-hover:opacity-100 group-hover:transition-all duration-300 ease-in-out max-lg:visible max-lg:opacity-100  invisible lg:scale-95 lg:group-hover:scale-100 lg:translate-y-[-10%] group-hover:translate-y-[0] lg:absolute left-[0] flex flex-col gap-[.25rem] lg:bg-gray-light lg:px-[0.5rem] pb-[.25rem] top-full rounded-tr-lg rounded-b-lg">
                {label.aboutUs.map((item) => (
                  <li key={item.subLabel} className=" mb-[.25rem]">
                    <a
                      className="lg:whitespace-nowrap py-[.25rem] lg:px-[0.5rem] inline-block  rounded-full hover:bg-secondary dark:hover:bg-slate-50 dark:hover:text-secondary hover:text-slate-50 transition duration-300"
                      href="#"
                    >
                      {item.subLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <button onClick={() => setAdd(!add)} className="lg:hidden ml-auto">
          <img
            width={42}
            height={42}
            src={toggleHamburger()}
            alt="hamburguer-menu"
          />
        </button>
        <div className="max-lg:hidden">
          <span className="flex items-center gap-sm whitespace-nowrap">
            <BsTelephoneForward></BsTelephoneForward> (415) 319-9099
          </span>
        </div>
        <span className="flex items-center">
          |{" "}
          <img
            onClick={toggleTheme}
            className="ml-sm cursor-pointer"
            width={24}
            height={24}
            src={theme == "dark" ? moonIcon : sunIcon}
            alt="Theme"
          />
        </span>
      </nav>
    </header>
  );
};

export default Nav;
