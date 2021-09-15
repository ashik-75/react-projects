import { useEffect, useRef, useState } from 'react';
import './project_5.scss';

const Project_5 = () => {
  const numRef = useRef();
  const blurRef = useRef();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const res = setInterval(inc, 30);
    let value = 0;

    function inc() {
      value += 1;

      if (value === 100) {
        clearInterval(res);
      }

      setPercent(value);
      numRef.current.style.opacity = scale(value, 0, 100, 1, 0);
      blurRef.current.style.filter = `blur(${scale(value, 0, 100, 20, 0)}px)`;
    }
  }, []);

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  return (
    <div className="project_5">
      <div className="container" ref={blurRef}></div>
      <div className="number" ref={numRef}>
        {percent}%
      </div>
    </div>
  );
};

export default Project_5;
