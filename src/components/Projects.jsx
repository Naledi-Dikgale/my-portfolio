import React from 'react'
import { projects } from '../constants';
import ProjectCard from './cards/Card';
const Projects = () => {
  return (
    <div id="projects" className="w-full p-6 h-fit flex flex-col justify-center items-center">
    <h2 className="text-4xl font-bold text-center underline underline-offset-4 my-5">Projects</h2>
      <div className="w-full h-max flex gap-5 h-max flex-wrap  items-center justify-center">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  </div>
  )
}

export default Projects
