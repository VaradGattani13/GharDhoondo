import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth';
import {toast} from  'react-toastify'
const SignInPage = () => {
  
    const [showPassword,setShowPassword]=useState(false)


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  // Destructring the form
  const { email, password } = formData;
  // const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
     console.log("Invalid Details");
    }
  }


  return (
    <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Sign In page</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 mx-auto'>
    <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW5jcnlwdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
      <div  className='w-full md:w-[67%] lg:w-[40%] ml-20 rounded'>
        <form onSubmit={onSubmit} >
        <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="relative mb-6">
            <input
              type={showPassword?"text":"password"}
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Password"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            {showPassword?(
              <AiFillEyeInvisible className="absolute right-4 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState)}/>
            ):
            <AiFillEye 
            className="absolute right-4 top-3 text-xl cursor-pointer"
            onClick={()=>setShowPassword((prevState)=>!prevState)}

            />}
            </div>
            <div className='flex justify-between text-sm'>
              <p className='mb-8 mt-4 '>Don't Have An Account? 
              <Link to='/signup' className='text-red-500 hover:text-purple-700'> Register Here</Link></p>
              <p className='mb-8 mt-4 text-blue-500 hover:text-purple-700'>
              
              <Link to='/forgot-password'>Forgot Password</Link>
            </p>
              
            </div>
            <button
              className="w-full bg-blue-500 text-grey px-4 py-4 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >Login </button>
            <div>
              <p className='text-center pt-4 font-serif' >OR</p>
              </div>
              <OAuth/>
        </form>
        
              
      </div>
      <div>

      </div>
    </div>
    </section>
  )
}

export default SignInPage