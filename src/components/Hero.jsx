import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
// import backgroundImage from '/images/universe.png';

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

// const heroStyle = {
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
// };

  return (
    <div className="w-11/12 h-screen p-5 mb-8 flex-col items-start justify-end flex border-secondary ">
      <div className="w-2/3 max-sm:w-full  text-red-700 md:w-full lg:w-2/3 p-5 flex items-center">
        <div className="h-fit w-full">
          <p className="text-4xl md:text-4xl font-bold max-sm:text-3xl w-fit">
              Hi! my name is Naledi Dikgale,
              I am a <br /> <span ref={el} />
          </p>
        </div>
      </div>
      <p className="w-full py-5 font-mono text-xl lg:w-2/3 text-justify text-neutral-50">
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&apos;t hesitate to contact me.
        </p>
      <button className=" transition-all my-3  w-full h-16 text-neutral-50 bg-secondary rounded-xl hover:bg-red-700 hover:text-neutral-50">
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
