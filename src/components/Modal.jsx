import React from "react";

export const Modal = ({ isVisible, onClose, description, title }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black 
    bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" w-[600px] flex flex-col justify-center">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className=" bg-white p-10 rounded-md ">
          <h1 className="font-bold flex">How did I pick up {title}?</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
