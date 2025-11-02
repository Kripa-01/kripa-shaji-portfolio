import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SplitText from './SplitText';

const MyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'Insurance Policy Management',
      role: 'Web Developer',
      technologies: ['React', 'HTML', 'CSS', 'Supabase'],
      description: 'Created an Insurance Policy Management website, a platform that facilitates online management of insurance using React, HTML, CSS and Supabase.',
      gradient: 'from-lime-400 to-cyan-400'
    },
    {
      id: 2,
      title: 'Chatbot-Mec',
      role: 'Developer',
      technologies: ['Python', 'Langchain'],
      description: 'Worked on the development of an Chatbot-Mec using Python and Langchain to create a chatbot for the college website.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'UPI Fraud Detection',
      role: 'Developer',
      technologies: ['React', 'Flask', 'Hidden Markov Model'],
      description: 'Developed a fraud detection system to identify suspicious UPI transactions using Hidden Markov Models.',
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  // Duplicate projects for seamless loop on desktop
  const displayProjects = [...projects, ...projects.slice(0, 1)];
  
  const cardsPerView = 2;
  const maxIndex = Math.ceil(projects.length / cardsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === maxIndex ? 0 : prevIndex + 1
      );
    }, 15000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black py-12  px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 text-center mb-10 sm:mb-12 md:mb-16 tracking-wider">
         
                          <SplitText
                    text=" MY PROJECTS"
                    className="text-lime-400 inline-block cursor-pointer hover:scale-105 transition-transform duration-300"
                    delay={80}
                    duration={0.8}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 50, rotationX: -90 }}
                    to={{ opacity: 1, y: 0, rotationX: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                    textAlign="center"
                    tag="span"
                  />
        </h2>

        {/* Slider Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Project Cards */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {displayProjects.map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  className="min-w-[100%] md:min-w-[50%] px-2 sm:px-4 flex"
                >
                  <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-lime-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-lime-400/20 w-full flex flex-col h-[500px] sm:h-[500px] md:h-[430px]">
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                    
                    <div className="relative flex flex-col h-full">
                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                        {project.title}
                      </h3>
                      
                      {/* Role */}
                      <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-lg px-4 py-2 mb-4 sm:mb-6 self-start">
                        <p className="text-lime-400 font-semibold text-sm sm:text-base">
                          Role: {project.role}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-3 mt-auto">
                        <h4 className="text-gray-400 font-semibold text-sm sm:text-base uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-gray-600/50 text-white text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-gray-800/80 hover:bg-lime-400/20 border border-gray-700 hover:border-lime-400 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-lime-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-gray-800/80 hover:bg-lime-400/20 border border-gray-700 hover:border-lime-400 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-lime-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-lime-400'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-lime-400/5 rounded-full blur-3xl" />
    </section>
  );
};

export default MyProjects;