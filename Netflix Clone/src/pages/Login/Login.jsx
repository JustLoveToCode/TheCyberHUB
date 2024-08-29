import React, {useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

// Create Login Component Here
const Login = ()=>{
    const [signState, setsignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    // Creating the async function called user_auth Functionality
    const user_auth = async (event)=>{
        // It will not Reload the Website Pages when
        // we are Submitting the Form
        event.preventDefault();
        setLoading(true);
        if(signState ==="Sign In"){
            await login(email, password)
        } else{
            await signup(name, email, password)
        }
        setLoading(false)
    }


    return(
 loading ? <div className="login-spinner">
    <img src={netflix_spinner} alt=""/>
    </div>: 
    // Create the className called "login" here
    <div className="login">
        <img src={logo} className="login-logo" alt=""/>

        <div className="login-form">
            <h1>{signState}</h1>
            <form>
                {/* The input type is text, the value here is name */}
                {/* Using the onChange method here, it will allow you to reflect the
                Changes whenever the User were to change its typing of the data */}
                {/* Using the Ternary Conditional Operator here */}
                {signState === "Sign Up" ? <input type="text" value={name} onChange={(e)=>{
                // Using the useState Hook setName
                setName(e.target.value)
                }} placeholder="Enter Your Name"/>:
                <></>}
                {/* The input type is email, the value here is email */}
                {/* Using the useState Hook setEmail */}
                <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder= "Enter Your Email"/>
                {/* The input type is password, the value here is password */}
                {/* Using the useState Hook called setPassword */}
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/>
                
                <button onClick={user_auth} type='submit'>{signState}</button>
                <div className= "form-help">
                    {/* Create the div with the className remember */}
                    <div className="remember">
                        {/* The input type will be checkbox */}
                        <input type="checkbox"/>
                        <label htmlFor="">Remember Me</label>
                    </div>

                    <p>Need Help?</p>

                </div>

            </form>
        
            <div className="form-switch">
            {/* Using the Conditional Operator */}
                {signState==="Sign In"?
                <p>New to Netflix? <span onClick={()=>setsignState("Sign Up")}>Sign Up NOW</span></p>:
                <p>Already Have a Account? <span onClick={()=>setsignState("Sign In")}>Sign In NOW</span></p>}
            </div>
        </div>
    </div>  
    )  
}

export default Login