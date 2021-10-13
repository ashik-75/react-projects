import './topbar.scss';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="logo">Projects</div>
        <div className="menu">
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </div>
        <div className="social-icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ashikurrahmansweet"
            className="link"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ashikranasweet"
            className="link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a rel="noreferrer" href="#linked" className="link">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
