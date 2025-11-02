import React from 'react';
import SplitText from './SplitText';
import Typewriter from "typewriter-effect";
const WhoAmI = () => {
  return (
    <section id="about" className="relative  bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Floating Images - Hidden on mobile (< md breakpoint) */}


      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col justify-center mt-24 ">
        {/* Title */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 mb-8 sm:mb-10 md:mb-12 tracking-wider animate-fade-in">
          
                  <SplitText
                    text="WHO AM I?"
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
        </div>

        {/* Description */}
        <div className="space-y-4  ">
<p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-2">
  <Typewriter
    options={{
      strings: [
        `I am an AI and Web Developer focused on creating efficient, scalable, and intelligent digital solutions. My work revolves around modern web technologies such as ReactJS and the integration of AI-driven features to enhance user experience and functionality.

        I am deeply passionate about continuous learning, exploring new technologies, and developing innovative ideas that solve real-world problems. Outside of work, I enjoy reading meaningful and thought-provoking books that help broaden my perspective.`
      ],
      autoStart: true,
      loop: false,
      delay: 15,
      deleteSpeed: 0,
      pauseFor: 300000,
    }}
  />
</p>

        </div>

        {/* CTA Button */}
        {/* <div className="flex justify-center">
          <a 
            href="#projects"
            className="inline-flex items-center bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-400/50 active:scale-95"
          >
            SHOW MY PROJECTS
          </a>
        </div> */}
      </div>

      {/* Bottom decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-lime-400/10 rounded-full blur-3xl" />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation, 0deg));
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-25px) rotate(var(--rotation, 0deg));
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default WhoAmI;