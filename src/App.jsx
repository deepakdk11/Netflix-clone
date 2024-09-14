import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import GetStarted from './Pages/GetStarted'
import SignIn from './Pages/SignIn'





const App = () => {
  return (
    <div className='bg-netflix-black text-white'>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<GetStarted />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
