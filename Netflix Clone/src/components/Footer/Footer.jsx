import React from 'react'
import './Footer.css'
// Importing the Different Icons from the assets folder
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

// Create the Footer Component
const Footer = ()=>{
    return(
    // Creating the div with the className footer
    <div className="footer">
        
        <div className="footer-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook_icon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="Instagram" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter_icon} alt="Twitter" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtube_icon} alt="YouTube" />
                </a>
        </div>

        {/* Creating the li tags that is inside the ul tag */}
        <ul>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Term Of Usages</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookies Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>

        <p className="copyright-text">1997 - 2003 Netflix, Inc</p>

    </div>
    )
}

export default Footer;