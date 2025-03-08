import React, { useState } from 'react';
import '../../Styles/Auth.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [skills, setSkills] = useState([]);
    const [careerGoal, setCareerGoal] = useState('');
    const [interests, setInterests] = useState([]);

    const handleMultiSelect = (event, setter) => {
        const { options } = event.target;
        const selectedValues = Array.from(options).filter(option => option.selected).map(option => option.value);
        setter(selectedValues);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Signup Data:', { name, email, password, role, skills, careerGoal, interests });
    };

    return (
        <div className="signup-container">
            <div className="form-card">
                <div className="form-left">
                    <h1>Welcome Page</h1>
                    <p>Sign up to access exclusive content</p>
                </div>
                <div className="form-right">
                    <h2>Signup</h2>
                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="Mentor">Mentor</option>
                            <option value="Mentee">Mentee</option>
                        </select>
                        <select
                            multiple
                            value={skills}
                            onChange={(e) => handleMultiSelect(e, setSkills)}
                        >
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="C++">C++</option>
                            <option value="SQL">SQL</option>
                            <option value="MongoDB">MongoDB</option>
                            <option value="Django">Django</option>
                            <option value="React">React</option>
                            <option value="Node.js">Node.js</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            <option value="Docker">Docker</option>
                            <option value="Kubernetes">Kubernetes</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Networking">Networking</option>
                            <option value="Deep Learning">Deep Learning</option>
                        </select>
                        <select
                            value={careerGoal}
                            onChange={(e) => setCareerGoal(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Career Goal</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Cloud Architect">Cloud Architect</option>
                            <option value="AI Engineer">AI Engineer</option>
                            <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                            <option value="DevOps Engineer">DevOps Engineer</option>
                            <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                            <option value="Product Manager">Product Manager</option>
                        </select>
                        <select
                            multiple
                            value={interests}
                            onChange={(e) => handleMultiSelect(e, setInterests)}
                        >
                            <option value="AI">AI</option>
                            <option value="Big Data">Big Data</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Cloud Security">Cloud Security</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Game Development">Game Development</option>
                            <option value="Networking">Networking</option>
                            <option value="IoT">IoT</option>
                            <option value="Open Source">Open Source</option>
                        </select>
                        <button type="submit">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;