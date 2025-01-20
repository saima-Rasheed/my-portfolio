// pages/about.js
import React from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black text-orange-300 min-h-screen flex flex-col items-center justify-center py-10 px-5">
      <h1 className="text-4xl font-semibold text-orange-300 mb-5">About Me</h1>
      <p className="text-lg text-orange-300 mb-5 max-w-3xl text-center">
        Hello, I am Saima Rasheed, a passionate web developer. I specialize in creating elegant and efficient websites using modern technologies like Next.js, React, and Tailwind CSS. With a strong focus on user experience and design, I aim to craft solutions that are both functional and beautiful.
      </p>
      
      <div className="flex flex-col items-center gap-3 mb-5">
        <p className="text-lg">
          <span className="font-semibold">Email:</span> <a href="saimaarasheed149@gmail.com" className="text-golden hover:underline">saimaarasheed149@gmail.com</a>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Phone:</span> <a href="tel:+03222531692" className="text-golden hover:underline">+03222531692</a>
        </p>
      </div>

      <div className="mt-5 flex gap-6">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <a href="#"><FaLinkedin className='w-10 h-10 rounded-full text-black  bg-gray-300  pt-1 pb-1'/></a> 
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <a href="#"><FaGithub  className='w-10 h-10 rounded-full text-black  bg-gray-300  pt-1 pb-1'/></a>
        </a>
      
      </div>
    </div>
  );
};

export default About;
