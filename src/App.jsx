import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/slice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import LogInScreen from './Pages/LogInScreen'
import Profile from './Pages/Profile'






const App = () => {

  // const user = useSelector(selectUser);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       console.log(userAuth);
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });

  //   return unsubscribe;
  // }, [dispatch]);

  return (
      <div className='bg-netflix-black text-white'>
        <BrowserRouter>
        {/* {!user ? (
          <LogInScreen />
        ) : (
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )} */}
        <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
    
  )
}

export default App
