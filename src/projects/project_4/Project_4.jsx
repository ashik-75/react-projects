import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './project_4.scss';

const Project_4 = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const conPasswordRef = useRef();

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const errors = {};
    e.preventDefault();
    if (!user.username) {
      usernameRef.current.className = 'form-control error';
      errors['username'] = "Username can't be empty";
    } else {
      usernameRef.current.className = 'form-control success';
    }

    if (!user.email) {
      emailRef.current.className = 'form-control error';
      errors['email'] = "Email Field can't Empty";
    } else {
      if (checkEmailPattern(user.email)) {
        emailRef.current.className = 'form-control success';
      } else {
        emailRef.current.className = 'form-control error';
        errors['email'] = 'Email invalid';
      }
    }

    if (!user.password) {
      passwordRef.current.className = 'form-control error';
      errors['password'] = "Password Field can't Empty";
    } else {
      passwordRef.current.className = 'form-control success';
    }

    if (!user.confirmPassword) {
      conPasswordRef.current.className = 'form-control error';
      errors['confirmPassword'] = "Confirm password Cant't be blank";
    } else {
      if (user.password !== user.confirmPassword) {
        conPasswordRef.current.className = 'form-control error';
        errors['confirmPassword'] = `Password can't match`;
      } else {
        conPasswordRef.current.className = 'form-control success';
      }
    }

    setErrorMessage(errors);

    // console.log(errorMessage);

    if (Object.keys(errors).length === 0) {
      history.push('/project/4/success');
    }
  };

  function checkEmailPattern(email) {
    const res =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email.trim()).toLowerCase()
      );

    return res;
  }
  return (
    <div className="project_4">
      <div className="container">
        <div className="title">Sign up</div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-control" ref={usernameRef}>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                id="username"
                type="text"
                placeholder="Enter username"
                onChange={handleUser}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-times-circle"></i>
              <small>{errorMessage.username}</small>
            </div>
            <div className="form-control" ref={emailRef}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter email"
                onChange={handleUser}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-times-circle"></i>
              <small>{errorMessage.email}</small>
            </div>
            <div className="form-control" ref={passwordRef}>
              <label htmlFor="pass">Password</label>
              <input
                name="password"
                id="pass"
                type="password"
                placeholder="Enter password"
                onChange={handleUser}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-times-circle"></i>
              <small>{errorMessage.password}</small>
            </div>
            <div className="form-control" ref={conPasswordRef}>
              <label htmlFor="con">Confirm Password</label>
              <input
                name="confirmPassword"
                id="con"
                type="password"
                placeholder="Enter confirm password"
                onChange={handleUser}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-times-circle"></i>
              <small>{errorMessage.confirmPassword}</small>
            </div>
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Project_4;
