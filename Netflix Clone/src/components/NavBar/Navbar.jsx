import React, {useRef, useEffect} from 'react'
import './Navbar.css'
// Import the logo
import logo from '../../assets/logo.png'
// Import the search_icon
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = ()=>{
    const navRef = useRef();

    useEffect(()=>{
    // Adding the addEventListener Event for the Scroll Functionality
    window.addEventListener("scroll",()=>{
        // If the window.scrollY is more than 80
        if(window.scrollY >= 80){
            navRef.current.classList.add('nav-dark');
        } else{
            navRef.current.classList.remove('nav-dark'); 
        }
    })
}, [])
    // Using the return statement here
    return(
        <div ref={navRef} className='navbar'>
            <div className="navbar-left">
                {/* Use the logo by using the Curly Braces */}
                <img src={logo} alt=""/>
                {/* Creating the li tags inside the ul tags */}
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse By Languages</li>
                </ul>
            </div>

            <div className="navbar-right">
                {/* Putting the search_icon */}
                <img src={search_icon} alt="" className="icons"/>
                <p>Children</p>
                {/* Putting the search_icon here */}
                <img src={bell_icon} alt="" className="icons"/>

            <div className="navbar-profile">
                <img src={profile_img} alt="" className="profile"/>
                <img src={caret_icon} alt=""/>
                <div className="dropdown">
                    <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Navbar