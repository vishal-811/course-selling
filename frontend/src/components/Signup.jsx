import {useState} from 'react'
import axios from 'axios'
const Signup=()=>{
    const [username ,setUsername]=useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword]=useState("");

      const setUserhandler=(e)=>{
        setUsername(e.target.value)  //e.target give us a object as an output.
      }

      const setEmailhandler=(e)=>{
        setEmail(e.target.value);
      }

      const setPasswordhandler=(e)=>{
        setPassword(e.target.value);
      }

      const handlesubmit=async (e)=>{
        e.preventDefault();  
       
         try {
          const response =await axios.post("http://localhost:3000/user/signup",
            {
              username:username,
              email:email,
              password:password
          },
          {
              headers: { 'Content-Type': 'application/json' },
          });
            console.log(response);
           if(response.status==201){
            console.log("successfully registered")
            // clearing the signup page
             setUsername('');
             setEmail('');
             setPassword('');
           }
           else{
            console.log(response.data.msg)
           }
         } catch (error) {
          
              // Log the error message from response.data.msg
              console.error('Error message:', error.response.data.msg);
            
          } 
          
      }
    return(
       


      <div className='flex flex-col justify-center items-center   bg-gray-800 w-screen h-screen'>
      <h1 className='font-sans font-semibold text-3xl text-white mb-4'>Create Account</h1>
      <form className='w-full max-w-sm'>
          <div className='mb-4'>
              <input className='bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700' 
              type='text' 
              placeholder='Username'
              value={username}
              onChange={setUserhandler}
              required
              />
          </div>
          <div className='mb-4'>
              <input className='bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700' 
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={setEmailhandler}
              required
              />
          </div>
          <div className='mb-6'>
              <input className='bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700' 
              type='password'
              placeholder='Password'
              value={password}
              onChange={setPasswordhandler}
              autoComplete='current-password'
              required
              />
          </div>
         
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
              Create Account
          </button>
      </form>
          {/* Login if user already exist */}
           <div className='flex space-x-1 font-sans font-bold mt-2 p-2'>
               <p className='text-cyan-200'>Already have an AcademiaX account?</p>
               <a className='text-white hover:text-blue-600 text-lg' href='https://www.google.com' >Sign In</a>
           </div>
  </div>   
    )
}

export default Signup;