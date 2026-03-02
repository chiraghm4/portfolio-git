import React from "react";
import img from "../assets/dorm-room.jpg";
import ProjectItems from "./ProjectItems";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems
          img={img}
          title="Go-Gateway"
          linkToRepo="https://github.com/chiraghm4/Go-Gateway"
          techUsed={["Golang", "Goroutines", "Mutex", "net/http"]}
        />
        <ProjectItems
          img={img}
          title="CryptoApp"
          linkToRepo="https://github.com/chiraghm4/crypto-currency-app"
          techUsed={["ReactJs", "Solidity", "Hardhat"]}
        />
        <ProjectItems
          img={img}
          title="URL Shortner"
          linkToRepo="https://github.com/chiraghm4/URL-Shortner"
          techUsed={["ExpressJs", "MongoDB"]}
        />
        <ProjectItems
          img={img}
          title="BlogSpace"
          techUsed={["ReactJs", "ExpressJs", "MongoDB", "JWT Authentication"]}
        />
      </div>
    </div>
  );
}

export default Projects;
