import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import Kaggle from "../assets/kaggle.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import Arrow from "../assets/arrow.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center px-3 bg-[#fff] text-black shadow-md">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "180px" }}></img>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 absolute right-10">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#fff] text-black font-mono"
            : "hidden"
        }
      >
        <h1 className="font-bold text-3xl py-10">Social Links</h1>
        <li className="py-6 text-2xl">
          <a href="https://www.linkedin.com/in/chengkh/">Linkedin</a>
        </li>
        <li className="py-6 text-2xl">
          <a href="https://github.com/ckwokhong">Github</a>
        </li>
        <li className="py-6 text-2xl">
          <a href="https://www.kaggle.com/kwokhong">Kaggle</a>
        </li>
        <li className="py-6 text-2xl">
          <a href="https://drive.google.com/drive/folders/1M8Fj0MOjeflX9A2srlNq4eNVMMNfO762?usp=share_link">
            Resume
          </a>
        </li>
      </ul>
      {/*End Mobile Menu */}
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[25%] left-0">
        <ul>
          <img src={Arrow} style={{ width: "300px" }} className="px-10"></img>
          <li className="w-[160px] h-[60px] flex justify-between items-center rounded-tr-3xl ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/chengkh/"
              target="_blank"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/ckwokhong"
              target="_blank"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-[#20BEFF]"
              href="https://www.kaggle.com/kwokhong"
              target="_blank"
            >
              Kaggle
              <img src={Kaggle} style={{ width: "30px" }}></img>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center rounded-br-3xl ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/drive/folders/1M8Fj0MOjeflX9A2srlNq4eNVMMNfO762?usp=share_link"
              target="_blank"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/*End Social Icons */}
    </div>
  );
};

export default Navbar;
