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
      className="bg-[#f8f9fa] 2xl:h-screen 2xl:py-0 pt-10 pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="block border-b-2 border-gray-300 2xl:w-1/3 mb-5">
        <h3 className="text-4xl font-bold h-18 text-center  hidden-t">
          About Me
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mx-auto xl:mx-30 2xl:mx-52  mb-5 p-5 shadow-lg bg-[#fafafa] rounded-lg ">
        <div className="p-3 hidden-l">
          <h3 className="font-bold text-lg mb-3">Career Objectives</h3>
          <p className="text-lg">
            Passionate web developer with more than 2 years of experience in
            full-stack development. Adept at building scalable, user-centric
            applications while optimizing performance and delivering
            high-quality solutions on time.
          </p>
          <h3 className="font-bold text-lg mt-5 mb-3">Academic</h3>
          <p className="text-lg">
            I graduated with a Bachelor of Science in Computer Science from
            Visayas State University in September 2021. Over the past two years,
            I have honed my skills in programming languages such as Java and
            JavaScript. I am proficient in using MySQL databases and GIT version
            control systems. Having graduated from the Zuitt Bootcamp PH, I
            specialize in the MERN stack (MongoDB, Express.js, React.js,
            Node.js), which I consider my primary toolset for web development.
          </p>
          <h3 className="font-bold text-lg mt-5 mb-3">Work Experience</h3>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">
                Research and Development Engineer
              </span>{" "}
              at Advance World Solutions Inc. (Feb 2023 - Present)
            </li>
            <li>
              <span className="font-bold">IT Staff</span> at Visayas State
              University (Feb 2022 - June 2022)
            </li>
            <li>
              <span className="font-bold">Web Developer</span> at Visayas State
              University (Sept 2021 - Dec 2021)
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="text-center hidden-r">
          <h3 className="font-bold text-lg mb-3 text-center">Skills</h3>
          <div className="grid grid-cols-2 gap-4 bg-gray-700 p-4 items-center rounded-md">
            {/* Skill buttons */}
            <div className="col-span-2 flex justify-between items-center gap-2 lg:gap-4 flex-wrap">
              <button
                className={`flex justify-center items-center transition-colors duration-300 rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-1 ${
                  activeSkill === "front-end"
                    ? "bg-gray-400 text-white"
                    : "bg-[#fafafa] cursor-pointer hover:bg-gray-200 "
                }`}
                onClick={() => handleSkillClick("front-end")}
                disabled={activeSkill === "front-end"}
              >
                <WindowIcon className="w-8 h-8" />
                <span>FRONT-END</span>
              </button>
              <button
                className={`flex justify-center items-center text-gray-600 transition-colors duration-300 rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-1 ${
                  activeSkill === "back-end"
                    ? "bg-gray-400 text-white"
                    : "bg-[#fafafa]  cursor-pointer hover:bg-gray-200 "
                }`}
                onClick={() => handleSkillClick("back-end")}
                disabled={activeSkill === "back-end"}
              >
                <CircleStackIcon className="w-8 h-8" />
                <span>BACKEND</span>
              </button>
              <button
                className={`flex justify-center items-center text-gray-600  transition-colors duration-300 rounded-lg h-12 lg:w-40 mx-auto p-3 col-span-2 ${
                  activeSkill === "tools"
                    ? "bg-gray-400 text-white"
                    : "bg-[#fafafa] cursor-pointer hover:bg-gray-200 "
                }`}
                onClick={() => handleSkillClick("tools")}
                disabled={activeSkill === "tools"}
              >
                <CogIcon className="w-8 h-8" />
                <span>TOOLS</span>
              </button>
            </div>

            {/*skill content - front-end */}
            <div
              className={`bg-[#fafafa] xl:mx-5 2xl:mx-0 rounded grid grid-cols-3 col-span-2 gap-5 p-3 hidden-skill ${
                activeSkill === "front-end" ? "" : "hidden"
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
              <div className="col-span-3 grid grid-cols-3 justify-center items-center gap-5">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS Icon"
                  className="lg:h-27 mx-auto"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
                  alt="Bootstrap Icon"
                  className="lg:h-27 mx-auto"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  alt="Bootstrap Icon"
                  className="lg:h-27 mx-auto"
                />
              </div>
            </div>

            {/*skill content - backend */}
            <div
              className={`bg-[#fafafa] xl:mx-5 2xl:mx-0 rounded grid grid-cols-2 col-span-2 gap-5 p-3 justify-center items-center hidden-skill ${
                activeSkill === "back-end" ? "" : "hidden "
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
              className={`bg-[#fafafa] xl:mx-5 2xl:mx-0 rounded grid grid-cols-3 col-span-2 gap-5 p-3 hidden-skill overflow-hidden ${
                activeSkill === "tools" ? "" : "hidden"
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

              <img src={render} alt="Render Logo" className="h-27 mx-auto" />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
                alt="Vercel Icon"
                className="h-27 mx-auto col-span-3"
              />
            </div>
          </div>
        </div>
      </div>

      <button className="h-16 mx-auto text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
        Hire Me!
      </button>
    </Element>
  );
}
