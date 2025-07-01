import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { Element, Link } from "react-scroll";

export default function Home() {
  return (
    <Element
      name="home"
      className="h-full text-white parallax flex flex-col items-center justify-center px-3"
    >
      <h1 className="text-3xl lg:text-7xl mb-4">
        Hi I am <span className="color-change font-bold">Jayson</span>
        <span className="emoji inline-block">🤗</span>
      </h1>
      <h3 className="text-xl lg:text-3xl text-center">
        I am a Full Stack Web{" "}
        <span className="animate-spin inline-block">🌏</span> Developer based in
        the Philippines.💻
      </h3>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={100}
        className="flex flex-col items-center mt-8 hover:scale-105 transition-transform duration-300"
      >
        <span className="text-xl lg:text-2xl">Learn more about me</span>
        <ChevronDoubleDownIcon className="animate-bounce mt-5 w-10 h-10" />
      </Link>
    </Element>
  );
}
