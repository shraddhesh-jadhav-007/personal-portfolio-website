import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from '@react-spring/web';
import { FaReact } from 'react-icons/fa';
import Profile from '../assets/Profile.png'

const Hero = () => {
    
    const [ref2, inView2] = useInView({
      
      triggerOnce: false , // makes it repeat every time you scroll
      threshold: 0.7, // start animation when 40% of the item is visible

    });

    const styles1 = useSpring({
      
      to: inView2?  { opacity: 1, transform: 'translateX(0px)' } : { opacity: 0, transform: 'translateX(-300px)' },
      config:       { tension: 200, friction: 55 }, 
                      delay: 600,          
    });

    const styles2 = useSpring({
      
      to: inView2?  { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-400px)' },
      config:       { tension: 200, friction: 55 },
                      delay: 700,
    });

    const styles3 = useSpring({
     
      to: inView2?  { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-500px)' },
      config:       { tension: 200, friction: 55 },
                      delay: 700,
    });

    // tension - bounce speed & strength 
    // friction controls damping (lower = bouncier)
    // mass how heavy the animation feels

    const Photo = useSpring({
       
      to: inView2?  { opacity: 1, transform: 'translateX(0px)', filter: 'blur(0px)'} : { opacity: 0, transform: 'translateX(-600px)', filter: 'blur(0px)'}, 
      config:       { tension: 200, friction: 55},     // friction: 12 tension: 180 mass: 1
                      delay: 700,

      // replaced transform: 'scale(0)'  with  translateX(-200px)
    });

    return(
        <section>
            {/* Hero Section */}
            <div className='  py-8 sm:py-14 md:py-20 lg:py-34 bg-gradient-to-br from-cyan-800  to-cyan-800 '>
            
                {/* Short Intro with center profile with Right side Text */}
                <div ref={ref2} id='container' className='flex flex-col items-center text-center sm:flex-row sm:justify-center sm:text-left sm:items-center lg:mr-32'>
                
                    <animated.img 
                        style={Photo} 
                        src={Profile} 
                        title='Profile Photo' 
                        className='mt-6 sm:mt-0 || sm:ml-18 md:ml-18 sm:my-0 lg:mb-36 
                        w-56 h-56 sm:w-58 sm:h-58 md:w-62 md:h-62  lg:w-66 lg:h-66 
                        object-cover rounded-full border-3 border-white' 
                    />

                    {/* Text beside the image */}
                    <div className='mx-10 my-7 sm:my-0 lg:mb-34 || items-center justify-between text-white'>
                        <header className=' leading-relaxed text-white'>

                            <animated.h3  style={styles1} className='font-medium mb-1 text-lg md:text-xl lg:text-2xl'>
                            
                                Hey, I'm 👋
                        
                            </animated.h3>

                            <animated.h1 
                                style={styles2} 
                                className='font-bold bg-gradient-to-r from-amber-200 via-orange-100 to-cyan-400 bg-clip-text text-transparent animate-gradient 
                                text-4xl md:text-5xl lg:text-6xl'>

                                Shraddhesh Jadhav

                            </animated.h1>

                            <animated.p style={styles3} className="font-medium mt-3 text-md md:text-lg lg:text-xl">

                                Fresher, constantly adapting and evolving with modern technology.

                            </animated.p>

                        </header>

                        {/* Button -> to download CV through Google Drive link */}
                        <button className='btn head-style mt-6 btn-dash btn-md'>
                            <a 
                                href='https://drive.usercontent.google.com/download?id=1kPFYvRfhxF-tgW22LyRn_QQ1mH8utR8g&export=download&authuser=0' 
                                target='_blank' 
                                rel='noopener noreferrer' 
                                className='flex items-center gap-1 '>
                
                                Resume <FaReact className='text-xl animate-spin mt-0.5'/>
                            </a>
                        </button>
                            
                    </div>

                </div> 

            </div>
        </section>
    )
}
export default Hero;