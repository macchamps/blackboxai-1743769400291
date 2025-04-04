import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics dashboard with data visualization.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'D3.js', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Redux', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com'
  },
  {
    title: 'Weather Application',
    description: 'Weather forecast application with interactive maps and charts.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'OpenWeather API', 'Leaflet', 'Chart.js'],
    github: 'https://github.com/yourusername/project4',
    demo: 'https://project4-demo.com'
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support and SEO optimization.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project5',
    demo: 'https://project5-demo.com'
  },
  {
    title: 'Fitness Tracker',
    description: 'Personal fitness tracking application with progress visualization.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React Native', 'Firebase', 'Redux', 'Victory Charts'],
    github: 'https://github.com/yourusername/project6',
    demo: 'https://project6-demo.com'
  }
];

const Portfolio = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of my recent projects and work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-white text-primary hover:bg-gray-100"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gray-800 hover:bg-gray-700"
                    >
                      <i className="fab fa-github mr-2"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;