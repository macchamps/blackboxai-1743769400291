import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ThreeDSection from '../components/ThreeDSection';

const Home = () => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    }, '-=0.5')
    .from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
    }, '-=0.5');
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I'm <span className="text-primary">Your Name</span>
                <br />
                Web Developer
              </h1>
              <p 
                ref={subtitleRef}
                className="text-xl text-gray-600 dark:text-gray-400"
              >
                I create beautiful and functional web experiences using modern technologies.
              </p>
              <div ref={ctaRef} className="flex space-x-4">
                <Link
                  to="/portfolio"
                  className="btn"
                >
                  View My Work
                </Link>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gray-800 hover:bg-gray-700"
                >
                  <i className="fab fa-github mr-2"></i>
                  GitHub
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <ThreeDSection />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: 'fab fa-react', name: 'React' },
              { icon: 'fab fa-js', name: 'JavaScript' },
              { icon: 'fab fa-node', name: 'Node.js' },
              { icon: 'fab fa-html5', name: 'HTML5' },
              { icon: 'fab fa-css3-alt', name: 'CSS3' },
              { icon: 'fab fa-git-alt', name: 'Git' },
              { icon: 'fab fa-python', name: 'Python' },
              { icon: 'fas fa-database', name: 'SQL' },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <i className={`${skill.icon} text-4xl text-primary mb-4`}></i>
                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="card group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/portfolio/${project}`} className="btn bg-white text-primary hover:bg-gray-100">
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A brief description of project {project} and its key features.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;