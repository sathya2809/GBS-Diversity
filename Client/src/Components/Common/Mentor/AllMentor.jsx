import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import '../../../Styles/Mentor.css';

const AllMentor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('all');

  // Sample data for mentors
  const mentors = [
    {
      id: 1,
      name: 'John Doe',
      photo: '/user.png',
      skills: ['JavaScript', 'React', 'Node.js'],
      experience: '5 years',
      interests: ['Hiking', 'Reading']
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: '/user.png',
      skills: ['Python', 'Django', 'Data Science'],
      experience: '7 years',
      interests: ['Traveling', 'Cooking']
    },
    {
      id: 3,
      name: 'Michael Brown',
      photo: '/user.png',
      skills: ['Java', 'Spring', 'Microservices'],
      experience: '8 years',
      interests: ['Gaming', 'Music']
    },
    {
      id: 4,
      name: 'Emily White',
      photo: '/user.png',
      skills: ['C++', 'Algorithms', 'Data Structures'],
      experience: '6 years',
      interests: ['Running', 'Photography']
    },
    {
      id: 5,
      name: 'Sarah Green',
      photo: '/user.png',
      skills: ['Ruby', 'Rails', 'PostgreSQL'],
      experience: '4 years',
      interests: ['Cooking', 'Traveling']
    },
    {
      id: 6,
      name: 'David Black',
      photo: '/user.png',
      skills: ['PHP', 'Laravel', 'MySQL'],
      experience: '5 years',
      interests: ['Gaming', 'Reading']
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill === 'all' || mentor.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  const handleRequestMentorship = (mentorId) => {
    alert(`Mentorship request sent to mentor with ID: ${mentorId}`);
  };

  return (
    <div className="all-mentor">
      <h2>All Mentors</h2>
      <div className="search-filter-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-section">
          <FaFilter className="filter-icon" />
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="all">All Skills</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            <option value="Django">Django</option>
            <option value="Data Science">Data Science</option>
            <option value="Java">Java</option>
            <option value="Spring">Spring</option>
            <option value="Microservices">Microservices</option>
            <option value="C++">C++</option>
            <option value="Algorithms">Algorithms</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Ruby">Ruby</option>
            <option value="Rails">Rails</option>
            <option value="PostgreSQL">PostgreSQL</option>
            <option value="PHP">PHP</option>
            <option value="Laravel">Laravel</option>
            <option value="MySQL">MySQL</option>
          </select>
        </div>
      </div>
      <div className="mentor-cards">
        {filteredMentors.map(mentor => (
          <div key={mentor.id} className="mentor-card">
            <img src={mentor.photo} alt={mentor.name} className="mentor-photo" />
            <h3>{mentor.name}</h3>
            <p>Skills: {mentor.skills.join(', ')}</p>
            <p>Experience: {mentor.experience}</p>
            <p>Interests: {mentor.interests.join(', ')}</p>
            <button
              className="request-mentorship-btn"
              onClick={() => handleRequestMentorship(mentor.id)}
            >
              Request Mentorship
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMentor;