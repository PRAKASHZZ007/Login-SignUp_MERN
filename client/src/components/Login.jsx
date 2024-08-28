import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/Login.css"

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are not empty
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          onLogin(); // Call the onLogin function passed from App.jsx
          navigate("/home");
        } else {
          alert("You are not registered to this service");
          navigate("/register");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Login failed. Please try again.");
      });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2><center>Login</center></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="text"
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder='Enter Password'
              name='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register" className="btn btn-link">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
