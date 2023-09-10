import { useState } from 'react'
import { projects } from '../constants';
import ProjectCard from './cards/ProjectCard';
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
  let [open, setOpen] = useState(false)
  let [close, setClose] = useState(false)
  let [card, setCard] = useState(null)
  const handleClick = (crd) => {
    setCard(crd)
    setOpen(true)
    setClose(false)
  }
  const handleClose = ()=>{
    setClose(true);
    setOpen(false)
    return true
  }
  return (
    <div id="projects" className="w-full p-6 h-fit flex flex-col justify-center items-center">
    <h2 className="text-4xl font-bold text-center underline underline-offset-4 my-5">Projects</h2>
      <div className="w-full h-max flex gap-5 h-max flex-wrap  items-center justify-center">
      {projects.map((project, index) => {
          return <div onClick={() => handleClick( <ProjectCard project={project} />)} key={index} className="h-max w-max flex items-center justify-center border-slate-200"> <ProjectCard project={project} /></div>;
        })}
    </div>
    <Modal
       isOpen = {open}
       onRequestClose={close}
         shouldCloseOnOverlayClick={true}
       className="w-full flex flex-col items-center justify-center"
       >
      <div className="w-fit bg-primary rounded-xl p-4 relative">
        <div className="w-full flex justify-end items-end absolute top-8 right-8">
          <FontAwesomeIcon icon={faClose} onClick={handleClose} className="text-secondary h-6 w-6 mb-1" />
        </div>
        {
          card
        }
      </div>
    </Modal>
  </div>
  )
}

export default Projects
