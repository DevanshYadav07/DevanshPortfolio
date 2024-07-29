import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

const Dashboard = () => {
  const leetcodeUrl = "https://leetcode.com/u/RelentlessDevansh/";
  const instagramUrl = "https://www.instagram.com/dd_does__/";
  const linkedinUrl = "https://www.linkedin.com/in/devansh0006/";
  const githubUrl = "https://github.com/DevanshYadav07";

  return (
    <div id="home" className="text-white flex items-center h-screen "
    style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-[800px] w-full mx-auto flex flex-col items-start p-8">
        <p className=" font-bold mb-2">HEY THERE I&apos;M</p>
        <h1 className="text-5xl font-bold mb-4 text-[#2596be]">DEVANSH YADAV</h1>
        <p className="text-xl font-bold text-gray-500 mb-4">
          Solving Problems and Creating Scalable and Robust Solutions
        </p>
        <div className="flex space-x-5">
          <a href={leetcodeUrl} target="blank" className="hover:text-[#2596be]">
            <SiLeetcode size={30} />
          </a>
          <a href={instagramUrl} target="blank" className="hover:text-[#2596be]">
            <FaInstagram size={30} />
          </a>
          <a href={linkedinUrl} target="blank" className="hover:text-[#2596be]">
            <FaLinkedinIn size={30} />
          </a>
          <a href={githubUrl} target="blank" className="hover:text-[#2596be]">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
