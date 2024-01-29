import { useState } from "react"
import { Link } from "react-router-dom"
const Header =()=>{
    const [usertype ,setUsertype] =useState('User')
    return(
        <div className=" flex  justify-between w-screen h-12  border-b border-slate-300 shadow-2 mt-2">
        <h1 className='text-black font-sans font-extrabold p-2 text-xl'>AcademiaX</h1> 
        <div className="flex items-center m-2">
                  <Link
                    to={"/role"}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  md:font-medium  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Profile
                  </Link>
                </div>
        </div>
    )
}

export default Header;