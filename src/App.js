import React, { useState } from 'react'
import Login from './Component/Login'
import Profile from './Component/Profile'
import './App.css';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <div className="App">
      {
        !isLoggedIn ? <Login onLogin={handleLogin} /> : <Profile />
      }
    </div>
  )
}

export default App