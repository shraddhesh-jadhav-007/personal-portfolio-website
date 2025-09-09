import React from 'react';

const About = () => {

  return (

    <section>

      {/* About Me Section */}
      <div 
        id='About' 
        className=' w-auto h-auto  mt-8 ml-5 mr-3 sm:ml-8 sm:mr-8 md:ml-9 md:mr-9 lg:mt-14 lg:ml-24 
        flex flex-col flex-wrap scroll-mt-24 '>
      
        <h1 className='head-style font-bold mb-1 lg:mb-2 
          text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-800 '>

          About Me

        </h1>

        <div className=' text-gray-800 items-baseline justify-baseline 
          lg:mr-60 text-sm sm:text-base md:text-lg lg:text-lg font-primary'>

          <p>
            A detail-oriented, passionate{" "}
            <span className="text-blue-700 font-medium">
            Frontend Developer (Fresher)
            </span>{" "}
            with a solid foundation in{" "}
            <span className="font-medium">
            Java, React, Tailwind CSS <span className="font-normal">with</span> DaisyUI, and Bootstrap.
            </span>
          </p>

          <p>
            Over the course of my learning journey, I have built fully responsive{" "}
            <span className="font-medium">Portfolio Website</span>, with smooth animations using{" "}
            <span className="font-medium">React Spring & AOS</span>, and mobile-first designs with{" "}
            <span className="font-medium">Tailwind CSS</span>.
          </p>

          <p>
            <br/>
            These projects not only sharpened my technical skills but also gave me hands-on experience with real-world practices like{" "}
            <span className="font-medium">
            responsiveness, performance optimization, and writing clean, maintainable code
            </span>.
          </p>

          <p><br/>
            As a fresher, I bring{" "}
            <span className="font-medium">curiosity, dedication, and a problem-solving mindset</span>{" "}
            to every project. I am eager to contribute my skills, collaborate with talented teams, and continuously grow as a developer. Currently, I am actively seeking opportunities as a{" "}
            <span className="text-blue-600 font-semibold">
            Web Developer / Software Developer
            </span>{" "}
            where I can apply my knowledge, learn from industry experts, and create impactful digital solutions.
          </p>
          
        </div>

      </div>
    
    </section>
  )
}
export default About;