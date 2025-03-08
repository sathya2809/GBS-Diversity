<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../Styles/Auth.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('mentee'); // Add role state
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields!');
            return;
        }
        console.log('Signup Data:', { username, email, password, role });
        navigate('/');
=======
import React, { useState, useEffect } from 'react';

const Signup = () => {
    const careerGoals = [
        "Software Engineer", "Data Scientist", "Cloud Architect", "AI Engineer",
        "Cybersecurity Analyst", "Full Stack Developer", "DevOps Engineer",
        "Machine Learning Engineer", "Product Manager"
    ];

    const skills = [
        "Python", "Java", "JavaScript", "C++", "SQL", "MongoDB", "Django",
        "React", "Node.js", "Machine Learning", "Cybersecurity", "Cloud Computing",
        "Docker", "Kubernetes", "Blockchain", "Networking", "Deep Learning"
    ];

    const interests = [
        "AI", "Big Data", "Web Development", "Cybersecurity", "Cloud Security",
        "Blockchain", "Game Development", "Networking", "IoT", "Open Source"
    ];

    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleSkillToggle = (skill) => {
        setSelectedSkills(prevSkills =>
            prevSkills.includes(skill)
                ? prevSkills.filter(s => s !== skill)
                : [...prevSkills, skill]
        );
>>>>>>> d67a993ccdd993daf48fb4c8f3217364f909e7c8
    };

    const handleInterestToggle = (interest) => {
        setSelectedInterests(prevInterests =>
            prevInterests.includes(interest)
                ? prevInterests.filter(i => i !== interest)
                : [...prevInterests, interest]
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            const authContainer = document.querySelector('.auth-container');
            authContainer.style.backgroundColor = window.scrollY > 100 ? 'white' : '#e0f7fa';
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
<<<<<<< HEAD
        <div className="auth-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
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
                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="mentee">Mentee</option>
                    <option value="mentor">Mentor</option>
                </select>
                <button type="submit">Signup</button>
            </form>
            <p>or</p>
            <p>Already have an account? <Link to="/login">Login</Link></p>
=======
        <div className="auth-container" style={{ background: 'linear-gradient(135deg,rgb(168, 112, 167) 0%,rgb(161, 98, 135) 100%)', padding: '80px 40px', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="form-card" style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '3px solid',
                borderImage: 'linear-gradient(135deg, #6a11cb, #2575fc) 1',
                width: '100%',
                maxWidth: '600px'
            }}>
                <h2 className="form-title">Signup Page</h2>

                <input type="email" placeholder="Email ID" style={{ width: '100%', marginBottom: '10px' }} />
                <input type="text" placeholder="Name" style={{ width: '100%', marginBottom: '10px' }} />

                <select style={{ width: '100%', marginBottom: '10px' }}>
                    <option>Mentor</option>
                    <option>Mentee</option>
                </select>

                <textarea placeholder="Description" style={{ width: '100%', marginBottom: '10px' }}></textarea>

                <select style={{ width: '100%', marginBottom: '10px' }}>
                    {careerGoals.map(goal => (
                        <option key={goal}>{goal}</option>
                    ))}
                </select>

                <div className="section-title">Skills</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
                    {skills.map(skill => (
                        <div key={skill}>
                            <input
                                type="checkbox"
                                id={skill}
                                checked={selectedSkills.includes(skill)}
                                onChange={() => handleSkillToggle(skill)}
                            />
                            <label htmlFor={skill} style={{ marginLeft: '5px' }}>{skill}</label>
                        </div>
                    ))}
                </div>

                <div className="section-title">Interests</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '40px' }}>
                    {interests.map(interest => (
                        <div key={interest}>
                            <input
                                type="checkbox"
                                id={interest}
                                checked={selectedInterests.includes(interest)}
                                onChange={() => handleInterestToggle(interest)}
                            />
                            <label htmlFor={interest} style={{ marginLeft: '5px' }}>{interest}</label>
                        </div>
                    ))}
                </div>

                <input type="password" placeholder="Password" style={{ width: '100%', marginBottom: '10px' }} />
                <input type="password" placeholder="Confirm Password" style={{ width: '100%', marginBottom: '20px' }} />

                <button style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                    color: 'white',
                    padding: '10px 0',
                    border: 'none',
                    borderRadius: '6px'
                }}>Signup</button>
            </div>
>>>>>>> d67a993ccdd993daf48fb4c8f3217364f909e7c8
        </div>
    );
};

export default Signup;