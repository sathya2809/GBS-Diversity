import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaCog, FaBell } from 'react-icons/fa'
import '../../Styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="nav-link">WebsiteName</Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/mentor" className="nav-link">Mentor</Link>
        <Link to="/resource" className="nav-link">Resource</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </nav>
      <div className="header-right">
        <Link to="/notifications" className="nav-link"><FaBell /></Link>
        <Link to="/settings" className="nav-link"><FaCog /></Link>
        <Link to="/login" className="nav-link login-btn">Login</Link>
        <Link to="/signup" className="nav-link signup-btn">Signup</Link>
      </div>
    </header>
  )
}

export default Header