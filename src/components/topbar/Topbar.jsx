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
          <Link to="#" className="link">
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link to="#git" className="link">
            <i className="fab fa-github"></i>
          </Link>
          <Link to="#linked" className="link">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
