import {
    BriefcaseIcon,
    ChevronDoubleUpIcon,
    HomeIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/update-color.png";
import { useState } from "react";
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
                classNames(
                    item.current ? "bg-transparent" : "bg-gray-800 text-white",
                ),
            )} fixed flex items-center justify-center z-1 left-3 bottom-3 rounded-2xl  lg:h-16 lg:left-0 lg:bottom-0 lg:rounded-none lg:w-full lg:top-0 lg:px-4 lg:shadow-md 2xl:h-20 2xl:px-8 `}
        >
            {/* Mobile button*/}
            <button
                className={`p-2 lg:hidden rounded-3xl ${
                    navigation[0].current ? "hidden" : ""
                }`}
                onClick={() =>
                    animateScroll.scrollToTop({ duration: 700, smooth: true })
                }
            >
                <ChevronDoubleUpIcon className="inline-block size-8 animate-bounce" />
            </button>

            {/* Desktop menu button*/}
            <div className="mx-auto lg:ml-0 lg:mr-auto lg:block hidden">
                <a href="#home" className="flex items-center color-change">
                    {/* Logo */}
                    <img alt="Your Company" src={logo} className="h-8 w-auto" />
                </a>
            </div>
            <div className="hidden lg:ml-6 lg:block">
                <div className="flex lg:space-x-4">
                    {navigation.map((item) => (
                        <Link
                            key={`${item.name}-${item.href}`}
                            to={item.href}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            activeClass="text-white bg-[rgba(108,117,125,0.5)]"
                            className="nav-link cursor-pointer"
                            onSetActive={(name) => {
                                setNavigation((prev) =>
                                    prev.map((i) => ({
                                        ...i,
                                        current: i.href === name,
                                    })),
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
