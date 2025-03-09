import React, { useState, useEffect } from 'react';
import '../../Styles/Mentor.css';

const AllMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const [requestSentStatus, setRequestSentStatus] = useState({});
  const getRandomExperience = () => Math.floor(Math.random() * 5) + 1;
  // Fetch mentors from the API
  const fetchMentors = async () => {
    try {
      const response = await fetch('http://localhost:3000/getAllMentors', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        setMentors(data.data); // Assuming `mentors` is inside `data.data`
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message || 'Error fetching mentors');
    } finally {
      setLoading(false); // Stop loading once the fetch is complete
    }
  };

  // Fetch mentors on component mount
  useEffect(() => {
    fetchMentors();
  }, []);

  // Handle mentorship request
  const handleRequestMentorship = async (mentorEmail,mentorName,mentor) => {
    try {
      // Retrieve mentee_id from local storage
      const user = JSON.parse(localStorage.getItem('user')); // Parse localStorage data
      if (!user || !user.data?.user_id) {
        alert('User not logged in. Please log in to request mentorship.');
        return;
      }

      const menteeEmail = user.data.email;
      const menteeName= user.data.mentee_name;
      console.log(menteeEmail);
      //menteeEmail, mentorEmail, menteeName, mentorName
      const response = await fetch('http://localhost:3000/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          menteeEmail: menteeEmail,
          mentorEmail: mentorEmail,
          menteeName: menteeName,
          mentorName: mentorName
        }),
      });

      const data = await response.json();
      console.log(data);
      alert(data.message);
      setRequestSentStatus((prevStatus) => ({
        ...prevStatus,
        [mentor.mentor_id]: true, // Disable the button for the specific mentor
      }));
    } catch (error) {
      console.error('Error requesting mentorship:', error);
      alert('Error requesting mentorship: ' + error.message);
    }
  };

  if (loading) {
    return <p>Loading mentors...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="all-mentor">
      <h2>All Mentors</h2>
      <div className="mentor-cards">
        {mentors.map((mentor) => (
          <div key={mentor._id} className="mentor-card">
            <img src="/user.png" alt={mentor.name} className="mentor-photo" />
            <h3>{mentor.mentor_name}</h3>
            <p>Skills: {mentor.skills.join(', ')}</p>
            <p>Experience: {getRandomExperience()} years</p>
            <p>Interests: {mentor.interests.join(', ')}</p>
            <button
              className="request-mentorship-btn"
              onClick={() => handleRequestMentorship(mentor.email,mentor.mentor_name,mentor)}
              disabled={requestSentStatus[mentor.mentor_id]} // Disable only the button for the specific mentor
              >
              {requestSentStatus[mentor.mentor_id] ? 'Request Mentorship' : 'Request Mentorship'} {/* Display message */}
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMentor;
