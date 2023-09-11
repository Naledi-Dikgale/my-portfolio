import { skills } from "../constants";
const About = () => {
  return (
    // <div
    //   id="about"
    //   className="w-auto max-sm:w-full flex flex-wrap max-sm:flex-col items-center justify-center border-solid border-2 border-secondary rounded-md p-3"
    // >
      <div className="flex flex-col max-sm:w-full text-justify md:w-2/3 items-start justify-center border-2 border-secondary p-10 rounded-lg">
        <div className="flex w-full gap-5 max-sm:flex-col">
          <div className="w-full">
            <span className="text-secondary font-mono font-bold text-3xl">About Me</span>
            <p className="text-dimBlue w-full py-3 font-medium">
              Crafting digital dreams with code! As a full-stack developer, I&apos;m
              your one-stop destination for turning ideas into pixel-perfect
              reality. With a toolbox filled with HTML, CSS, JavaScript, React,
              Ruby, Rails, Tailwind, and MySQL, I&apos;m on a mission to create
              responsive, awe-inspiring web experiences that leave a lasting
              impression. Let&apos;s turn your vision into a digital masterpiece!
            </p>
          </div>

          <div className="max-sm:w-full md:w-full h-full">
            <span className="text-secondary font-mono font-bold text-3xl">Skills</span>
            <div className="grid grid-rows-4 grid-cols-2 grid-flow-col w-full py-3 h-full">
              {skills.map((element, index) => {
                return (
                  <div key={index} className="flex gap-2 items-center w-full p-3">
                    <img src={element.icon} alt="" className="w-10 h-10" />
                    <span className="text-dimBlue">{element.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
              type="button"
              className="transition-all my-3  w-40 h-16 text-secondary bg-primary border border-secondary rounded-lg hover:bg-secondary hover:text-primary"
            >
              <a
                href="#contact"
                className="w-38 h-18 px-6 py-4 rounded-lg border-2 border-transparent text-lg font-mono font-extrabold hover:border-primary text-center transition-all"
              >
                Contact Me
              </a>
            </button>
      </div>
    // </div>
  );
};

export default About;
