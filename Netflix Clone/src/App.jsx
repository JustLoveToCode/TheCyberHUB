import React, {useEffect} from 'react'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import { Routes, Route, useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const navigate = useNavigate();
  
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate("/")
      } else{
        console.log("Logged Out");
        navigate("/login")
      }
    })
  }, [])
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        {/* When the Route path is "/", the Home Component will be shown */}
        <Route path="/" element={<Home/>}/>
        {/* When the Route path is login, the Login Component will be shown */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/player/:id" element={<Player/>}/>
        
      </Routes>
      {/* Import the Home Component into the App Component
      which also have the Navbar Component */}
    </div>
  )
}

export default App
