import React from 'react'

const SignInFooter = () => {
  return (
    <div className='mt- md:mt-96 pb-20'>
        <div className='w-full border-t-2 mb-8 border-neutral-400 md:w-0'></div>
      <footer className=' mx-auto w-4/5 text-sm text-neutral-400'>
        <p>Questions? Call 000-800-919-1694</p>
        <ul className='flex flex-wrap gap-x-32  gap-y-5  md:w-3/5 mt-6 underline decoration-solid decoration-neutral-400 '>
            <li>FAQ</li>
            <li>Help Centre</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
        </ul>
        <select className='text-white mt-6 px-5 py-1 border-2 border-gray-400 focus:border-2 rounded-sm focus:border-white bg-transparent focus:bg-transparent'  name="languages" id="">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
        </select>
      </footer>
    </div>
  )
}

export default SignInFooter
