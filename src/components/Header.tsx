import {
  BriefcaseIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/update-color.png";
import { useState } from "react";
import { classNames } from "../lib/utils.ts";
import { Link } from "react-scroll";

export default function Header() {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "home", current: true },
    { name: "About Me", href: "about", current: false },
    { name: "Projects", href: "projects", current: false },
    { name: "Contact", href: "contact", current: false },
  ]);

  return (
    <header
      className={`${navigation.map((item) =>
        classNames(item.current ? "bg-transparent" : "bg-gray-800 text-white")
      )} fixed h-16 z-1 bottom-0 w-screen md:top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 shadow-md`}
    >
      <div className="absolute flex items-center justify-between md:hidden w-sm">
        {/* Mobile menu button*/}
        <a href="#home">
          <HomeIcon className="block size-8 text-amber-50" />
        </a>
        <a href="#roles">
          <UserIcon className="block size-8 text-amber-50" />
        </a>
        <a href="#about">
          {/* Logo */}
          <img
            alt="Your Company"
            src={logo}
            className="size-15 bg-gray-700 w-auto rounded-sm p-1 hover:bg-gray-600 transition-colors duration-300"
          />
        </a>
        <a href="#projects">
          <BriefcaseIcon className="block size-8 text-amber-50" />
        </a>
        <a href="#contact">
          <PhoneIcon className="block size-8 text-amber-50" />
        </a>
      </div>
      <div className="mx-auto md:ml-0 md:mr-auto md:block hidden">
        <a href="#home" className="flex items-center color-change">
          {/* Logo */}
          <img alt="Your Company" src={logo} className="h-8 w-auto" />
        </a>
      </div>
      <div className="hidden md:ml-6 md:block">
        <div className="flex lg:space-x-4">
          {navigation.map((item) => (
            <Link
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
              activeClass="text-white bg-[rgba(108,117,125,0.5)]"
              className="nav-link cursor-pointer"
              onSetActive={(name) => {
                setNavigation((prev) =>
                  prev.map((i) => ({ ...i, current: i.href === name }))
                );
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
