import {
  BriefcaseIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/update-color.png";
import { useEffect, useState } from "react";
import { classNames } from "../lib/utils.ts";
import { animateScroll, Link } from "react-scroll";

export default function Header() {
  const [navigation, setNavigation] = useState([
    {
      name: "Home",
      icon: <HomeIcon className="block size-8" />,
      href: "home",
      current: true,
    },
    {
      name: "About Me",
      icon: <UserIcon className="block size-8" />,
      href: "about",
      current: false,
    },
    {
      name: "Projects",
      icon: <BriefcaseIcon className="block size-8" />,
      href: "projects",
      current: false,
    },
    {
      name: "Contact",
      icon: <PhoneIcon className="block size-8" />,
      href: "contact",
      current: false,
    },
  ]);

  return (
    <header
      className={`${navigation.map((item) =>
        classNames(item.current ? "bg-transparent" : "bg-gray-800 text-white")
      )} fixed md:h-16 z-1 left-3 bottom-3 rounded-2xl md:rounded-none md:w-full md:top-0 flex items-center justify-center md:px-4 lg:px-8 lg:shadow-md`}
    >
      {/* Mobile button*/}
      <button
        className={`p-2 md:hidden rounded-3xl ${
          navigation[0].current ? "hidden" : ""
        }`}
        onClick={() =>
          animateScroll.scrollToTop({ duration: 700, smooth: true })
        }
      >
        <ChevronDoubleUpIcon className="inline-block size-8 animate-bounce" />
      </button>

      {/* Desktop menu button*/}
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
              duration={700}
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
