import { getAuth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignInPage = () => {
  const [email,setEmail]=useState('');
   

  // const navigate = useNavigate();
  function onChange(e) {
    setEmail(e.target.value);
  }

async function submitEvent(e){
  e.preventDefault();
  try {
    const auth=getAuth();
    // Emil Use stte hook se milega
    await sendPasswordResetEmail(auth,email);
    console.log("EMAIL WAS SENT");
            

    
  } catch (error) {
    console.log("Email Address not found in database");
    
  }
}

  return (
    <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 mx-auto'>
    <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW5jcnlwdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
      <div  className='w-full md:w-[67%] lg:w-[40%] ml-20 rounded'>
        <form  onSubmit={submitEvent}>
        <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
             <div className='flex justify-between text-sm'>
              <p className='mb-8 mt-4 '>Don't Have An Account? 
              <Link to='/signup' className='text-red-500 hover:text-purple-700'> Register Here</Link></p>
              
              <Link to='/signup' className='text-red-500 hover:text-purple-700'> New User </Link>
              </div>
            
            <button
              className="w-full bg-blue-500 text-grey px-4 py-4 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >Get Verification Code</button>
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
// C:/Users/hp/OneDrive/Desktop/Ecommerce/GharLelo/client/src/pages