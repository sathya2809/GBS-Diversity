import React from 'react';
import '../../../Styles/Mentor.css';

const Matching = () => {
  // Sample data for matching suggestions
  const suggestions = [
    {
      id: 1,
      name: 'Michael Brown',
      photo: '/user.png',
      skills: ['Java', 'Spring', 'Microservices'],
      experience: '8 years',
      interests: ['Gaming', 'Music'],
      matchScore: '90%'
    },
    {
      id: 2,
      name: 'Emily White',
      photo: '/user.png',
      skills: ['C++', 'Algorithms', 'Data Structures'],
      experience: '6 years',
      interests: ['Running', 'Photography'],
      matchScore: '85%'
    },
    {
      id: 3,
      name: 'Sarah Green',
      photo: '/user.png',
      skills: ['Ruby', 'Rails', 'PostgreSQL'],
      experience: '4 years',
      interests: ['Cooking', 'Traveling'],
      matchScore: '88%'
    },
    {
      id: 4,
      name: 'David Black',
      photo: '/user.png',
      skills: ['PHP', 'Laravel', 'MySQL'],
      experience: '5 years',
      interests: ['Gaming', 'Reading'],
      matchScore: '87%'
    },
    {
      id: 5,
      name: 'John Doe',
      photo: '/user.png',
      skills: ['JavaScript', 'React', 'Node.js'],
      experience: '5 years',
      interests: ['Hiking', 'Reading'],
      matchScore: '89%'
    }
  ];

  const handleRequestMentorship = (mentorId) => {
    alert(`Mentorship request sent to mentor with ID: ${mentorId}`);
  };

  return (
    <div className="matching-suggestions">
      <h2>Matching Suggestions</h2>
      <div className="mentor-cards">
        {suggestions.map(mentor => (
          <div key={mentor.id} className="mentor-card">
            <img src={mentor.photo} alt={mentor.name} className="mentor-photo" />
            <h3>{mentor.name}</h3>
            <p>Skills: {mentor.skills.join(', ')}</p>
            <p>Experience: {mentor.experience}</p>
            <p>Interests: {mentor.interests.join(', ')}</p>
            <p>Match Score: {mentor.matchScore}</p>
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

export default Matching;