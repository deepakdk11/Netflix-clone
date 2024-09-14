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
        <div className='flex justify-center items-center w-fit mt-6 px-5 py-1 border-2 border-gray-400 focus:border-2 rounded-md focus:border-white bg-transparent focus:bg-transparent'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                    <select className='text-white bg-transparent focus:outline-none '  name="languages" id="">
                        <option value="English">  English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
        </div>
      </footer>
    </div>
  )
}

export default SignInFooter
