import React from 'react'
import { projects } from '../constants';
import ProjectCard from './cards/Card';
const Projects = () => {
  return (
    <div className="w-full h-max flex gap-5 h-max max-sm:flex-col md:flex-wrap  items-center justify-center">
    {projects.map((project, index) => {
      return <ProjectCard key={index} project={project} />;
    })}
  </div>
  )
}

export default Projects
