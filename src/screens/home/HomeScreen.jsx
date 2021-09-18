import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Link } from 'react-router-dom';
import './homeScreen.scss';
import Project from '../../components/project/Project';

const projectsInfo = [
  { id: 1, title: 'Auto Meal Generator', url: '/project/1' },
  { id: 2, title: 'Blog Post with infinite Scrolling', url: '/project/2' },
  { id: 3, title: 'Photo showcase with search option', url: '/project/3' },
  { id: 4, title: 'Form Validaion', url: '/project/4' },
  { id: 5, title: 'Blurry Loading', url: '/project/5' },
  { id: 6, title: 'Strong Password Check', url: '/project/6' },
  { id: 7, title: 'Expanding Card', url: '/project/7' },
  { id: 8, title: 'Course Card', url: '/project/8' },
  { id: 9, title: 'Carousel', url: '/project/9' },
  { id: 10, title: 'Newslater', url: '/project/10' },
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
