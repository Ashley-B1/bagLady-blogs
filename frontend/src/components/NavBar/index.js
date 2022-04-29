import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

import "./NavBar.css";

const NavBar = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  // console.log(sessionUser.username);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ul className="main-nav">
        <Link to={`/users/${sessionUser.id}`} className="link">
          <li className="nav-items">Welcome {sessionUser.username}!</li>
        </Link>
        {/* <li>{sessionUser.email}</li> */}
        <li className="nav-items" onClick={logout}>
          Log Out
        </li>
      </ul>
    );
  } else {
    sessionLinks = (
      <ul className="main-nav">
        <li className="nav-items">
          <Link to="/login" className="link">
            LOGIN
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/signup" className="link">
            REGISTER
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="nav-bar">
      <div className="nav-color"></div>
      <div className="nav-bottom">
        <div className="nav-left">
          <a href="https://github.com/Ashley-B1" className="link">
            <i className="nav-icons fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ashley-brown-8386291a9/"
            className="link"
          >
            <i className="nav-icons fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="nav-center">
          <ul className="main-nav">
            <li className="nav-items">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          {isLoaded && sessionLinks}
          {/* <i className="nav-search fa-solid fa-magnifying-glass"></i> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
