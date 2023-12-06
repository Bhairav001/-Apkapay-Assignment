import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-500 p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-lg font-bold">
          Copyright &copy; 2021 Travelo. All rights reserved
        </span>
        <ul className="flex gap-6 md:gap-8 text-lg font-semibold mt-4 md:mt-0">
          <li>
            <a href="#hero" className="text-white hover:text-purple-400 transition duration-300 ease-in-out">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-purple-400 transition duration-300 ease-in-out">
              About
            </a>
          </li>
          <li>
            <a href="#recommend" className="text-white hover:text-purple-400 transition duration-300 ease-in-out">
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-white hover:text-purple-400 transition duration-300 ease-in-out">
              Testimonials
            </a>
          </li>
        </ul>
        <ul className="flex gap-4 text-2xl mt-4 md:mt-0">
          <li>
            <BsFacebook className="text-white hover:text-purple-400 transition duration-300 ease-in-out" />
          </li>
          <li>
            <AiFillInstagram className="text-white hover:text-purple-400 transition duration-300 ease-in-out" />
          </li>
          <li>
            <BsLinkedin className="text-white hover:text-purple-400 transition duration-300 ease-in-out" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
