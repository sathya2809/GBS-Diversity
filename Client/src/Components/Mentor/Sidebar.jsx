import React from 'react';
import '../../Styles/Mentor.css';

const Sidebar = ({ setSelectedComponent }) => {
  return (
    <div className="sidebar">
      <button onClick={() => setSelectedComponent('all')}>
        All Mentors
      </button>
      <button onClick={() => setSelectedComponent('matching')}>
        Matching Suggestions
      </button>
      <button onClick={() => setSelectedComponent('learning')}>
        Learning Resources
      </button>
    </div>
  );
};

export default Sidebar;