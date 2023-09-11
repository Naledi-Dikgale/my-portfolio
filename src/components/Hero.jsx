import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <div className="w-11/12 h-screen p-5 mb-8 bg-hero bg-no-repeat bg-cover bg-center flex-col items-start justify-end flex border-secondary border-2 ">
      <div className="w-2/3 max-sm:w-full bg-secondary text-primary md:h-14 md:w-full lg:w-2/3 p-5 flex items-center">
        <div className="h-fit w-full">
          <ReactTyped
            className="text-5xl md:text-4xl font-bold max-sm:text-3xl w-fit"
            loop={true}
            backSpeed={50}
            typeSpeed={50}
            showCursor={false}
            strings={[
              "Hi! my name is Naledi Dikgale",
              "I am a Software Engineer",
            ]}
          />
        </div>


      </div>
      <p className="w-full py-5 font-mono text-xl lg:w-2/3 text-justify">
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&apos;t hesitate to contact me.
        </p>
      <button className="bg-secondary text-primary font-bold py-2 px-4 rounded my-5 hover:bg-primary hover:text-secondary hover:cursor-pointer transition-all">
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