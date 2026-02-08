import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";

export default function Home() {
    const [offset, setOffset] = useState(-70);

    useEffect(() => {
        const handleResize = () => {
            setOffset((prev) => (window.innerWidth >= 768 ? prev : 0));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Element
            name="home"
            className="h-full text-white parallax flex flex-col items-center justify-center p-5 md:p-0"
        >
            <h1 className="text-4xl lg:text-8xl mb-4">
                Hi I am <span className="color-change font-bold">Jayson</span>
                <span className="emoji inline-block">🤗</span>
            </h1>
            <h3 className="px-5 text-xl lg:text-2xl text-center 2xl:px-0">
                A full-stack web developer buildin g responsive and
                user-friendly web apps from the Philippines. 💻
            </h3>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={offset}
                duration={700}
                className="group flex flex-col items-center mt-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
                <span className="text-xl group-hover:border-b-2">
                    Learn more about me
                </span>
                <ChevronDoubleDownIcon className="animate-bounce mt-5 w-10 h-10" />
            </Link>
        </Element>
    );
}
