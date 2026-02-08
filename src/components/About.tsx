import {
    CircleStackIcon,
    CogIcon,
    WindowIcon,
} from "@heroicons/react/24/solid";

import render from "../assets/Render-logo.png";

import { useState } from "react";
import { Element } from "react-scroll";

export default function About() {
    const [activeSkill, setActiveSkill] = useState("front-end");

    function handleSkillClick(skill: string) {
        setActiveSkill(skill);
        console.log(`Active skill set: ${skill}`);
    }

    return (
        <Element
            name="about"
            className="bg-[#f8f9fa] 2xl:h-screen 2xl:py-0 pt-10 pb-20 flex flex-col items-center justify-center"
        >
            <div className="block border-b-2 border-gray-300 2xl:w-1/3 mb-5">
                <h3 className="text-4xl font-bold h-18 text-center">
                    About Me
                </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 mx-auto xl:mx-30 2xl:mx-52  mb-5 p-5 shadow-lg bg-[#fafafa] rounded-lg">
                <div className="p-3 space-y-6">
                    <p className="text-lg">
                        I’m a full-stack web developer with over 2 years of
                        experience, specializing in React and Express.js. I
                        enjoy building clean, responsive web applications and
                        turning ideas into reliable, user-friendly products.
                    </p>

                    <p className="text-lg">
                        I’ve worked as a Research and Development Engineer and
                        Web Developer, where I gained hands-on experience
                        building real-world applications, collaborating with
                        teams, and improving performance and scalability. My
                        primary toolkit is the MERN stack, which I use to create
                        efficient and maintainable web solutions.
                    </p>

                    <p className="text-lg">
                        I’m always learning, refining my skills, and excited to
                        take on new challenges that help me grow as a developer.
                    </p>

                    <h3 className="font-bold text-lg mt-5 mb-3">
                        Work Experience
                    </h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="font-bold">
                                Research and Development Engineer
                            </span>{" "}
                            at Advance World Solutions Inc. (Feb 2023 - Present)
                        </li>
                        <li>
                            <span className="font-bold">Web Developer</span> at
                            Visayas State University (Sept 2021 - June 2022)
                        </li>
                    </ul>

                    <h3 className="font-bold text-lg mt-5 mb-3">Academic</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="font-bold">
                                ZUITT Coding Bootcamp PH
                            </span>{" "}
                            (September 2022 - Jan - 2023)
                        </li>
                        <li>
                            <span className="font-bold">
                                Bachelor of Science in Computer Science
                            </span>{" "}
                            at Visayas State University (2021)
                        </li>
                    </ul>
                </div>

                {/* Skills */}
                <div className="text-center">
                    <h3 className="font-bold text-lg mb-3 text-center">
                        Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-4 bg-gray-700 p-4 items-center rounded-md">
                        {/* Skill buttons */}
                        <div className="col-span-2 flex justify-between items-center gap-2 lg:gap-4 flex-wrap">
                            <button
                                disabled={
                                    activeSkill == "front-end" ? true : false
                                }
                                className={`flex justify-center items-center rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-1 ${activeSkill == "front-end" ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-200 transition-colors duration-300"} ${
                                    activeSkill === "front-end"
                                        ? "bg-gray-400 text-white"
                                        : "bg-[#fafafa] "
                                }`}
                                onClick={() => handleSkillClick("front-end")}
                            >
                                <WindowIcon className="w-8 h-8" />
                                <span>FRONT-END</span>
                            </button>
                            <button
                                disabled={
                                    activeSkill == "back-end" ? true : false
                                }
                                className={`flex justify-center items-center rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-1 ${activeSkill == "back-end" ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-200 transition-colors duration-300"} ${
                                    activeSkill === "back-end"
                                        ? "bg-gray-400 text-white"
                                        : "bg-[#fafafa]"
                                }`}
                                onClick={() => handleSkillClick("back-end")}
                            >
                                <CircleStackIcon className="w-8 h-8" />
                                <span>BACKEND</span>
                            </button>
                            <button
                                disabled={activeSkill == "tools" ? true : false}
                                className={`flex justify-center items-center rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-2 ${activeSkill == "tools" ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-200 transition-colors duration-300"}  ${
                                    activeSkill === "tools"
                                        ? "bg-gray-400 text-white"
                                        : "bg-[#fafafa]"
                                }`}
                                onClick={() => handleSkillClick("tools")}
                            >
                                <CogIcon className="w-8 h-8" />
                                <span>TOOLS</span>
                            </button>
                        </div>

                        {/*skill content - front-end */}
                        <div
                            className={`bg-[#fafafa] xl:mx-5 2xl:mx-0 rounded grid grid-cols-3 col-span-2 gap-5 p-3 ${
                                activeSkill === "front-end" ? "block" : "hidden"
                            }`}
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                                alt="HTML5 Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                                alt="CSS3 Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                alt="JavaScript Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                alt="TypeScript Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                alt="React Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg"
                                alt="React Router Icon"
                                className="h-27 mx-auto"
                            />
                            <div className="col-span-3 flex justify-center items-center gap-5 h-27">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                    alt="Tailwind CSS Icon"
                                    className="h-27 mx-auto"
                                />

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
                                    alt="Bootstrap Icon"
                                    className="h-27 mx-auto"
                                />
                            </div>
                        </div>

                        {/*skill content - backend */}
                        <div
                            className={`bg-[#fafafa] xl:mx-5 2xl:mx-0 rounded grid grid-cols-2 col-span-2 gap-5 p-3 justify-center items-center ${
                                activeSkill === "back-end" ? "block" : "hidden"
                            }`}
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                                alt="MongoDB Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                                alt="PostgreSQL Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                                alt="Express Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                                alt="MySQL Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                                alt="Node.js Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                                alt="Java Icon"
                                className="h-27 mx-auto"
                            />
                        </div>

                        {/*skill content - tools */}
                        <div
                            className={`bg-[#fafafa] xl:mx-5 2xl:mx-0 rounded grid grid-cols-3 col-span-2 gap-5 p-3  ${
                                activeSkill === "tools" ? "block" : "hidden"
                            }`}
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
                                alt="Git Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                                alt="GitHub Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
                                alt="VSCode Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg"
                                alt="Postman Icon"
                                className="h-27 mx-auto"
                            />
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original-wordmark.svg"
                                alt="Eclipse Icon"
                                className="h-27 mx-auto"
                            />

                            <img
                                src={render}
                                alt="Render Logo"
                                className="h-27 mx-auto"
                            />
                            <div className="col-span-3 ">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
                                    alt="Vercel Icon"
                                    className="h-27 mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="h-16 mx-auto text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold">
                Let’s Talk
            </button>
        </Element>
    );
}
