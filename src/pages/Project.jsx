import React from 'react';

import ProjectCard from './ProjectCard';
import { ProjectsList } from './ProjectsList';

const Projects = () => {

  return (
    <section id="Project" className="w-full scroll-mt-24">
      <div className=' Skill w-auto h-auto || mt-12 ml-5 mr-5 sm:ml-8 sm:mr-8 md:ml-9 lg:mt-14 lg:ml-24 lg:mr-24 || scroll-mt-24 '>
        
        {/* Heading */}
        <h1 className='head-style font-bold mb-7 || text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-800 '>
          Projects
        </h1>

        {/* Responsive flex wrap */}
        <div className="flex flex-wrap gap-8 ">
          
          {ProjectsList.map((project) => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              CodeLink={project.CodeLink}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
