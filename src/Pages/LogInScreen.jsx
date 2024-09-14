import React, { useState } from 'react'
import SignIn from './SignIn'
import GetStarted from './GetStarted'

const LogInScreen = () => {

    const [signIn, setSignIn] = useState(false)

  return (
    <div>
      {
        signIn ? <SignIn /> : <GetStarted setSignIn={setSignIn} />
      }
    </div>
  )
}

export default LogInScreen
