import React from 'react';

import TypedText from './TypedText';

const Navbar = () => {

  return (
        <section>
            <div className="shadow-md fixed top-0 left-0 w-full z-50 block max-[420px]:hidden">
                <nav id='nav-container' className="Navbar border-t-2 border-b-2 border-black bg-yellow-200 w-full text-black py-2.5">
                    <div className="flex items-center justify-between mx-auto w-full pt-1 pb-1 pl-3">
                
                    {/* Left: Portfolio text */}
                    <h1 className="pr-2.5 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
                        Portfolio
                    </h1>

                    {/* Center: Links */}
                    <div id='Navbar' className="mr-[36.9rem] ml-auto sm:ml-19 md:ml-52 lg:mr-[36.8rem] lg:ml-48 || md:flex space-x-6 || text-md sm:text-[1.1rem] md:text-md lg:text-lg">

                        <a href="#" className="hover:text-gray-400 active:text-green-600">Home</a>
                        <a href="#About" className="hover:text-gray-400 active:text-green-600">About</a>
                        <a href="#Skill" className="hover:text-gray-400 active:text-green-600">Skill</a>
                        <a href="#Project" className="hover:text-gray-400 active:text-green-600">Project</a>
                        <a href="#Contact" className="hover:text-gray-400 active:text-green-600">Contact</a>

                    </div>
                
                </div>
            </nav>
        </div>

        {/* Typing animated text */}
        <TypedText strings={['React + Vite + Tailwind CSS + Daisy UI']} />
    
    </section>
  )
}
export default Navbar;