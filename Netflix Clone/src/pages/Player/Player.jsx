import React,{useEffect, useState} from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  // Using the useParams() Hook
  // This will extract the /:id from the Website URL
  const {id} = useParams();
  const navigate = useNavigate();
  // apiData = {name: "", key="", published_at:"", typeof=""}
  const [apiData, setApiData] = useState({
    name: "",
    key:"",
    published_at:"",
    typeof: ""
  })
  // Create the Empty Array to Handle the Lists Of Comments:
  const [comments, setComments] = useState([]);

  // Creating the Comment Box for User to Comment On:
  const [newComments, setNewComments] = useState('');

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEwMGViZjhmNjlkNmM1ZWFkODVhZmQ5MDY2ODViMCIsIm5iZiI6MTcyNDc1NDgyNy44MzQyNzIsInN1YiI6IjY2Y2RhYTRjZDU0NThjMDk1ZmEyOWZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EMcNvo-8jy5hV_KxFo4JhnfhZ3Z1ZibTOSQ6hXDvBkQ'
    }
  };
  

  // Using the useEffect Hook
  useEffect(()=>{
    // Using the useParams Hook here
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    // Getting the results and getting the first item from the Array
    // From the results, we need the first item from the Array
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  // Any Change in the id, the useEffect will Re-render itself
  },[id])

  // Create the Functionality for handleCommentChange
  // to listen for any Changes in the Comments
  const handleCommentChange = (e) =>{
    setNewComments(e.target.value);
  }

  const handleCommentSubmission = () =>{
    if(newComments.trim()){
      // Getting the existing comment and also
      // the Incoming Comments, where comments is initially an Empty Array
      setComments([...comments, newComments.trim()])
      // After the Submission, set it back to the Empty Array again
      setNewComments('')
    }
  }
  
  // This is the return statement
  return (
  <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      {/* Creating the iframe here */}
      <iframe width='90%' height='90%'
      // Using the apiData.key here
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>

      <div className="player-info">
        {/* Using the slice(0,10) which is the JavaScript Notation*/}
        {/* Provide the index 0 and 10 */}
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

<div class="parent-comment">
      {/* Display list of comments */}
      <div>
        <h3>Comment Down Below</h3>
        {/* Using the map method to Iterate through the comments Array */}
        {comments.map((comment, index) => (
          <div key={index}>
            {/* Display them on the screen in paragraph format. */}
            <p>{comment}</p>
          </div>
        ))}
      </div>

      <textarea
        className="textareabox"
        type="text"
        value={newComments}
        onChange={handleCommentChange}
        placeholder="Add Your Comment Here...."
      />

      <button className="submit-comment-button" onClick={handleCommentSubmission}>Submit</button>
</div>

</div>
    

  )
}

export default Player
