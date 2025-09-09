import React, { useState } from "react";
import { FaGithub, FaGlobe} from "react-icons/fa";

const ProjectCard = ({ image, title, description, liveLink, CodeLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)} // 👈 Toggle on card click
      className="card rounded-xl shadow-md shadow-black/20 bg-base-100
                 w-full sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto
                 transition hover:scale-100 hover:shadow-lg hover:shadow-black/35 duration-200 ease-out
                 cursor-pointer">  {/* 👈 shows pointer on hover */}
                 
      {/* Image */}
      <figure className="w-auto sm:h-36 md:h-40 lg:h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-3 sm:p-4 md:p-5 text-center">
        <h2 className="font-semibold head-style text-base sm:text-base md:text-xl lg:text-xl text-cyan-800">
          {title}
        </h2>

        {/* Description */}
        <p
          className={`text-sm sm:text-sm md:text-base lg:text-base text-gray-600 transition-all ${
            !isExpanded ? "line-clamp-4" : ""
          }`}
        >
          {description}
        </p>

        {/* Read More / Show Less indicator */}
        {description.length > 100 && (
          <span className="text-blue-500 text-sm sm:text-sm md:text-base lg:text-base mt-1 block">
            {isExpanded ? "Show Less ▲" : "Read More ▼"}
          </span>
        )}

        {/* Live Link Button (don’t toggle on click) */}
        <div
          className="mt-3 flex justify-between"
          onClick={(e) => e.stopPropagation()} // 👈 stops card toggle when clicking button
         >
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="head-style btn sm:w-auto px-3 sm:px-5 py-1.5 sm:py-2 
                       text-xs sm:text-sm md:text-sm lg:text-lg
                       active:bg-green-500 active:text-white bg-white text-blue-600">

             Go Live <FaGlobe className=" text-lg "/>
           {/* 🌐 */}
            
          </a>
          <a
            href={CodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="head-style btn sm:w-auto px-3 sm:px-5 py-1.5 sm:py-2 
                       text-xs sm:text-sm md:text-sm lg:text-base 
                       bg-white text-black  active:bg-black active:text-white">

            Get Code <FaGithub className=" text-xl "/> 
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
