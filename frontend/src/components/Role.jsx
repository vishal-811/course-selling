

const Profile=()=>{
    return(
  <div className="flex flex-col justify-between  w-3/4 h-full  m-10 p-4 ms-48">
           <div className="flex justify-center font-sans font-semibold text-5xl space-x-3">
           <h2 className="text-sky-600">Choose Your</h2>
           <h1 className="text-blue-700">Role</h1>
  </div>

         <div className="flex justify-between w-full h-56 m-12">
              <div className="w-1/4 h-auto p-4 ms-32 border-2 solid hover:border-blue-500 ">
                   <h2 className="text-4xl font-semibold font-sans text-gray-800">User</h2>
                   <p className="text-xl text-gray-500 mt-2">As a user, you have the power to explore a variety of courses and gain access to all of them. </p>
               </div>

               <div className="w-1/4 h-auto p-4 me-32 border-2 solid hover:border-blue-500">
                     <h2 className="text-4xl font-semibold font-sans text-gray-800">Admin</h2>
                    <p className="text-gray-500 mt-2 text-xl">You can create courses according to your interest and make them public so that users can access them.</p>
              </div>
         </div>
             
 </div>
    )
}

export default Profile;