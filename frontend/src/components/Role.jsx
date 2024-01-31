import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Profile = () => {
  const[usertype,setUsertype] =useState('')
  const navigate =useNavigate();
    
  function handleusertype(role){
    // console.log(role);
      // setUsertype(role);
      
      navigate(`/signup?usertype=${role}`)
  }
  return (
    <div className="flex  flex-col justify-between w-3/4 h-auto  p-4 ms-14 mt-32">
      <div className="flex justify-center font-sans font-semibold text-5xl space-x-4 ms-52">
        <h1 className="text-sky-600">Choose Your </h1>
        <span className="text-blue-700">Role</span>
      </div>

      <div className="flex justify-between w-full m-12   ms-40">
        

      <div className=" w-1/3 h-full p-4 border-2 solid hover:border-blue-500 shadow-lg hover:shadow-md shadow-blue-400 cursor-pointer transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-110 duration-100">
        <button onClick={()=>handleusertype('user')}>
            <h2 className="text-4xl font-semibold font-sans text-gray-800">User</h2>
            <p className="text-xl text-gray-500 mt-2">As a user, you have the power to explore a variety of courses and gain access to all of them. </p>
        </button>
        </div>
        
        <div className="w-1/3 h-full p-4 border-2 solid hover:border-blue-500 shadow-lg hover:shadow-md shadow-blue-400 cursor-pointer transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-110 duration-100">
        <button onClick={()=>handleusertype('admin')} className="flex-1">
            <h2 className="text-4xl font-semibold font-sans text-gray-800">Admin</h2>
            <p className="text-gray-500 mt-2 text-xl">You can create courses according to your interest and make them public so that users can access them.</p>
        </button>
        </div>
         
      </div>
    </div>
  );
}

export default Profile;
