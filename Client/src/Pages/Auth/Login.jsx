import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../Styles/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields!');
            return;
        }
        console.log('Login Data:', { email, password });
        navigate('/');
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
