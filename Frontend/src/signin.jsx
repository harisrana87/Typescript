import React,{ useState } from "react"
import {useNavigate} from "react-router-dom"

import "./signin.css";




function Signin  (props){
    const {email,setEmail}=useState(' ')
    const {pass,setPassword}=useState(' ')
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email); 

    }



    return (
     <div  >    <div className="main-signin " style={{  
        background: `url('https://2.bp.blogspot.com/-KpHW4-zOauU/Tl8q7NJNEbI/AAAAAAAAHAs/AL5Zp_I6qfk/s1600/amazing+background+images-2.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} >
                
                <div  className="auth-form-container  signin "  > 
                
                

                
                <h1 className="heading"  >SIGN IN
                <span class="OnePirateTypography-markedH3Center" style={{width:'5s.5rem' , margin:'0 0 0 300px'}}> </span>
                </h1>
                {/* <p class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter ">Not a member yet? <a class="MuiTypography-root MuiTypography-inherit MuiTypography-alignCenter MuiLink-root MuiLink-underlineAlways " href="/mui/src/components/signup.jsx">Sign Up here</a></p> */}
                <div >
                  Not a member yet?<button  className=" link-btn-signin "  onClick={()=>navigate("/signup")}>Sign Up here</button> </div>
                <form className="signin-form " onSubmit={handleSubmit} >
                    <label htmlfor="email">Email</label>
                    <input className="input-signin" value={email} type="email" id="email" name="email" />
                    <label htmlfor="password">Password</label>
                    <input className="input-signin" value={pass} type="password"  id="password" name="password" />
                    <button className="btn-signin" onClick={()=>navigate("/")} type="submit"> SIGN IN</button>
                </form>
                {/* <button className="link-btn-signin"  onClick={() => props.onFormSwitch('forget')} > forgot Password</button> */}
                <button style={{ margin: '0px 0px 0px 200px', fontSize:'25px' , border:'0',cursor: 'pointer' }}   onClick={()=>navigate("/forget")} > Forgot Password</button>
           </div> </div>
           </div> 
    );
}

export default Signin;