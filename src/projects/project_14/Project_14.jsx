import { useState } from 'react';
import './project_14.scss';

const Project_14 = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="project_14">
      <div className="navbar">
        <div className="one">
          <div className="logo">BirdFly</div>
          <div className="toggle">
            <button onClick={() => setActive((dt) => !dt)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className={active ? 'menu active' : 'menu'}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero">
          <div className="text">Phantom V4</div>
          <button>Buy</button>
        </div>
      </div>
      <div className="main-container">
        <div className="container">
          <div className="left">
            <ul>
              <li>Mavic</li>
              <li>Phantom</li>
              <li>FpV</li>
              <li>Dji</li>
            </ul>
          </div>
          <div className="right">
            <div className="item-container">
              <div className="item">
                <img
                  src="https://images.unsplash.com/photo-1506947411487-a56738267384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="text-container">
                  <div className="name">Dji mavic pro</div>

                  <div className="price">$600</div>
                </div>{' '}
              </div>
              <div className="item">
                <img
                  src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="text-container">
                  <div className="name">Dji mavic pro</div>

                  <div className="price">$600</div>
                </div>
              </div>
              <div className="item">
                <img
                  src="https://images.unsplash.com/photo-1506947411487-a56738267384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="text-container">
                  <div className="name">Dji mavic pro</div>

                  <div className="price">$600</div>
                </div>
              </div>
              <div className="item">
                <img
                  src="https://images.unsplash.com/photo-1506947411487-a56738267384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="text-container">
                  <div className="name">Dji mavic pro</div>

                  <div className="price">$600</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_14;
