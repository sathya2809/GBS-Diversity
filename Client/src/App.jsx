import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Mentor from './Pages/Mentor'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Notifications from './Pages/Notifications'
import Resource from './Pages/Resource' // Import Resource page
import Header from './Components/Common/Header'
import { ThemeProvider } from './Context/ThemeToggle.jsx'
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Router>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mentor" element={<Mentor />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App