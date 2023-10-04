import About from "./components/About";
import Navbar from "./components/navigation/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Hero from "./components/Hero";


function App() {

  return (
    <div
      id="app"
      className="m-0 p-0 transition-all scroll-smooth h-full flex flex-col items-center justify-center bg-primary text-secondary"
    >
      <header className="w-full flex items-end">
        <Navbar />
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center p-4">
        <section className="w-full h-full flex items-center justify-center  bg-hero bg-no-repeat bg-cover bg-center">
        <Hero />
        </section>
        <section id="projects" className="w-full p-6 h-fit flex">
        <Projects />
        </section>
        <section id="about" className="w-fit h-fit flex items-center justify-center">
          <About />
        </section>
        <section className="w-full flex justify-center items-center">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
