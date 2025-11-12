import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

import logo from "../assets/update-color.png";
import { useState } from "react";
import { animateScroll, Link } from "react-scroll";
import { NAVIGATION } from "../lib/constants.ts";

export default function Header() {
  const [navigation, setNavigation] = useState(NAVIGATION);

  return (
    <header
      className={`${
        navigation[0].current
          ? "bg-[rgba(0, 0, 0, 0.12)] text-gray-100"
          : "bg-[rgba(0, 0, 0, 0.5)]"
      } shadow[0 4px 30px rgba(0, 0, 0, 0.1)] backdrop-blur-sm fixed md:h-16 z-1 left-3 bottom-3 rounded-2xl md:rounded-none md:w-full md:left-0  md:top-0 flex items-center justify-center md:px-4 lg:px-8 lg:shadow-md`}
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
        <div className="flex gap-4">
          {navigation.map((item) => (
            <Link
              to={item.href}
              spy={true}
              smooth={true}
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
