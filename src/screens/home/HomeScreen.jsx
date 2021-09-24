import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Link } from 'react-router-dom';
import './homeScreen.scss';
import Project from '../../components/project/Project';

const projectsInfo = [
  {
    id: 1,
    imgUrl: '/images/1.png',
    title: 'Auto Meal Generator',
    url: '/project/1',
  },
  {
    id: 2,
    imgUrl: '/images/2.png',
    title: 'Blog Post with infinite Scrolling',
    url: '/project/2',
  },
  {
    id: 3,
    imgUrl: '/images/3.png',
    title: 'Photo showcase with search option',
    url: '/project/3',
  },
  { id: 4, imgUrl: '', title: 'Form Validaion', url: '/project/4' },
  { id: 5, imgUrl: '', title: 'Blurry Loading', url: '/project/5' },
  { id: 6, imgUrl: '', title: 'Strong Password Check', url: '/project/6' },
  {
    id: 7,
    imgUrl: './images/7.png',
    title: 'Expanding Card',
    url: '/project/7',
  },
  { id: 8, imgUrl: '', title: 'Course Card', url: '/project/8' },
  { id: 9, title: 'Carousel', url: '/project/9' },
  { id: 10, title: 'responsive table', url: '/project/10' },
  { id: 11, title: 'Toggle Menu', url: '/project/11' },
  { id: 12, title: 'Modal/Popup', url: '/project/12' },
];

for (let i = 0; i < projectsInfo.length; i++) {
  projectsInfo[i].imgUrl = `/images/${i + 1}.png`;
}

console.log(projectsInfo);

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
