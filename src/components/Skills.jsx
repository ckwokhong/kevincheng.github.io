import React, { useState } from "react";

import { Modal } from "./Modal";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: ["HTML", "CSS", "Javascript", "ReactJS", "TailwindCSS"],
      style: "shadow-orange-500",
      description: "I love HTML",
    },
    {
      id: 2,
      title: "CSS",
      style: "shadow-blue-500",
      description: "I love CSS",
    },

    {
      id: 3,
      title: "Javascript",
      style: "shadow-yellow-500",
      description: "I love JS",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [chosenDescription, setChosenDescription] = useState(null);
  const [chosenTitle, setChosenTitle] = useState(null);
  return (
    <div name="skills" className="bg-[#fff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Container */}

        <div>
          <p className="text-3xl font-bold py-4 inline border-b-4 border-[black]">
            skills
          </p>
          <p className="py-8">These are the technologies I've worked with:</p>
        </div>
        {/* Images */}
        <div className="w-full grid grid-cols-3 gap-8 text-center px-0">
          <h1 className="border-b-2 ">Front-end</h1>
          <h1 className="border-b-2 ">Back-end</h1>
          <h1 className="border-b-2 ">Data and Applications</h1>
        </div>

        {/* SKILLS */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, title, style, description }) => (
            <button
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
              onClick={() => {
                setShowModal(true);
                setChosenDescription(description);
                setChosenTitle(title);
              }}
            >
              <ul>
                {Array.isArray(title) ? (
                  title.map((item) => <li key={item}>{item}</li>)
                ) : (
                  <li>{title}</li>
                )}
              </ul>
            </button>
          ))}
        </div>

        {/* <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          description={chosenDescription}
          title={chosenTitle}
        /> */}
        {/*  */}
        {/* END OF FRONTEND */}
      </div>
    </div>
  );
};

export default Skills;
