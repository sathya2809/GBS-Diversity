import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Styles/Mentor.css';

const Learning = () => {
  const navigate = useNavigate();

  // Sample data for learning resources
  const resources = [
    {
      id: 1,
      title: 'Introduction to AI',
      type: 'Course',
      description: 'Learn the fundamentals of Artificial Intelligence and Machine Learning.'
    },
    {
      id: 2,
      title: 'Leadership in Tech',
      type: 'Webinar',
      description: 'Develop essential leadership skills for technology roles.'
    },
    {
      id: 3,
      title: 'Future of Work',
      type: 'Article',
      description: 'Insights into evolving workplace trends and adaptations.'
    },
    {
      id: 4,
      title: 'Advanced Cloud Architecture',
      type: 'Course',
      description: 'Master cloud infrastructure and distributed systems.'
    },
    {
      id: 5,
      title: 'Diversity in Tech',
      type: 'Webinar',
      description: 'Building inclusive tech teams and fostering innovation.'
    }
  ];

  return (
    <div className="learning-resources">
      <h2>Learning Resources</h2>
      <div className="resource-cards">
        {resources.map(resource => (
          <div key={resource.id} className="resource-card">
            <h3>{resource.title}</h3>
            <p>Type: {resource.type}</p>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
      <button className="more-btn" onClick={() => navigate('/resource')}>
        More
      </button>
    </div>
  );
};

export default Learning;