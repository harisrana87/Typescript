import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return window.alert("Please fill in all fields");
    }

    try {
      const response = await axios.post("/Signup", {
        email,
        password,
      });

      if (response.status === 201) {
        window.alert("User registered successfully");
        navigate("/");
      } else {
        window.alert("An error occurred during registration");
      }
    } catch (error) {
      console.log(error);
      window.alert("An error occurred during registration");
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Auth;