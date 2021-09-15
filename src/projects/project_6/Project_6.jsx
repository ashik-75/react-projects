import { useEffect, useRef, useState } from 'react';
import './project_6.scss';

const Project_6 = () => {
  const passRef = useRef();
  const [password, setPassword] = useState('');

  useEffect(() => {
    passRef.current.style.filter = `blur(${20 - password.length * 2}px)`;
  }, [password]);
  return (
    <div className="project_6">
      <div className="container" ref={passRef}></div>
      <div className="form-container">
        <div className="form-title">Password Checker</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPassword('');
          }}
        >
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Project_6;
