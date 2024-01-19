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
        e.preventDefault();  // this will terminate the original behavior and do whatever we write in our handlesubmit(server call)
        // console.log(username,password,email)
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
        <>
            <h1>Create Account</h1>
            <form onSubmit={handlesubmit}>
                <div>
                     <input type='text' 
                     placeholder='Username'
                     value={username}
                     onChange={setUserhandler}
                     required
                     />
                     
                </div>

                <div>
                      <input type='email'
                      placeholder='Email Address'
                      value={email}
                      onChange={setEmailhandler}
                      required
                      />
                </div>

                <div>
                    <input type='password'
                    placeholder='password'
                    value={password}
                    onChange={setPasswordhandler}
                    autoComplete='current-password'
                    required
                    />
                    
                </div>

                <button>Create Account</button>
            </form>
        </>
        
    )
}

export default Signup;