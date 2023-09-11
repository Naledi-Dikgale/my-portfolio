import { useState } from "react";
import { projects } from "../constants";
import ProjectCard from "./cards/ProjectCard";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
Modal.setAppElement("#root")

const Projects = () => {
  let [open, setOpen] = useState(false);
  let [card, setCard] = useState(null);
  const handleClick = (crd) => {
    setCard(crd);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const responsive = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      820: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  }

  return (
    <div className="w-full h-full">
      <h2 className="text-4xl font-bold text-center underline underline-offset-4 my-5">
        Projects
      </h2><div className="w-full h-max flex gap-5 flex-wrap  items-center justify-center">
      <Swiper
        id="projects"
        className="w-full p-6 h-fit flex justify-center items-center"
        modules={[Navigation, EffectCoverflow, Pagination]}
        navigation
        loop={true}
        centerInsufficientSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        effect={'coverflow'}
        breakpoints={responsive.breakpoints}
      >

          {projects.map((project, index) => {
            return (
              <SwiperSlide
                onClick={() => handleClick(<ProjectCard project={project} />)}
                key={index}
                className="h-max w-max flex items-center justify-center border-slate-200 "
              >
                {" "}
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })}
      </Swiper>
        </div>

 <Modal
        isOpen={open}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="w-fit bg-primary rounded-xl p-4 relative">
          <div className="w-full flex justify-end items-end">
            <FontAwesomeIcon
              icon={faClose}
              onClick={handleClose}
              className="text-secondary h-6 w-6 mb-1"
            />
          </div>
          {card}
        </div>
      </Modal>
    </div>
  );
};

export default Projects;
