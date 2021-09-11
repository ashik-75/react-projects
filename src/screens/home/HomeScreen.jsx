import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Link } from 'react-router-dom';
import './homeScreen.scss';
import Project from '../../components/project/Project';

const projectsInfo = [
  { id: 1, title: 'Auto Meal Generator', url: '/project/1' },
  { id: 2, title: 'Blog Post with infinite Scrolling', url: '#' },
  { id: 1, title: 'Photo showcase with search option', url: '#' },
];

const HomeScreen = () => {
  return (
    <>
      <Topbar />
      <div className="homeScreen">
        <div className="projects">
          {projectsInfo.map((dt) => (
            <Project data={dt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
