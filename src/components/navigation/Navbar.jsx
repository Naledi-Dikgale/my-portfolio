import { useState } from "react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    const navlist = document.getElementById("navlist");
    navlist.classList.toggle("max-sm:hidden");
    setToggle(!toggle);
  };
  return (
    <nav
      id="nav"
      className="bg-secondary text-neutral-50 transition-all w-full z-10 p-3 flex justify-end items-end fixed right-0 top-0 h-16"
    >
      <div className="w-full flex justify-start items-center font-lobster text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all ">Naledi</div>
      {
      !toggle ? (
        <FontAwesomeIcon
          icon={faBars}
          className={`right-0 sm:hidden ${
            toggle ? " max-sm:hidden" : ""
          }`}
          onClick={toggleHandler}
        />
      ) : (
        <FontAwesomeIcon
          icon={faClose}
          className={`right-0 sm:hidden ${
            toggle ? "" : " max-sm:hidden"
          }`}
          onClick={toggleHandler}
        />
      )}

      <ul id="navlist" className="w-full z-50 flex gap-4 justify-end right-0 max-sm:hidden max-sm:flex-col max-sm:justify-start max-sm:py-24 max-sm:items-center max-sm:bg-primary max-sm:h-screen max-sm:w-full transition-all font-lobster">
        <li className="text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all  " onClick={toggleHandler}>
          {" "}
          <a href="#about">About</a>
        </li>
        <li className="text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all " onClick={toggleHandler}>
          <a href="#projects">Projects</a>
        </li>
        <li className="text-2xl cursor-pointer hover:-translate-y-1 hover:underline transition-all " onClick={toggleHandler}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
