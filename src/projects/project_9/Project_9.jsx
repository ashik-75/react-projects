import { useState } from 'react';
import './project_9.scss';

const imageDt = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1570356528233-b442cf2de345?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
  },
];

const Project_9 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : imageDt.length - 1
        )
      : setCurrentSlide(
          currentSlide === imageDt.length - 1 ? 0 : currentSlide + 1
        );
  };

  console.log(currentSlide);
  return (
    <div className="project_9">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {imageDt.map((dt) => (
          <div className="container">
            <div className="slider">
              <img src={dt.url} alt="" />
            </div>
          </div>
        ))}
      </div>

      <i
        className="fas fa-arrow-right"
        onClick={() => handleClick('right')}
      ></i>
      <i className="fas fa-arrow-left" onClick={() => handleClick('left')}></i>
    </div>
  );
};

export default Project_9;
