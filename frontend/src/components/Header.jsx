import { useState } from "react"
import { Link, useSearchParams} from "react-router-dom"
import Avatar from "./Avatar";
const Header =()=>{
    const [searchparams]=useSearchParams();
    const userType =searchparams.get('usertype');
    const login =searchparams.get('login');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userTypeFromStorage = localStorage.getItem('userType');
   
    return(
        
      <div className="bg-gray-100">
      <header className="fixed top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-md">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <a href="/">
            <span className="text-2xl font-extrabold text-blue-600">AcademiaX</span>
          </a>
          <div className="flex items-center space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              <li><a href="/" className="px-4 py-2 font-semibold text-gray-600 rounded">Home</a></li>
              <li><a href="/courses" className="px-4 py-2 font-semibold text-gray-600 rounded">Courses</a></li>
              <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">About Us</a></li>

              {isLoggedIn && userTypeFromStorage ? <Avatar userRole={userTypeFromStorage}/> :
              <div className="flex items-center">
                  <Link
                      to={"/role"}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-600  md:font-medium  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                   Profile
                  </Link>
                </div>}
            </ul>

            <div className="inline-flex md:hidden">
              <button className="flex-none px-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
                <span className="sr-only">Open Menu</span>
              </button>
              </div>
      </div>
    </div>
  </header>
</div>
    )
}

export default Header;