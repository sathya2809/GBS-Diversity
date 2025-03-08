import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "../../Styles/Auth.css";
import { login } from "../../operations/services/authApi";
import {useDispatch} from "react-redux";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    
    dispatch(login(email,password,navigate))
  };

    return (
        <div className="auth-container">
            <h2>Login</h2> {/* Add title for the login page */}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>or</p>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
    );
};

export default Login;
