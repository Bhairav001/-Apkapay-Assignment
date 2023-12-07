import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer text-white text-xl font-extrabold uppercase">
          <img src="https://e7.pngegg.com/pngimages/968/670/png-clipart-school-bus-computer-icons-public-transport-bus-service-red-bus-logo-transport.png" alt="" className="w-8 h-8" />
          Happy Traveling
        </div>
        <div className="md:hidden">
          {navbarState ? (
            <VscChromeClose
              onClick={() => setNavbarState(false)}
              className="text-white text-2xl cursor-pointer"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setNavbarState(true)}
              className="text-white text-2xl cursor-pointer"
            />
          )}
        </div>
        <ul className={`md:flex ${navbarState ? "flex" : "hidden"} items-center gap-4 list-none`}>
          <li>
            <a href="#home" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#recommend" className="text-white hover:text-gray-300">
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-white hover:text-gray-300">
              Explore
            </a>
          </li>
        </ul>
        <button className="hidden md:block px-4 py-2 rounded-full bg-blue-500 text-white text-lg font-semibold uppercase hover:bg-blue-600">
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
