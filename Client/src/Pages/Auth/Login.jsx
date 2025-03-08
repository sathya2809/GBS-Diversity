import React, { useState } from "react";
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
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-content">
          <h1>Welcome Page</h1>
          <p>Log in to continue access</p>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-form">
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Continue</button>
          </form>
          <div className="social-login">
            <p>Or Connect with Social Media</p>
            <button className="twitter-btn">Sign In with Twitter</button>
            <button className="facebook-btn">Sign In with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
