import React from 'react'

const GetStarted = () => {
  return (
    <div className='bg-[url("https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224648-4918717.png")] bg-cover '>
        <div className='h-screen  bg-black/70'>
        <nav className='flex justify-between px-5 md:px-32 py-5  items-center '>
            <img className='h-7 md:h-12' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
            <div className='font-medium'>
                <select className='text-white mr-4 px-5 py-1 border-2 border-gray-400 focus:border-2 rounded-sm focus:border-white bg-transparent focus:bg-transparent'  name="languages" id="">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                </select>
                <button className='bg-netflixRed py-1 px-3 rounded-md'>Sign In</button>
            </div>
            
        </nav>

        <main className=' w-fit mx-auto mt-20 md:mt-36 text-center'>
            <h1 className='text-3xl md:text-6xl font-bold'>Unlimited movies, TV</h1>
            <h1 className='mt-2 text-3xl md:text-6xl font-bold'>shows and more</h1>
            <p className=' mt-2 md:mt-5 text-xl font-medium'>Starts at ₹149. Cancel anytime.</p>
            <p className='mt-6 text-sm'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='mt-5'>
                <input className='mr-2 text-white bg-black/[.2] py-2 pl-4 pr-28 border-2 border-slate-500 rounded-md placeholder:text-slate-300 placeholder:font-medium' type="email" name="email" placeholder='Email Address' />
                <button className='mt-3 md:m-0 py-3 px-12 text-lg font-medium rounded-md bg-netflixRed'>Get Started    &gt;</button>
            </div>
        </main>
    </div>
    </div>
    
  )
}

export default GetStarted
