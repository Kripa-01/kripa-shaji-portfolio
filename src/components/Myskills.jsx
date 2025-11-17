import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import CLanguage from "../assets/C Language.png";
import mongoDb from "../assets/mongoDB.png";
import expressjs from "../assets/Expressjs.png";
import Nodejs from "../assets/nodejs.png";
import java from "../assets/java.png";
import aws from "../assets/aws.png";
import Git from "../assets/git.png";
import Tailwind from "../assets/tailwind.png";
import Azure from "../assets/azure1.png";
import Docker from "../assets/docker.png";
import GoogleCloud from "../assets/google.png";
import Python from "../assets/python.png";
import SplitText from "./SplitText";

const MySkills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      color: "from-orange-400 to-red-500",
      delay: 0.1,
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      color: "from-blue-400 to-blue-600",
      delay: 0.15,
    },
    {
      id: 20,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-cyan-500",
      color: "from-cyan-400 to-teal-500",
      delay: 0.2,
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-600",
      color: "from-blue-500 to-cyan-400",
      delay: 0.25,
    },
    {
      id: 6,
      src: mongoDb,
      title: "MongoDB",
      style: "shadow-green-600",
      color: "from-green-500 to-emerald-600",
      delay: 0.3,
    },
    {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      color: "from-yellow-400 to-orange-500",
      delay: 0.35,
    },
    {
      id: 8,
      src: Nodejs,
      title: "Node.js",
      style: "shadow-green-600",
      color: "from-green-400 to-lime-500",
      delay: 0.4,
    },
    {
      id: 9,
      src: expressjs,
      title: "Express.js",
      style: "shadow-gray-600",
      color: "from-gray-500 to-gray-700",
      delay: 0.45,
    },
    {
      id: 10,
      src: Python,
      title: "Python",
      style: "shadow-yellow-400",
      color: "from-yellow-500 to-blue-500",
      delay: 0.5,
    },
    {
      id: 21,
      src: GoogleCloud,
      title: "Google Cloud",
      style: "shadow-blue-400",
      color: "from-blue-400 to-red-500",
      delay: 0.55,
    },
    {
      id: 22,
      src: Docker,
      title: "Docker",
      style: "shadow-blue-500",
      color: "from-blue-500 to-cyan-600",
      delay: 0.6,
    },
    {
      id: 15,
      src: java,
      title: "Java",
      style: "shadow-red-400",
      color: "from-red-500 to-orange-600",
      delay: 0.65,
    },
    {
      id: 14,
      src: CLanguage,
      title: "C Language",
      style: "shadow-blue-600",
      color: "from-blue-600 to-purple-600",
      delay: 0.7,
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-600",
      color: "from-gray-400 to-gray-800",
      delay: 0.75,
    },
    {
      id: 18,
      src: Git,
      title: "Git",
      style: "shadow-red-500",
      color: "from-red-500 to-orange-500",
      delay: 0.8,
    },
    {
      id: 16,
      src: aws,
      title: "AWS",
      style: "shadow-orange-400",
      color: "from-orange-400 to-yellow-500",
      delay: 0.85,
    },
    {
      id: 19,
      src: Azure,
      title: "Azure",
      style: "shadow-blue-400",
      color: "from-blue-400 to-indigo-600",
      delay: 0.9,
    },
  ];

  // Smooth fade and scale animation (NO slice-up effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Smooth fade and scale only - NO vertical movement
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // Smooth easing
      },
    },
  };

  // Gentle floating animation
  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      name="Skill"
      className="relative w-full min-h-screen bg-black p-4 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative z-10 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 text-center mb-6 tracking-wider">
            <SplitText
              text="SKILLS"
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
          <motion.div
            className="flex justify-center mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
          </motion.div>

          {/* Description */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-300 text-center text-base sm:text-lg leading-relaxed max-w-2xl">
              These are the technologies I've worked with
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ⚡
              </motion.span>
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Grid - SMOOTH ANIMATIONS ONLY */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-4 text-center py-8 px-4 sm:px-8"
        >
          {techs.map(({ id, src, title, style, color, delay }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{

                transition: { duration: 0.3, ease: "easeOut" },
              }}

              className="group relative"
            >
              {/* Card container */}
              <div className="perspective-1000">
                <motion.div
                  className={`relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 transition-all duration-500 ${style} shadow-lg overflow-hidden`}
                  whileHover={{ borderColor: "rgba(163, 230, 53, 0.5)" }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                  />

                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                    whileHover={{
                      translateX: "100%",
                      transition: { duration: 0.6 },
                    }}
                  />

                  {/* Icon container with gentle floating */}
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="relative z-10 mb-4"
                    style={{ animationDelay: `${delay}s` }}
                  >
                    <motion.img
                      src={src}
                      alt={title}
                      className="w-10 h-10 mx-auto object-contain drop-shadow-2xl "
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1,
                        transition: { duration: 0.4 },
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.p
                    className="relative z-10 mt-4 text-sm sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    {title}
                  </motion.p>

                  {/* Proficiency bar (appears on hover) */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gray-700/50 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${color} rounded-full`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "85%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${color} rounded-bl-2xl`} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating particles on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-lime-400 rounded-full"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: "50%",
                    }}
                    animate={{
                      y: [-20, -60],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


      </div>


    </div>
  );
};

export default MySkills;