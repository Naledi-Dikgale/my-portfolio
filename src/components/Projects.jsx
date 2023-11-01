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


const Projects = () => {
  let [open, setOpen] = useState(false);
  let [card, setCard] = useState(null);

  const handleClick = (crd) => {
    setCard(crd);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    return true;
  };

  const responsive = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
  };
  return (
    <div className="w-full h-full z-0 shadow-[0_60px_50px_-40px_rgba(0,128,128,0.3)] ">

      <div className="w-full h-full">
        <h2 className="text-4xl font-bold text-center text-pink-700 underline-offset-4 my-5 font-agbalumo ">
              My Work
        </h2>
            <div className="w-full h-max flex gap-5 flex-wrap  items-center justify-center">
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
                effect={"coverflow"}
                breakpoints={responsive.breakpoints}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide
                      onClick={() => handleClick(project)}
                      key={index}
                      className="h-max w-max flex items-center justify-center border-slate-200 "
                    >
                      <ProjectCard project={project} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        contentElement={() => (
          <div className="bg-slate-200 bg-opacity-25 text-secondary w-full h-full flex flex-col items-center justify-center border-primary">
            <div className="w-1/2 h-fit bg-primary p-5 rounded-xl">
              <div className="w-full flex justify-end items-end">
                <FontAwesomeIcon
                  icon={faClose}
                  onClick={handleClose}
                  className="text-secondary h-6 w-6 mb-1"
                />
              </div>
              <img
                src={card.imageURL}
                alt={card.name}
                className="w-full object-contain p-4"
              />
              <span className="">{card.name}</span>
              <p>{card.description}</p>
              <div className="w-full flex max-sm:grid max-sm:grid-cols-2 gap-3 mt-5">
                {card.tech.map((element, index) => {
                  return (
                    <div
                      className=
                        "py-1 px-2 box-border rounded border bg-secondary text-primary w-full hover:bg-primary hover:text-secondary hover:cursor-pointer flex items-center justify-center"
                      key={index}
                    >
                      <span className="w-max h-max  text-center">
                        {element.toUpperCase()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Projects;