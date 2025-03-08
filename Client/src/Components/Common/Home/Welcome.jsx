import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Styles/Home/Welcome.css'

const Welcome = () => {
  return (
    <div className="welcome-section" style={{ backgroundImage: 'url(/bg.jpg)', textAlign: 'center' }}>
      <h1>Welcome to Websitename</h1>
      <p>Your career mentorship platform</p>
      <p>Your dashboard provides a quick snapshot of your mentorship journey.</p>
      <p>Connect with experienced mentors, access valuable resources, and track your progress.</p>
      <Link to="/mentor" className="mentor-dashboard-btn">Go to Mentor Dashboard</Link>
    </div>
  )
}

export default Welcome