import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
//import { VscDebugBreakpointFunction } from "react-icons/vsc";
import { Link } from "react-scroll";
import { images } from "../constants";

//darkmode icons

const Icons = [
  {
    icon: "sunny",
    text: "light",
  },

  {
    icon: "moon",
    text: "dark",
  },

  {
    icon: "desktop",
    text: "system",
  },
];

//Nav components
const Options = [
  { name: "Home", type: "link", to: "/Hero" },
  { name: "About", type: "link", to: "/Articles" },
  { name: "Projects", type: "link", to: "/Projects" },
  { name: "Contact", type: "link", to: "/Contacts" },
  { name: "Services", type: "link", to: "/Services" },
];
//Navigation Visibility
const NavOptions = ({ item }) => {
  return (
    <ul className="hidden pt-4 transition-all duration-300 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max">
      <li className="relative group items-center justify-center">
        <a href={item.to} className="px-3 py-2 cursor-pointer">
          {item.name}
        </a>
        {item.type === "Link" ? (
          <span className="bg-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        ) : (
          <li>
            <a href={item.to} className="px-3 py-2 cursor-pointer">
              {item.name}
            </a>
          </li>
        )}
      </li>
    </ul>
  );
};

// Define PropTypes for navOptions component
NavOptions.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired, // Add URL to PropTypes
  }).isRequired,
};

const Header = () => {
  //Nav functionality
  const [NavIsVisible, setVisibility] = useState(false);
  const navVisibleHandler = () => {
    setVisibility((currstate) => {
      return !currstate;
    });
  };
  //Close side MENU onclick of option
  const closeMenu = () => setVisibility(false);

  //Darkmode Functionality
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  //eventListner Functionality
  const ele = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      ele.classList.add("dark");
    } else {
      ele.classList.remove("dark");
    }
  };
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        ele.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        ele.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        ele.classList.add("dark");
      } else {
        ele.classList.remove("dark");
      }
    }
  });

  return (
    <section className=" dark:bg-slate-900 dark:text-gray-100 duration-100">
      <header className="mx-auto px-1 flex justify-between py-3">
        <div>
          <img
            src={images.Logo}
            alt="Logo"
            className="mt-3 w-25 h-20 rounded-lg"
          />
        </div>
        <div className="lg:hidden z-50 mr-5 mt-2" onClick={navVisibleHandler}>
          {NavIsVisible ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </div>
        <div
          onClick={closeMenu}
          className={`${
            NavIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0  bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-2 items-center`}
        >
          <ul className="dark:bg-slate-900 dark:text-gray-100 duration-100 text-white lg:text-dark-soft items-center gap-y-3 flex flex-col lg:flex-row gap-x-3 font-semibold">
            {Options.map((item, index) => (
              <li key={index} className="justify-between cursor-pointer">
                <Link
                  to={item.to}
                  onClick={closeMenu}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <NavOptions item={item} />
                </Link>
              </li>
            ))}
          </ul>
          {/*Darkmode button*/}

          {Icons?.map((opt) => (
            <button
              onClick={() => setTheme(opt.text)}
              key={opt.text}
              className={`w-6 h-6 md:w-7 md:h-7 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 ${
                theme === opt.text && "text-white"
              } `}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </header>
    </section>
  );
};

export default Header;
