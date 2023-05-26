//third-party imports
import React, { useState } from "react";

//local imports
import NavBar from "../components/NavBar";

const Home = () => {


  //Displayed
  return (
    <React.Fragment>
      <NavBar />
      <main className="bg-white text-black h-screen">
        <div className="flex items-center justify-center p-10 text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-12 rounded-full text-sm shadow-lg shadow-slate-900 appearance-none"
          />
          <button
            // onClick=''
            className="font-bold py-2 rounded flex items-center absolute translate-x-24 hover:scale-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {/* <div className="text-center p-10 justify-center text-black">Info</div> added later when doing the google books api*/}
      </main>
    </React.Fragment>
  );
};

export default Home;
