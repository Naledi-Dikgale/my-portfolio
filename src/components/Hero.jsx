import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Software Engineer', 'Full Stack Developer'],
    typeSpeed: 50,
    loop: true,
  });

  return () => {
    typed.destroy();
  };
}, []);

  return (
    <div className="w-11/12 h-screen p-5 mb-8 bg-no-repeat bg-cover bg-center flex-col items-start justify-end flex border-secondary ">
      <div className="w-2/3 max-sm:w-full  text-indigo-950 md:w-full lg:w-2/3 p-5 flex items-center">
        <div className="h-fit w-full">
          <p className="text-4xl md:text-4xl font-bold max-sm:text-3xl w-fit">
              Hi! my name is Naledi Dikgale,
              I am a <br /> <span ref={el} />
          </p>
        </div>
      </div>
      <p className="w-full py-5 font-mono text-xl lg:w-2/3 text-justify text-indigo-950">
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&apos;t hesitate to contact me.
        </p>
      <button className=" transition-all my-3  w-full h-16 text-primary bg-lime-500 hover:bg-secondary hover:text-primary">
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
