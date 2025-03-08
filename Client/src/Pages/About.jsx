import React from 'react'
import '../Styles/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095" alt="Women Tech Conference" className="hero-image" />
      </div>
      <h1>About Our Women in Tech Mentorship Platform</h1>
      
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>We are dedicated to empowering women in technology through meaningful mentorship connections and career development opportunities.</p>
      </section>

      <section className="features-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Mentorship" className="feature-icon" />
            <h3>1:1 Mentorship</h3>
            <p>Connect with experienced professionals in your desired tech field.</p>
          </div>
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1560264280-88b68371db39" alt="Career" className="feature-icon" />
            <h3>Career Guidance</h3>
            <p>Get personalized advice on career paths and skill development.</p>
          </div>
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0" alt="Network" className="feature-icon" />
            <h3>Network Building</h3>
            <p>Join a community of like-minded women in technology.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About