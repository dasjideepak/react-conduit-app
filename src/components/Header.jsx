import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    history.push("/");
  }

  return (
    <header>
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src="/images/logo.png" alt="logo-img" />
          </NavLink>

          <a
            href="##"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          {localStorage.authToken ? (
            <div className="navbar-end">
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
              <a href="##" className="navbar-item">
                <FaRegEdit />
                <span>New Post</span>
              </a>
              <a href="##" className="navbar-item">
                <IoIosSettings />
                <span>Setting</span>
              </a>
              <a href="##" className="navbar-item">
                <FaUser />
                <span onClick={(e) => handleLogout(e)}>Logout</span>
              </a>
            </div>
          ) : (
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink to="/" className="button is-primary">
                    Home
                  </NavLink>
                  <NavLink to="/signup" className="button is-info">
                    <strong>Sign up</strong>
                  </NavLink>
                  <NavLink to="/login" className="button is-link">
                    Log in
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
