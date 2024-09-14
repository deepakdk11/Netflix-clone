import React, { useEffect } from 'react'
import Home from './Pages/Home'
import GetStarted from './Pages/GetStarted'
import SignIn from './Pages/SignIn'





const App = () => {
  return (
    <div className='bg-netflix-black text-white'>
      <SignIn />
      {/* <GetStarted /> */}
      {/* <Home /> */}
    </div>
  )
}

export default App
