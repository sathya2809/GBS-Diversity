import React, { useEffect, useState } from 'react';
import '../../Styles/Mentor.css';

const Matching = () => {
  const [mentors, setMentors] = useState([]); // State to store matched mentors
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  const fetchProfileDetails = async (mentorId) => {
    try {
      const response = await fetch('http://localhost:3000/getProfileDataWithID', {
        method: 'POST', // Use POST instead of GET
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: mentorId }), // Send user_id in the body
      });
  
      const data = await response.json();
      if (response.ok) {
        return data; // Return the profile details
      } else {
        throw new Error(data.message || 'Failed to fetch profile details');
      }
    } catch (error) {
      setProfileError(error.message || 'Error fetching profile details');
      return null; // Return null if there was an error fetching the profile
    }
  };
  
  // Function to fetch matched mentors from the API
  const fetchMatchedMentors = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
      if (!user || !user.data?.user_id) {
        setError('User not logged in. Please log in.');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:3000/getMatchedMentors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: user.data.user_id }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const mentorsWithProfiles = await Promise.all(data.map(async (mentor) => {
          const profile = await fetchProfileDetails(mentor.mentor_id);
          return { ...mentor, profile }; // Add profile details to mentor object
        }));
        console.log(mentorsWithProfiles);
        setMentors(mentorsWithProfiles); 
      } else {
        throw new Error(data.message || 'Failed to fetch matched mentors');
      }
    }catch (error) {
      setError(error.message || 'Error fetching matched mentors');
    } finally {
      setLoading(false); // Stop loading after API call
    }
  };

  // Fetch matched mentors on component mount
  useEffect(() => {
    fetchMatchedMentors();
  }, []);

  const handleRequestMentorship = (mentorId) => {
    alert(`Mentorship request sent to mentor with ID: ${mentorId}`);
  };

  if (loading) {
    return <p>Loading matched mentors...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="matching-suggestions">
      <h2>Matching Suggestions</h2>
      <div className="mentor-cards">
        {mentors.map((mentor) => (
          <div key={mentor.mentor_id} className="mentor-card">
            <img src="/user.png" alt={mentor.mentor_name} className="mentor-photo" />
            <h3>{mentor.mentor_name}</h3>
            <p>Match Score: {mentor.match_score}%</p>

            {/* Displaying profile details */}
            {mentor.profile && mentor.profile.data && (
              <div className="mentor-profile">
                <h4>Career Goal: {mentor.profile.data.career_goal}</h4>
                <p><strong>Description:</strong> {mentor.profile.data.description}</p>
                <p><strong>Email:</strong> {mentor.profile.data.email}</p>
                
                <div>
                  <strong>Interests:</strong>
                  <ul>
                    {mentor.profile.data.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong>Skills:</strong>
                  <ul>
                    {mentor.profile.data.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <button
              className="request-mentorship-btn"
              onClick={() => handleRequestMentorship(mentor.mentor_id)}
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