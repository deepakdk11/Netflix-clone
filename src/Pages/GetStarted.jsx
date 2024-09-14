import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className='bg-[url("https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224648-4918717.png")] bg-cover '>
        <div className='h-screen  bg-black/70'>
        <nav className='flex justify-between px-5 md:px-32 py-5  items-center '>
            <img className='h-7 md:h-12' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
            <div className='font-medium flex'>
                <div className='flex justify-center items-center mr-4 px-5 py-1 border-2 border-gray-400 focus:border-2 rounded-md focus:border-white bg-transparent focus:bg-transparent'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                    <select className='text-white bg-transparent focus:outline-none '  name="languages" id="">
                        <option value="English">  English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
                
               <button className='bg-netflixRed py-1 px-3 rounded-md'><Link to={"/login"}>Sign In</Link></button>  
            </div>
           
            
        </nav>

        <main className=' w-fit mx-auto mt-20 md:mt-36 text-center'>
            <h1 className='text-3xl md:text-6xl font-bold'>Unlimited movies, TV</h1>
            <h1 className='mt-2 text-3xl md:text-6xl font-bold'>shows and more</h1>
            <p className=' mt-2 md:mt-5 text-xl font-medium'>Starts at ₹149. Cancel anytime.</p>
            <p className='mt-6 text-sm'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='mt-5'>
                <input className='mr-2 text-white bg-black/[.2] py-2 pl-4 pr-28 border-2 border-slate-500 rounded-md placeholder:text-slate-300 placeholder:font-medium' type="email" name="email" placeholder='Email Address' />
                <Link to={'/home'}><button className='mt-3 md:m-0 py-3 px-12 text-lg font-medium rounded-md bg-netflixRed'>Get Started    &gt;</button></Link>
            </div>
        </main>
    </div>
    </div>
    
  )
}

export default GetStarted
