import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCog, FaBell } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../operations/services/authApi';
import '../../Styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.jpeg" alt="MentHer Logo" className="header-logo" />
        <Link to="/" className="text-gray-800 font-bold text-xl hover:text-orange-500 transition duration-300">
          <break></break>
          <span className="text-gradient">MentHer</span>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/mentor" className="nav-link">Mentor</Link>
        <Link to="/mentee" className="nav-link">Mentee</Link>
        <Link to="/resource" className="nav-link">Resource</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </nav>
      <div className="header-right">
        <Link to="/notifications" className="nav-link"><FaBell /></Link>
        <Link to="/settings" className="nav-link"><FaCog /></Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
        ) : (
          <>
            <Link to="/login" className="nav-link login-btn">Login</Link>
            <Link to="/signup" className="nav-link signup-btn">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;