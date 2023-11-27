import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fname":
        setFirstName(value);
        break;
      case "lname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const postData = async (e) => {
    e.preventDefault();
    const user = { fname, lname, email, password };

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("Registered");
        console.log("Registered");
        navigate("/signin");
      } else {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }
    } catch (error) {
      console.error(error);
      // Handle any network or server errors
    }
  };

  return (
    <div
      className="main-signup"
      style={{
        background: `url('https://2.bp.blogspot.com/-KpHW4-zOauU/Tl8q7NJNEbI/AAAAAAAAHAs/AL5Zp_I6qfk/s1600/amazing+background+images-2.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="auth-form-container signup">
        <h1 className="heading">
          SIGN UP
          <span
            className="OnePirateTypography-markedH3Center"
            style={{ width: "7.5rem", margin: "0 0 0 300px" }}
          ></span>
        </h1>
        <p
          className="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-fbr3h0"
          style={{ margin: "0 10px 40px 150px" }}
        >
          <a
            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1wsqe1z"
            href="/signin"
          >
            Already have an account?
          </a>
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="fname">First Name</label>
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="name-input">
            <input
              className="input-signup"
              type="text"
              id="fname"
              name="fname"
              value={fname}
              onChange={handleInputs}
            />
            <input
              className="input-signup"
              type="text"
              id="lname"
              name="lname"
              value={lname}
              onChange={handleInputs}
            />
          </div>
          <label htmlFor="email">Email</label>
          <input
            className="input-signup"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputs}
          />
          <label htmlFor="password">Password</label>
          <input
            className="input-signup"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputs}
          />
          <button
            className="link-btn-signup"
            onClick={postData}
            type="submit"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;