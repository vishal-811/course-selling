import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate, useSearchParams } from "react-router-dom";
import {toast} from  'react-toastify'
const Signin = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [searchparams] =useSearchParams();
    const userRole =searchparams.get('usertype');
    const navigate =useNavigate();
    toast();
        const handleSignin = async(e) => {
            // Handle sign-in logic here
            e.preventDefault();
    
           try {
              const response =   await axios.post( userRole=='user' ?"http://localhost:3000/user/signin":"http://localhost:3000/admin/signin",
            {
                  username:username,
                  email:email,
                  password:password
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
            ); 
            if(response.status===200){
                console.log("user signin successfully");
                navigate('/')
                toast.success("Successfully Registerd")    
            }
            
           } catch (error) {
              toast.error(error.response.data.msg);
           }
             
    
    
        };
    
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-200 to-gray-500">
           <form onSubmit={handleSignin}>
           <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Sign In</h2>
                <input
                    className="input-field mb-4 bg-gray-200 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    className="input-field mb-4 bg-gray-200 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    className="input-field mb-4 bg-gray-200 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="signin-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300" type="submit">Sign In</button>
            </div>
           </form>
        </div>
    );
};

export default Signin;
