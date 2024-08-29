import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
// Import the Link from react-router-dom
import { Link } from 'react-router-dom'



// Create the Component TitleCards
// Passing Down the title props
const TitleCards = ({title, category}) => {
  // Set the initial state to be Empty Array
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEwMGViZjhmNjlkNmM1ZWFkODVhZmQ5MDY2ODViMCIsIm5iZiI6MTcyNDc1NDgyNy44MzQyNzIsInN1YiI6IjY2Y2RhYTRjZDU0NThjMDk1ZmEyOWZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EMcNvo-8jy5hV_KxFo4JhnfhZ3Z1ZibTOSQ6hXDvBkQ'
    }
  };
  
  
  // Create the function handleWheel that allow
  // you to scroll to the left or right
const handleWheel = (event)=>{
  // Prevent the Default Scroll on the Y axis
 event.preventDefault();
  // Allowing the scroll to be to the left or right
  // as compared to the Default Behavior of Up and Down Scroll Behavior
 cardsRef.current.scrollLeft += event.deltaY
}

// Using the useEffect Hook with the Empty Dependency
// It mean that the EventListener is MOUNTED ONCE
useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
cardsRef.current.addEventListener('wheel', handleWheel)
}, [])

  return (
    <div className="titlecards">
      {/* Using the Ternary Conditional Operator */}
      <h2>{title?title : "POPULAR on Netflix"} </h2>
      <div className="card-list" ref={cardsRef}> 
        {/* Using the map method and getting each card and index for Each Iteration
        and returning the div with the className = "card" and the index */}
        {/* Using the map method here */}
        {apiData.map((card, index)=>{
          // The to is to the Particular URL here where we will provide the path URL
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            {/* Concatenate the URL Full Path using the + Operator */}
            {/* Using the API or Application Programming Interface(API)*/}
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt=""/>
            {/* Using the card.original_title */}
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
