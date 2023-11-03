import { skills } from "../constants";
const About = () => {
  return (
    // <div
    //   id="about"
    //   className="w-auto max-sm:w-full flex flex-wrap max-sm:flex-col items-center justify-center border-solid border-2 border-secondary rounded-md p-3"
    // >
      <div className="flex flex-col max-sm:w-full text-justify md:w-2/3 items-start justify-center  p-10 rounded-lg shadow-[0_60px_50px_-40px_rgba(0,128,128,0.3)]">
        <div className="flex w-full gap-5 max-sm:flex-col">
          <div className="w-full">
            <span className="text-pink-400 text-3xl font-agbalumo font-bold">About Me</span>
            <p className="text-neutral-50 w-full py-3 font-medium font-texturina">
              Crafting digital dreams with code! As a full-stack developer, I&apos;m
              your one-stop destination for turning ideas into pixel-perfect
              reality. With a toolbox filled with HTML, CSS, JavaScript, React,
              Ruby, Rails, Tailwind, and MySQL, I&apos;m on a mission to create
              responsive, awe-inspiring web experiences that leave a lasting
              impression. Let&apos;s turn your vision into a digital masterpiece!
            </p>
          </div>

          <div className="max-sm:w-full md:w-full h-full">
            <span className="text-pink-400 text-3x font-agbalumo font-bold">Skills</span>
            <div className="grid grid-rows-4 grid-cols-2 grid-flow-col w-full py-3 h-full">
              {skills.map((element, index) => {
                return (
                  <div key={index} className="flex gap-2 items-center w-full p-3">
                    <img src={element.icon} alt="" className="w-10 h-10" />
                    <span className="text-neutral-50">{element.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
              type="button"
              className="transition-all my-3  w-full h-16 text-neutral-50 bg-secondary hover:bg-pink-400 hover:text-neutral-50 "
            >
              <a
                href="#contact"
                className="w-38 h-18 px-6 py-4 rounded-lg border-2 border-transparent font-lobster text-2xl text-center transition-all  "
              >
                Contact Me
              </a>
            </button>
      </div>
    // </div>
  );
};

export default About;
