import React from 'react'
import './Home.css'
// Import the Navbar Component Here
import Navbar from '../../components/NavBar/Navbar'
// Import the hero_banner.jpg from the assets folder
import hero_banner from '../../assets/hero_banner.jpg'
// Import the hero_title.png from the assets folder
import hero_title from '../../assets/hero_title.png'
// Import the play_icon.png from the assets folder
import play_icon from '../../assets/play_icon.png'
// Import the info_icon.png from the assets folder
import info_icon from '../../assets/info_icon.png'
// Import the TitleCards from the components folder
// Do not need to add the .jsx extension at the back
import TitleCards from '../../components/TitleCards/TitleCards'
// Import the Footer Component from the components folder
import Footer from '../../components/Footer/Footer'

// Create the Home Component Here
const Home = () => {
  return (
    // Create the className called "home" here
    <div className="home">
    {/* Import the Navbar Component Here and Display them */}
      <Navbar/>
      <div className="hero">
        {/* Getting the image of the hero_banner using the {} */}
        <img src={hero_banner} alt="" className="banner-img"/>
        <div className="hero-caption">
          {/* Getting the image of the hero_title using the {}*/}
          <img src={hero_title} alt="" className="caption-img"/>
          <p>Discovering my favourite Netflix Show, Using ReactJs Full Stack Development to 
            create the Netflix Clone and I am Enjoying the Process
            of creating them. 
          </p>
          {/* The div that encompasses the btn and btn dark-btn */}
          <div className="hero-btns">
              {/* Getting the play_icon from the assets folder 
              and the className of btn */}
              <button className="btn"><img src={play_icon} alt=""/>Play</button>
              {/* Getting the info_icon from the assets folder and the className of btn
              and the dark-btn*/}
              <button className="btn dark-btn"><img src={info_icon} alt=""/>More Info</button>
          </div>
          {/* Since we are not passing any data, it will display the default of now_playing */}
          <TitleCards/>
        </div>
      </div>
      {/* Creating the DIFFERENT TitleCards Component with the Different title */}
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming Movies"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      {/* Adding the Footer Component Here */}
      <Footer/>

    </div>
  )
}

export default Home
