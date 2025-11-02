import React from "react";
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
import Azure from "../assets/azure.jpeg";
import Docker from "../assets/docker.png";
import GoogleCloud from "../assets/google-cloud.png";
import Python from "../assets/python.png";
import Ai from "../assets/Ai.png";
import SplitText from "./SplitText";

const MySkills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 20,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-green-500",
    },

    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: mongoDb,
      title: "MongoDB",
      style: "shadow-green-600",
    },
        {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
     {
      id: 8,
      src: Nodejs,
      title: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 9,
      src: expressjs,
      title: "Express.js",
      style: "shadow-yellow-600",
    },
    {
      id: 10,
      src: Python,
      title: "Python",
      style: "shadow-yellow-400",
    },

    {
      id: 21,
      src: GoogleCloud,
      title: "Google Cloud",
      style: "shadow-yellow-400",
    },
    {
      id: 22,
      src: Docker,
      title: "Docker",
      style: "shadow-blue-500",
    },


    
    {
      id: 15,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 14,
      src: CLanguage,
      title: "C Language",
      style: "shadow-blue-600",
    },
    
     {
       id: 13,
       src: github,
       title: "GitHub",
       style: "shadow-gray-600",
     },
     {
       id: 18,
       src: Git,
       title: "Git",
       style: "shadow-red-500",
     },
     
    {
      id: 16,
      src: aws,
      title: "aws",
      style: "shadow-red-400",
    },
    {
      id: 18,
      src: Azure,
      title: "Azure",
      style: "shadow-blue-400",
    },



    

  ];

  return (
    <div
      name="Skill"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 text-center mb-10 sm:mb-12 md:mb-16 tracking-wider">
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
<div className="flex justify-center items-center">

          <p className="text-gray-300 flex justify-center items-center text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">These are the technologies I've worked with</p>
</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 text-center py-8 px-4 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-9 mx-auto" />
              <p className="mt-4 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
