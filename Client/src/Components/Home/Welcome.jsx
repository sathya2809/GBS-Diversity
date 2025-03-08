import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Home/Welcome.css'

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-content">
        <h1 className="welcome-title" style={{ color: 'white' }}>Welcome to WebsiteName</h1>
        <p className="welcome-text">Your career mentorship platform</p>
        <p className="welcome-text">Your dashboard provides a quick snapshot of your mentorship journey.</p>
        <p className="welcome-text">Connect with experienced mentors, access valuable resources, and track your progress.</p>
        <Link to="/mentor" className="mentor-dashboard-btn">Go to Mentor Dashboard</Link>
      </div>
    </div>
  )
}

export default Welcome