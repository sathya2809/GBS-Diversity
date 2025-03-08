import React from 'react'
import MatchStatus from '../Components/Common/Home/MatchStatus'
import Upcoming from '../Components/Common/Home/Upcoming'
import Rating from '../Components/Common/Home/Rating'
import Welcome from '../Components/Common/Home/Welcome'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <div className="home-section">
        <MatchStatus />
      </div>
      <div className="home-section">
        <Upcoming />
      </div>
      <div className="home-section">
        <Rating />
      </div>
    </div>
  )
}

export default Home