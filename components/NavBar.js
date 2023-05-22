import React, { useState } from "react";

import "../app/globals.css";

const NavBar = () => {
  const [mobileButtonMenu, isMobileButtonMenu] = useState("hidden");

  const handleButtonClick = () => {
    if (mobileButtonMenu === "hidden") {
      isMobileButtonMenu("");
    } else {
      isMobileButtonMenu("hidden");
    }
  };

  return (
    //navbar goes here
    <nav className="bg-white text-black font-playfair">
      {/* we can also change the width of the navbar here with either max-w-6xl or p-8 these are just random numbers but one is for width of the scree nadn one is padding the text*/}
      <div className="mx-auto max-w-10xl px-8">
        {/* this justifys all the children of this div with space between */}
        <div className="flex justify-between">
          {/* Logo */}
          {/* the space-x attribute is useful for dividing up children this creates space between the logo and the other nav items */}
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span className="px-5 font-bold text-xl"> Between The Lines </span>
              </a>
            </div>
            {/* Primary Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-2 text-gray-700">
                My Collection
              </a>
              <a href="#" className="py-5 px-2 text-gray-700">
                Friends
              </a>
            </div>
          </div>
          {/* Secondary Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-gray-700">
              Login
            </a>
            <a
              href="#"
              className="py-3 px-3 bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>

          {/* Mobile Button*/}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={handleButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={mobileButtonMenu}>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Book Collection
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Friends 
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Login
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              Signup
            </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
