import React, { useState } from 'react';
import Sidebar from '../Components/Common/Mentor/Sidebar';
import AllMentor from '../Components/Common/Mentor/AllMentor';
import Matching from '../Components/Common/Mentor/Matching';
import Learning from '../Components/Common/Mentor/Learning';
import '../Styles/Mentor.css';

const Mentor = () => {
  const [selectedComponent, setSelectedComponent] = useState('all');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'all':
        return <AllMentor />;
      case 'matching':
        return <Matching />;
      case 'learning':
        return <Learning />;
      default:
        return <AllMentor />;
    }
  };

  return (
    <div className="mentor-page">
      <Sidebar setSelectedComponent={setSelectedComponent} />
      <div className="mentor-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Mentor;