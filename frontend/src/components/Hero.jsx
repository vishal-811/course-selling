import React from "react";
import bodylogo1 from '../assets/bodylogo1.png'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-screen flex bg-custom-gray z-1">
      {/* Left section */}
      <div className="w-2/3 h-full flex flex-col pt-24">
        <h1 className="p-14 text-5xl space-x-4 space-y-10 text-gray-800">
          Grow up your skills <br />
          <span className="text-7xl text-black">with AcademiaX</span>
        </h1>
         <p className="text-xl m-4 p-6  text-indigo-900">
         Welcome to <span className="text-2xl text-red-800">AcademiaX</span>
         <br/>where knowledge meets ambition.<br></br> 
         Explore top-tier courses, curated to fuel your success.
         </p>
      

        {/* Explore courses */}
        <div className="flex items-center ms-11">
         <Link
        to={"/courses"}
        type="button"
        className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-600 md:font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
        <p className="mr-2">Explore courses</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
    </Link>
</div>

      </div>

      {/* Right section */}
      <div className="w-1/3 flex justify-center items-center">
        <div className="mt-32 me-8">
          <img src={bodylogo1} alt="AcademiaX Logo" className="w-full bg-transparent" />
        </div>
      </div>
    </div>
  );
};



export default Hero;