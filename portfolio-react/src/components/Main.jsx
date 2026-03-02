import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedin, FaGithub, } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1606918801925-e2c914c4b503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        className="w-full h-screen object-cover"
        alt="mt.fuji"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">Hi I'm Chirag Maski</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-700">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Golang Developer",
                1000, 
                "System Designer",
                1000,
                "GenAI & AI/ML Enthusiast",
                1000,
                "DevOps Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "8px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/haha_miracle"><FaTwitter size={20} className="cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/chirag-maski/"><FaLinkedin size={20} className="cursor-pointer"/></a>
            <a href="https://github.com/chiraghm4"><FaGithub size={20} className="cursor-pointer"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
