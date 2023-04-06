import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-screen h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8a03e689-4faa-4377-950f-75d59ace8e30"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-black">
            contact
          </p>
          <p className="py-4">
            //send me a form if you have any comments or shoot me an email -
            c.kwokhong@gmail.com
          </p>
        </div>
        <input
          className="bg-gray-100 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-100"
          type="email"
          placeholder="Email"
          name="Email"
        />
        <textarea
          className="bg-gray-100 p-2"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border-2 hover:bg-[#81BFB0] hover:border-[#81BFB0] px-4 py-2 my-5 mx-auto flex items-center">
          send
        </button>
      </form>
    </div>
  );
};

export default Contact;
