import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./signin.css";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    // Prepare the request body
    const user = {
      email,
      password: pass,
    };

    try {
      // Send a POST request to the sign-in route on the backend server
      const response = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // Parse the response
      const data = await response.json();

      if (response.ok) {
        // Sign-in successful, perform necessary actions (e.g., redirect the user)
        console.log("Sign-in successful");
        // Redirect the user to the dashboard page
        navigate("/dashboard");
      } else {
        // Sign-in failed, display an error message
        console.error("Sign-in failed:", data.error);
        // Display the error message to the user (e.g., using a toast or an alert)
        window.alert("Sign-in failed. Please try again.");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("An error occurred:", error);
      // Display an error message to the user (e.g., using a toast or an alert)
      window.alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div
        className="main-signin"
        style={{
          background: `url('https://2.bp.blogspot.com/-KpHW4-zOauU/Tl8q7NJNEbI/AAAAAAAAHAs/AL5Zp_I6qfk/s1600/amazing+background+images-2.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="auth-form-container  signin">
          <h1 className="heading">
            SIGN IN
            <span
              className="OnePirateTypography-markedH3Center"
              style={{ width: "5s.5rem", margin: "0 0 0 300px" }}
            ></span>
          </h1>
          <div>
            Not a member yet?
            <button
              className="link-btn-signin"
              onClick={() => navigate("/signup")}
            >
              Sign Up here
            </button>
          </div>
          <form className="signin-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              className="input-signin"
              value={email}
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="input-signin"
              value={pass}
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-signin" type="submit">
              SIGN IN
            </button>
          </form>
          <button
            style={{
              margin: "0px 0px 0px 200px",
              fontSize: "25px",
              border: "0",
              cursor: "pointer",
            }}
            onClick={() => navigate("/forget")}
          >
            Forgot Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;