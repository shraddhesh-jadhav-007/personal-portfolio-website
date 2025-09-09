import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 mt-0 bg-gradient-to-br from-cyan-800 to-cyan-800">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        
        {/* Back to Top link (center & upside) */}
        <a
          href="#top"
          className="text-sm mb-0 font-medium hover:link active:text-yellow-300 transition duration-300"
        >
          ↑ Back to Top
        </a>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-xl">

          <a 
            href="https://www.linkedin.com/in/shradesh-jadhav" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-success transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a 
            href="https://github.com/shraddhesh-jadhav-007" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-success transition duration-300"
          >
            <FaGithub />
          </a>

          <a 
            href="mailto:shraddhesh.jadhav.07@gmail.com" 
            className="hover:text-success transition duration-300"
          >
            <FaEnvelope />
          </a>

          <a 
            href="https://www.youtube.com/@ShraddheshTechVlogs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-success transition duration-300 active:text-red-500"
          >
            <FaYoutube />
          </a>

          <a 
            href="https://www.instagram.com/be__matchless__07" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-success transition duration-300"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-center">
          © {new Date().getFullYear()} Shraddhesh Jadhav. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
