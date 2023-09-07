import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = (project) => {
  const prj = { ...project };

  return (
    <div className="h-fit w-fit max-sm:w-full md:w-64 lg:w-1/4 border  border-secondary text-secondary rounded-lg p-3 flex flex-col justify-center items-center hover:border-2 hover:border-white transition-transform  ">
      <div className="flex flex-col items-center justify-center">
        <img className="object-contain md:w-60 md:h-44 lg:w-64 lg:h-48 my-2" src={prj.project.imageURL} alt={prj.project.title} />
        <h3 className="text-xl max-sm:text-lg font-bold underline underline-offset-4 text-center py-3">
          {prj.project.name}
        </h3>
        <p className="lg:h-34 md:h-32 md:w-56 text-dimBlue text-justify">{prj.project.description}</p>
        <div
          className={`w-full flex flex-wrap py-1 gap-2 justify-center items-center font-bold h-max p-1`}
        >
          {prj.project.tech.map((element, index) => {
            return (
              <div
                className={
                  `py-1 px-2 box-border rounded border bg-secondary text-primary w-full hover:bg-primary hover:text-secondary hover:cursor-pointer ` +
                  `md: w-max grid grid-cols-${prj.project.tech.length}`
                }
                key={index}
              >
                <span className="w-max h-max  text-center">
                  {element.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-5/6 py-3 flex justify-between">
          <a href={prj.project.projectSrc} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub}  className="h-6 w-6 hover:text-green-500 transition-transform hover:-translate-y-1"/>
          </a>
          <a href={prj.project.projectURL} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-6 w-6 hover:text-green-400 transition-transform hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
