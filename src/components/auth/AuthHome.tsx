// style
import './authHome.scss';
// global imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// assets
import logo from '../../assets/logo.png';

const AuthHome: React.FC = ({ children }) => (
  <div className="auth-home">
    <div className="auth-home__grid">
      <div className="auth-home__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="auth-home__nav">
        <div className="auth-home__links">
          <NavLink
            className="auth-home__link"
            activeClassName="auth-home__active-link"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="auth-home__link"
            activeClassName="auth-home__active-link"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </div>
      <div className="auth-home__banner">
        <div>
          <h1>Siromas-ka</h1>
          <p>
            Second best app to manage reservations, now compleatly free, saves
            your money and time.
          </p>
          <p>It is working great ...</p>
          <p>Please join ...</p>
          <p>So I am not ...</p>
          <p>Alone ...</p>
        </div>
      </div>
      <div className="auth-home__content">
        <div className="auth-home__content-inner">{children}</div>
      </div>
    </div>
  </div>
);
export default AuthHome;
