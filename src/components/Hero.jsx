import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
// import backgroundImage from '/images/universe.png';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Software Engineer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 50,
    loop: true,
  });

  return () => {
    typed.destroy();
  };
}, []);

  return (
    <div className="w-11/12 h-5/6 p-5 mb-8 flex-col items-start justify-start flex border-secondary shadow-[0_60px_50px_-40px_rgba(0,128,128,0.3)] ">
      <div className="w-2/3 max-sm:w-full  text-pink-700 md:w-full lg:w-2/3 p-5 flex flex-col items-center grow font-agbalumo">
        <div className="h-fit w-full mt-16">
          <p className="text-4xl md:text-4xl font-bold max-sm:text-3xl w-fit">
              Hi! my name is Naledi Dikgale,
              I am a <br /> <span ref={el} />
          </p>
        </div>
        <p className="w-full py-5 text-xl  text-justify text-neutral-50 grow font-texturina ">
            I can help you build a product, feature or website. Look through some
            of my work and experience! If you like what you see and have a project
            you need coded, don&apos;t hesitate to contact me.
        </p>
      </div>
      <button className=" transition-all my-3  w-full h-16 text-neutral-50 bg-secondary  hover:bg-pink-700 hover:text-neutral-50 font-lobster text-2xl">
        <a
          href="./images/Naledi's Resume (1).pdf"
          download="Naledi_resume.pdf"
          target="blank"
        >
          Get my resume
        </a>
      </button>
    </div>
  );
};

export default Hero;
