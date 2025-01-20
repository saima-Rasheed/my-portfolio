// pages/projects.js
import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of the first project. It is an e-commerce built using React.',
    link: 'https://hackathon-2-s5hu.vercel.app',
    image: '/Screenshot 2025-01-20 222746.png', 
  },
  {
    title: 'Project Two',
    description: 'This is a description of the second project. A dynamic blog site made with Next.js and Tailwind and sanity',
    link: 'https://github.com/saima-Rasheed/sanity-and-dynamic.git',
    image: '/Screenshot 2025-01-21 015845.png',
  },
  {
    title: 'Project Three',
    description: 'This project uses HTML,CSS for a web app.',
    link: 'https://github.com/saima-Rasheed/HTML-CSS.git',
    image: '/Screenshot 2025-01-21 021152.png',
  },
  
];

const Projects = () => {
  return (
    <div className="bg-black text-orange-300 min-h-screen py-10 px-5">
      <h1 className="text-4xl font-semibold text-golden text-center mb-10">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-orange-300 mb-2">{project.title}</h2>
            <p className="text-orange-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-golden hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
