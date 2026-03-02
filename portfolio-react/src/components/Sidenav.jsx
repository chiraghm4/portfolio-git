import React, { useState } from "react";
import {
  AiOutlineProject,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePaperClip,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import resume from "../assets/resume/Chirag_Maski_Resume.pdf";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <AiOutlineMenu
        className="absolute top-4 right-4 z-[99] md:hidden"
        onClick={() => setNav(!nav)}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={() => setNav(!nav)}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={() => setNav(!nav)}
            href="#works"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Project</span>
          </a>
          <a
            onClick={() => setNav(!nav)}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlinePaperClip size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={() => setNav(!nav)}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : null}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome />
          </a>
          <a
            href="#works"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlinePaperClip />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
