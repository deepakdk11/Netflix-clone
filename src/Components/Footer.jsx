import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='px-5 py-5 md:mx-auto md:w-3/4 mt-20'>
      <div className='flex'>
      <FaFacebookF size={25} className='mr-5' />
      <FaInstagram size={25} className='mr-5' />
      <FaTwitter size={25} className='mr-5' />
      <FaYoutube size={25} />
      </div>

      <div className='flex mt-2'>
        
        <div className='mr-6 md:flex'>
            <ul className='text-sm leading-8 text-slate-400 md:flex-1 md:mr-20'>
            <li>Audio Description</li>
            <li>Investor relations</li>
            <li>Legal Notices</li>
        </ul>
        <ul className='text-sm leading-8 text-slate-400 md:mr-20' >
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie preferences</li>
        </ul>
        </div>
        <div className='md:flex'>
            <ul className='text-sm leading-8 text-slate-400 md:mr-20'>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporte Information</li>
        </ul>
        <ul className='text-sm leading-8 text-slate-400'>
            <li>Media Centre</li>
            <li>privacy</li>
            <li>Contact Us</li>
        </ul>
        </div>
        
      </div>
      <p className='mt-7 text-slate-400 text-sm px-4 py-2 border-2 border-slate-400 w-fit'>Service Code</p>
      <p className='text-xs mt-5 text-slate-400'>&copy; 1997 - {year} Netflix, Inc</p>
    </div>
  )
}

export default Footer
