import { useState } from 'react';
import './project_11.scss';

const Project_11 = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow((dt) => !dt);
  };
  return (
    <div className="project_11">
      {show && (
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Shop</li>
          </ul>
        </div>
      )}
      {show ? (
        <i onClick={handleMenu} class="fas fa-times"></i>
      ) : (
        <i onClick={handleMenu} className="fas fa-bars"></i>
      )}
    </div>
  );
};

export default Project_11;
