import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-[url("https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224648-4918717.png")]'>
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeRoc_BhrP-jahuwf0Hrxe48LiP6DiHWiiw&s" alt="Netflix Logo" />
            <select name="" id="">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
            <button>Sign In</button>
        </nav>

        <main>
            <h1>Unlimited movies,</h1>
            <h1>TV shows and more</h1>
            <h2>Starts at ₹149. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div>
                <input type="email" name="" id="" />
                <button>Get Started</button>
            </div>
        </main>
    </div>
  )
}

export default LoginPage
