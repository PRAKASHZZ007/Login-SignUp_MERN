import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/Signup.css"
function Signup() {    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!name || !email || !password) {
            alert("Please fill in all fields");
            return;
        }

        axios.post("http://localhost:3001/register", { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    alert("Registration successful! Please log in.");
                    navigate("/login"); // Redirect to login page after successful registration
                } else {
                    alert("Registration failed. Please try again.");
                }
            })
            .catch(err => {
                console.log(err);
                alert("An error occurred. Please try again.");
            });
    }

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2><center>Sign Up</center></h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="btn btn-primary w-100">
                        Sign Up
                    </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-link">Login</Link>
            </div>
        </div>
    );
}

export default Signup;
