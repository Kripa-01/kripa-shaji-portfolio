import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import SplitText from './SplitText';

const MyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Insurance Policy Management',
      role: 'Web Developer',
      technologies: ['React', 'HTML', 'CSS', 'Supabase'],
      description: 'Created an Insurance Policy Management website, a platform that facilitates online management of insurance using React, HTML, CSS and Supabase.',
      gradient: 'from-lime-400 to-cyan-400',
      bgGradient: 'from-lime-400/20 via-cyan-400/20 to-lime-400/20',
      icon: '🏥'
    },
    {
      id: 2,
      title: 'Chatbot-Mec',
      role: 'Developer',
      technologies: ['Python', 'Langchain'],
      description: 'Worked on the development of an Chatbot-Mec using Python and Langchain to create a chatbot for the college website.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 via-pink-500/20 to-purple-500/20',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'UPI Fraud Detection',
      role: 'Developer',
      technologies: ['React', 'Flask', 'Hidden Markov Model'],
      description: 'Developed a fraud detection system to identify suspicious UPI transactions using Hidden Markov Models.',
      gradient: 'from-blue-500 to-cyan-400',
      bgGradient: 'from-blue-500/20 via-cyan-400/20 to-blue-500/20',
      icon: '🔐'
    }
  ];

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
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  return (
    <section id="projects" className="relative min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 mb-4 tracking-wider">
            <SplitText
              text="MY PROJECTS"
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
          
          {/* Animated underline */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-pulse" />
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-400 text-lg mt-6 animate-fadeInUp animation-delay-500">
            Explore my latest work and innovations
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Project Cards */}
          <div className="relative overflow-visible rounded-2xl">
            <div 
              className="flex transition-all duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {displayProjects.map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  className="min-w-[100%] md:min-w-[50%] px-2 sm:px-4 flex"
                >
                  <div 
                    className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-lime-400/50 transition-all duration-500 w-full flex flex-col h-[520px] sm:h-[520px] md:h-[450px] overflow-hidden"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      transform: hoveredCard === idx ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                      boxShadow: hoveredCard === idx ? `0 20px 60px -10px rgba(163, 230, 53, 0.3)` : 'none',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-xy`} />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Border glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
                    <div className="relative flex flex-col h-full z-10">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          {project.icon}
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Role Badge */}
                      <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-lg px-4 py-2 mb-4 sm:mb-6 self-start backdrop-blur-sm group-hover:bg-lime-400/20 group-hover:border-lime-400/50 transition-all duration-300">
                        <p className="text-lime-400 font-semibold text-sm sm:text-base">
                          Role: {project.role}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-3 mt-auto">
                        <h4 className="text-gray-400 font-semibold text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
                          <span className="w-8 h-0.5 bg-lime-400 group-hover:w-12 transition-all duration-300" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-gray-600/50 text-white text-xs sm:text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                              style={{
                                animationDelay: `${index * 100}ms`,
                                animation: hoveredCard === idx ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons (visible on hover) */}
                      <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button className="p-2 bg-gray-800/80 hover:bg-lime-400/20 border border-gray-700 hover:border-lime-400 rounded-lg transition-all duration-300 hover:scale-110">
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-lime-400" />
                        </button>
                        <button className="p-2 bg-gray-800/80 hover:bg-lime-400/20 border border-gray-700 hover:border-lime-400 rounded-lg transition-all duration-300 hover:scale-110">
                          <Github className="w-4 h-4 text-gray-400 hover:text-lime-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons with enhanced styling */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-gray-800/90 hover:bg-lime-400/20 border border-gray-700 hover:border-lime-400 rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 group z-10 backdrop-blur-sm shadow-xl hover:shadow-lime-400/50"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-lime-400 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-gray-800/90 hover:bg-lime-400/20 border border-gray-700 hover:border-lime-400 rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 group z-10 backdrop-blur-sm shadow-xl hover:shadow-lime-400/50"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-lime-400 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full relative overflow-hidden ${
                  index === currentIndex
                    ? 'w-12 sm:w-14 h-2.5 sm:h-3 bg-gradient-to-r from-lime-400 to-cyan-400 shadow-lg shadow-lime-400/50'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-600 hover:bg-gray-500 hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                )}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-lime-400 to-cyan-400 transition-all duration-500 rounded-full shadow-lg shadow-lime-400/50"
                style={{ 
                  width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
                  transition: 'width 0.5s ease-in-out'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
    </section>
  );
};

export default MyProjects;