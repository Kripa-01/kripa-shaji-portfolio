import KripaPortfolio from "../assets/KripaPortfolio.jpg";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import {motion} from 'framer-motion'

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24    relative">
      {/* Hero Text */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 z-10">
        {/* Name with SplitText Animation */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight space-x-4">
            <SplitText
            text="I'm "
            className=" inline-block cursor-pointer hover:scale-105 transition-transform duration-300"
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
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Kripa Shaji"
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
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        
        {/* Title */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-4 ">
<BlurText
  text="AI & Web Developer"
  delay={350}
  animateBy="words"
  direction="top"
  className="text-4xl mb-8 text-center flex  justify-center"
/>
        </p>
        
<p className="text-gray-300 text-sm sm:text-base mt-4 sm:mt-6 max-w-xl mx-auto">
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
  >
    Developing future-ready applications with AI at the core.
  </motion.span>
</p>
      </div>
      
      {/* Profile Image Container */}
      <div className="relative group cursor-pointer">
        <div className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] lg:w-[26rem] lg:h-[32rem] relative">
          {/* Image Container */}
<motion.div
  initial={{ opacity: 0, scale: 0.95, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative z-10 w-full h-full rounded-t-full overflow-hidden shadow-2xl 
             border-t-4 border-x-4 border-lime-400/30 
             group-hover:border-lime-400/60 transition-all duration-500 
             group-hover:shadow-[0_25px_50px_-12px_rgba(163,230,53,0.3)]"
>
  <img 
    src={KripaPortfolio}
    alt="Kripa Shaji - AI + Web Developer"
    className="w-full h-full object-cover object-top 
               group-hover:scale-105 transition-transform duration-500"
    onError={(e) => {
      console.error("Image failed to load:", e.target.src);
      e.target.style.display = "none";
    }}
    onLoad={() => console.log("Image loaded successfully!")}
  />
</motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-300">
        <svg 
          className="w-6 h-6 text-lime-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div> */}
    </div>
  );
};

export default HeroSection;