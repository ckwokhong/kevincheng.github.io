import React from "react";
import Mac from "../assets/mac.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 border-8 items-center">
          {/* About */}

          <div className="sm:text-right pl-4">
            <p className="text-3xl font-bold inline border-b-2 pb-3 border-[black]">
              about me
            </p>
          </div>

          {/*  */}
          <div className="flex justify-around pr-20">
            <img
              className="pb-2 items-center"
              src={Mac}
              style={{ width: "150px" }}
            ></img>
          </div>
        </div>

        <div className="max-w-[1000px] w-full mb-20 grid sm:grid-cols-2 gap-8 px-4">
          {/* first grid */}
          <div className="sm:text-right text-3xl ">
            <p>
              Hi, I'm Kevin/国康/國康/케빈, nice to meet you. Please take look
              around
            </p>
          </div>

          {/* second grid */}
          <div>
            <p>
              Hello there, and welcome to my page! My name is Kevin, and I'm a
              programming enthusiast, avid cook and a lifelong learner. When I'm
              not typing away at my keyboard, you can find me whipping up a
              storm in the kitchen, experimenting with new recipes and burning
              more than a few pans along the way. I have an insatiable thirst
              for knowledge and once dreamed of learning everything in the
              world, but now I've settled for just learning something new every
              day. Thank you for stopping by, and I hope you enjoy exploring my
              website!
            </p>
          </div>

          {/* end of grid */}
        </div>
      </div>
    </div>
  );
};

export default About;
