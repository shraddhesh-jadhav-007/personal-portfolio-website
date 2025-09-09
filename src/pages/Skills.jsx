import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from '@react-spring/web';

import HTMLimg from '../assets/HTML5.svg'
import CSSimg from '../assets/CSS3.svg'
import DaisyLogoimg from '../assets/DaisyLogo.svg'

const Skills = () => {

    // This below code is for -> on scroll animation

    const [ref1, inView1] = useInView({
      
      triggerOnce: false , // makes it repeat every time you scroll
      threshold: 0.4, // start animation when 40% of the item is visible

    });

    const skill1 = useSpring({
    
        to: inView1 ? { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-500px)' },
        config:      { tension: 250, friction: 55 },
                      //  delay: 100,
    });

    const skill2 = useSpring({
      
        to: inView1 ? { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-600px)' },
        config:      { tension: 250, friction: 55 },
                      //  delay: 0,
    });
    
    const skill3 = useSpring({
        
        to: inView1 ? { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-700px)' },
        config:      { tension: 250, friction: 55 },
                      //  delay: 0,
    });

    const skill4 = useSpring({
    
        to: inView1 ? { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-800px)' },
        config:      { tension: 250, friction: 55 },
                      //  delay: 0,
    });

    // This below commented code is for without -> on scroll animation
    
    // const skill1 = useSpring({
    //     from:   { opacity: 0, transform: 'translateX(-500px)' },
    //     to:     { opacity: 1, transform: 'translateX(0)' },
    //     config: { tension: 250, friction: 55 },
    //             delay: 500,
    // });

    // const skill2 = useSpring({
    //     from:   { opacity: 0, transform: 'translateX(-600px)' },
    //     to:     { opacity: 1, transform: 'translateX(0)' },
    //     config: { tension: 250, friction: 55 },
    //                 delay: 600,
    // });
    
    // const skill3 = useSpring({
    //     from:   { opacity: 0, transform: 'translateX(-700px)' },
    //     to:     { opacity: 1, transform: 'translateX(0)' },
    //     config: { tension: 250, friction: 55 },
    //                 delay: 700,
    // });

    // const skill4 = useSpring({
    //     from:   { opacity: 0, transform: 'translateX(-800px)' },
    //     to:     { opacity: 1, transform: 'translateX(0)' },
    //     config: { tension: 250, friction: 55 },
    //                 delay: 800,
    // });


  return (

    // Skill Section
    <section>
    <animated.div 
      id='Skill' 
      className='Skill w-auto h-auto  mt-8 lg:mt-14  
                 ml-5 mr-3 sm:ml-8 sm:mr-8 md:ml-9 md:mr-9 lg:ml-24 lg:mr-24 scroll-mt-24'>

      {/* Header -> For Title & LinkedIn Button with Link */}

      <header id='SkillHeader' className=' header justify-between  items-baseline w-full h-auto '>
        <h1 className='head-style flex flex-wrap font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-800'>
          Tech Stack
        </h1>

        {/* Subtitle */}
        <p className="text-base-content/80 text-sm sm:text-base md:text-lg lg:text-lg font-primary">
          "Learn, think & implement with tools and technologies"
        </p>
        
      </header>

      {/* Skill Items / Logo Section */}
      
      <div ref={ref1} id='Skill-Item' className=' Skill-Item mt-6 flex flex-wrap || gap-4 sm:gap-5 md:gap-5 lg:gap-10 || w-full '>
        
        <animated.div id={'java'} style={skill1} className='item card pr-20 lg:pr-25 || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-cyan-100 hover:scale-105 transition duration-200 ease-out'>
          <div className='card-body items-start justify-baseline'>
            
            <a href='https://www.w3schools.com/java/' target='_blank' rel='noopener noreferrer'>

              <svg viewBox="0 0 128 128" className='w-15 h-15 sm:h-17 sm:w-17 md:w-17 md:h-17 lg:h-20 lg:w-20 || object-contain'>
                <path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>
              </svg>

            </a>

          </div>
        </animated.div>

        <animated.div id={'HTML5'} style={skill2} className='item card pr-20 lg:pr-25 || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-sky-100 hover:scale-105 transition duration-200 ease-out'>
          <div className='card-body items-center justify-center p-4'>
           
            <a href='https://www.w3schools.com/css/' target='_blank' rel='noopener noreferrer'>

              <img 
                src= {HTMLimg} 
                title='HTML5 Logo'
                className='w-10 h-10 md:w-15 md:h-15 lg:w-15 lg:h-15 || object-contain' />
              
                <h1 className='card-title font-normal text-sm items-center justify-center mt-2 sm:mt-2 md:mt-0 lg:mt-2'>HTML5</h1>
            </a>
             
          </div>
        </animated.div>

        <animated.div id={'CSS3'} style={skill3} className='item card pr-20 lg:pr-25 || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-amber-100 hover:scale-105 transition duration-200 ease-out'>
          <div className='card-body items-center justify-center p-4'>
           
            <a href='https://www.w3schools.com/html/' target='_blank' rel='noopener noreferrer'>

              <img 
                src= {CSSimg}
                title='CSS3 SVG Logo' 
                className='w-10 h-10 md:w-15 md:h-15 lg:w-15 lg:h-15 || object-contain' />

                <h1 className=' card-title font-normal text-sm items-center justify-center mt-2 sm:mt-2 md:mt-0 lg:mt-2'>CSS3</h1>
            </a>
            
          </div>
        </animated.div>

        <animated.div id={'React'} style={skill4} className='item card pr-20 lg:pr-25 || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-sky-100 hover:scale-105 transition duration-200 ease-out'>
          <div className='card-body items-center justify-center p-4 '>

            <a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>

              <svg viewBox="0 0 128 128" className='w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 || object-contain animate-spin'>
                <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
              </svg>

              <h1 className='card-title font-normal text-sm items-center justify-center mt-2'>React</h1>
            </a>
          
          </div>
        </animated.div>

        <animated.div id="tailwind" style={skill3} className='item card || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-gray-600 hover:scale-105 transition duration-700 ease-out'>
          <div className='card-body items-center justify-center p-4'>

            <a href='https://tailwindcss.com/docs/installation/using-vite' target='_blank' rel='noopener noreferrer'>

              <svg viewBox="0 0 128 128" className='w-30 h-30 md:w-30 md:h-30 lg:w-40 lg:h-40 || object-contain '>
                <path fill="#38bdf8" d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"></path><path fill="#fff" d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"></path>
              </svg>

            </a>

          </div>
        </animated.div>

        <animated.div id={'DaisyUI'} style={skill4} className='item card pr-20 lg:pr-25 || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-orange-100 hover:scale-105 transition duration-400 ease-out'>
          <div className='card-body items-center justify-center p-4'>
            
            <a href='https://daisyui.com/' target='_blank' rel='noopener noreferrer'>

              <img 
                src= {DaisyLogoimg}
                title='DaisyUI Logo' 
                className='w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 || object-contain' />

                <h1 className=' card-title font-normal text-sm items-center justify-center mt-2'>DaisyUI</h1>
            </a>

          </div>
        </animated.div>

        <animated.div id="vite" style={skill2} className='item card pr-20 lg:pr-25 || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-red-100 hover:scale-105 transition duration-700 ease-out'>
          <div className='card-body items-center justify-center p-4'>
            
            <svg viewBox="0 0 128 128" className=' w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 || object-contain' >
             <defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"></stop><stop offset="1" stop-color="#bd34fe"></stop></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"></stop><stop offset=".083" stop-color="#ffdd35"></stop><stop offset="1" stop-color="#ffa800"></stop></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"></path><path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"></path>
            </svg>
            
            <h1 className=' card-title font-normal text-sm items-center justify-center'>Vite</h1>
          </div>
        </animated.div>

        <animated.div id="bootstrap" style={skill4} className='item card || w-38 h-24 lg:w-55 lg:h-30 || shadow-sm items-center justify-center bg-gray-600 hover:scale-105 transition duration-700 ease-out'>
          <div className='card-body items-center justify-center p-4'>
            
            <a href='https://getbootstrap.com/docs/5.3/getting-started/introduction/' target='_blank' rel='noopener noreferrer'>

               <h1 className=' card-title text-lg lg:text-2xl font-bold items-center justify-center text-white'>Bootstrap</h1>

            </a>
          </div>
        </animated.div>
        
      </div>
    </animated.div>
    </section>
  )
}

export default Skills;