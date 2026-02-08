import {
    CircleStackIcon,
    CogIcon,
    WindowIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Element } from "react-scroll";
import skillsData from "../data/skills.json";
import Skills from "./Skills";
import IconImage from "./ImageLogo";
import SkillContainer from "./SkillContainer";

export type ActiveSkillType = "frontend" | "backend" | "tools";

const gridColsFrontend = 3;
const gridColsBackend = 2;
const gridColsTools = 3;
export default function About() {
    const [activeSkill, setActiveSkill] = useState<ActiveSkillType>("frontend");

    function handleSkillClick(skill: ActiveSkillType) {
        setActiveSkill(skill);
    }

    return (
        <Element
            name="about"
            className="bg-[#f8f9fa] 2xl:h-screen 2xl:py-0 pt-10 pb-20 flex flex-col items-center justify-center"
        >
            <div className="block border-b-2 border-gray-300 2xl:w-2/3 mb-5">
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
                                    activeSkill == "frontend" ? true : false
                                }
                                className={`flex justify-center items-center rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-1 ${activeSkill == "frontend" ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-200 transition-colors duration-300"} ${
                                    activeSkill === "frontend"
                                        ? "bg-gray-400 text-white"
                                        : "bg-[#fafafa] "
                                }`}
                                onClick={() => handleSkillClick("frontend")}
                            >
                                <WindowIcon className="w-8 h-8" />
                                <span>FRONTEND</span>
                            </button>
                            <button
                                disabled={
                                    activeSkill == "backend" ? true : false
                                }
                                className={`flex justify-center items-center rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-1 ${activeSkill == "backend" ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-200 transition-colors duration-300"} ${
                                    activeSkill === "backend"
                                        ? "bg-gray-400 text-white"
                                        : "bg-[#fafafa]"
                                }`}
                                onClick={() => handleSkillClick("backend")}
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

                        {/*skill content - frontend */}
                        <SkillContainer
                            isHidden={activeSkill === "frontend" ? true : false}
                            gridCols={gridColsFrontend}
                        >
                            <Skills
                                skills={skillsData.frontend}
                                gridCols={gridColsFrontend}
                            />
                            <div className="col-span-3 flex justify-center items-center gap-5 h-16 xl:h-27">
                                <IconImage
                                    name={skillsData.frontend.at(-2)!.name}
                                    src={skillsData.frontend.at(-2)!.src}
                                />

                                <IconImage
                                    name={skillsData.frontend.at(-1)!.name}
                                    src={skillsData.frontend.at(-1)!.src}
                                />
                            </div>
                        </SkillContainer>

                        {/*skill content - backend */}
                        <SkillContainer
                            isHidden={activeSkill === "backend" ? true : false}
                            gridCols={gridColsFrontend}
                        >
                            <Skills
                                skills={skillsData.backend}
                                gridCols={gridColsBackend}
                            />
                        </SkillContainer>

                        {/*skill content - tools */}
                        <SkillContainer
                            isHidden={activeSkill === "tools" ? true : false}
                            gridCols={gridColsFrontend}
                        >
                            <Skills
                                skills={skillsData.tools}
                                gridCols={gridColsTools}
                            />
                            <div className="col-span-3 flex justify-center items-center gap-5 h-16 xl:h-27">
                                <IconImage
                                    name={skillsData.tools.at(-1)!.name}
                                    src={skillsData.tools.at(-1)!.src}
                                />
                            </div>
                        </SkillContainer>
                    </div>
                </div>
            </div>

            <button className="h-12  w-48 mx-auto text-center bg-blue-500 text-white rounded font-bold cursor-pointer hover:bg-blue-600 ">
                Let’s Talk
            </button>
        </Element>
    );
}
