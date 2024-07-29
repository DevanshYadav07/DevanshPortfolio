"use client"
import React from "react";
import Image from "next/image";
import Profile from "@/assests/profile1.jpg"
import { useTypewriter, Cursor } from "react-simple-typewriter";
const About = () => {

  const [text] = useTypewriter({
    words: ["Resilient", "Adaptive","Enthusiastic"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 100,
  });

  return (
    <div id="about" className="w-full bg-white py-[8rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          className="w-[500px] my-0 mx-auto border-0"
          src={Profile}
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#2596be] font-bold mt-2">ABOUT ME</p>
          <div className="md:text-3xl whitespace-pre sm:text-2xl text-xl font-bold py-2">
          <span >
            {text}
            <span>
              <Cursor />
            </span>
          </span>
          </div>
          <p>
            {" "}
            I am a final year B.Tech CSE student at Graphic Era Univerity. I
            having good problem solving skills and passionate to create solution that helps 
            people. I am a skilled full stack developer with experience in front-end development.
            and Enthusiastic to learn new skills.
          </p>

       
          <p className="py-3">
            You can find project showcasing my skills and talent .
          </p>
          <p>
            
          </p>
          {/* <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;

