import React from "react";


const Hero = () => {

  return (
    <div className="w-11/12 h-screen py-5 my-5 mb-8 bg-hero bg-no-repeat bg-cover bg-center flex-col items-start justify-end flex border-secondary border-2 ">
      <div className="w-fit bg-secondary text-primary h-fit flex  flex-col p-5">
        <h1 className="font-mono text-3xl">Hi! my name is </h1>
        <span className="text-5xl font-bold max-sm:text-3xl">Naledi Dikgale</span>
        <h2 className="font-mono">I am a Software Engineer</h2>
      </div>
      <button className="bg-secondary text-primary font-bold py-2 px-4 rounded my-5 hover:bg-primary hover:text-secondary hover:cursor-pointer transition-all">
        <a href="./images/Naledi's Resume (1).pdf" download="Naledi_resume.pdf" target="blank" >Get my resume</a>
      </button>
      {/* <img src="images/herobg.svg" alt="" className="w-full object-cover" /> */}
    </div>
  );
};

export default Hero;
