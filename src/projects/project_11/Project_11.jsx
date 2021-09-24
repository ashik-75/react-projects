import { useState } from 'react';
import './project_11.scss';

const Project_11 = () => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse((dt) => !dt);
  };
  return (
    <div className="project_11">
      <div className={collapse ? 'container collapse' : 'container'}>
        <button onClick={handleCollapse}>
          <i className="fas fa-times"></i>
          <i className="fas fa-bars"></i>
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
  );
};

export default Project_11;
