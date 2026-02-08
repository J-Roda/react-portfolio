import { Element } from "react-scroll";

function Projects() {
    return (
        <Element
            name="projects"
            className="bg-white 2xl:h-screen 2xl:py-0 pt-10 pb-20 flex flex-col items-center justify-center"
        >
            <div className="block border-b-2 border-gray-300 2xl:w-2/3 mb-5">
                <h3 className="text-4xl font-bold h-18 text-center">
                    Projects
                </h3>
            </div>
        </Element>
    );
}

export default Projects;
