import { useState } from 'react';
import './project_12.scss';

const Project_12 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible((dt) => !dt);
  };
  return (
    <div className="project_12">
      {isVisible ? (
        <div className="card">
          <div className="card-title">This is Card Text</div>
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            placeat. Lorem ipsum dolor sit amet.
          </div>
          <button onClick={handleVisible}>Close</button>
        </div>
      ) : (
        <button onClick={handleVisible}>Open </button>
      )}
    </div>
  );
};

export default Project_12;
