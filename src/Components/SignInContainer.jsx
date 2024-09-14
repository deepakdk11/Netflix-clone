import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'

const SignInContainer = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
      console.log(authUser)
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((authUser) => {
      console.log(authUser)
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  return (
    <div className='bg-[url("https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224648-4918717.png")] bg-cover'>
        <div className=' h-screen bg-black px-8  md:bg-black/70'>
        <nav className='w-fit pt-4 md:pl-40'>
            <img className='h-7 md:h-12' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        </nav>
            
            <div className='bg-black/[0.7] mt-8  w-full md:w-fit rounded-md mx-auto md:mt-10 md:px-16 md:py-12'>
              <h1 className='text-3xl md:text-2xl font-bold mb-7'>Sign In</h1>
              <form className='flex flex-col gap-4 items-center h-80 w-full md:w-80'>
                <input className='py-4 px-4 bg-black/100 rounded-md w-full border-2 border-netflixinputBorderColor ' value={email} type="text" name="email or Phone Number" placeholder='Email or mobile number' onChange={(e)=>setEmail(e.target.value)} required/>
                {show ? <p className='text-sm'>Message and data rates may apply</p> : <input className='py-4 px-4 bg-black/100 rounded-md w-full border-2 border-netflixinputBorderColor ' type="password" value={password} name="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required />}
                {show ? <button className='bg-netflixRed w-full py-2 rounded-md font-medium'>Send sign-in code</button> : <button className='bg-netflixRed w-full py-2 rounded-md font-medium' onClick={signIn}>Sign In</button>}
                <p>OR</p>
                {show ? <button className=' bg-grey/45 w-full py-2 rounded-md font-medium' onClick={() => setShow(false)}>Use Password</button> : <button className=' bg-grey/45 w-full py-2 rounded-md font-medium' onClick={() => setShow(true)}>Use a sign-in code</button>}
                {show ? <p>Forgot email or phone number?</p> : <p>Froget Password?</p>}
              </form>
              <div className='mt-5 flex flex-row items-center'>
                <input className='mr-2 checked:bg-white' type="checkbox" name="check" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p className='mt-3 text-neutral-400'>New to Netflix? <span className='font-medium cursor-pointer text-white' onClick={register}>Sign up now.</span></p>
              <p className='mt-5 text-sm text-neutral-400'>This page is protected by Google reCAPTCHA to</p>
              <p className='text-sm text-neutral-400'>ensure you're not a bot. <span className='text-blue-600'>Learn more.</span></p>
            </div>
        </div>
    </div>
  )
}

export default SignInContainer
