import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
      <Topbar />
      <ul>
        <li>
          <Link to="/project/1" target="_blank">
            <span>project1</span>
          </Link>
        </li>
        <li>
          <Link to="/project/2" target="_blank">
            <span>project2</span>
          </Link>
        </li>
        <li>
          <Link to="/project/3" target="_blank">
            <span>project3</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeScreen;
