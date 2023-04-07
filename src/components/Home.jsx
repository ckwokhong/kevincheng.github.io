import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import TypeWriterEffect from "react-typewriter-effect";
import Hi from "../assets/hi.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fff] font-mono">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto h-full px-8  flex flex-col justify-center">
        {/* Memoji */}
        <div className="inline-block justify-center">
          <img src={Hi} alt="Hi" style={{ width: "200px" }}></img>
        </div>
        {/* End of Memoji */}

        <p className="text-2xl text-[#000]">Hi, my name is</p>
        <h1 className="text-3xl md:text-5xl text-[#000]">Kevin Cheng</h1>
        <p className="text-[#595850] py-10 max-w-[700px]">
          I am a data analyst deeply passionate about crafting meaningful
          experiences and digital solutions that deliver measurable value. With
          expertise in data analysis, and data science, I am able to provide
          organizations with powerful insights and data-driven solutions that
          drive growth and success.
        </p>
        <p>I am currently working on: </p>
        <p>
          1. HarvardX, CS50x - Introduction to Computer Science (In-progress,
          target to complete in May 2023)
        </p>
        <p>2. To participate in a data science project on kaggle</p>
      </div>
      {/* End Container */}
    </div>
  );
};

export default Home;
