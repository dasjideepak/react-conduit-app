import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="##" className="navbar-item">
            <img src="/images/logo.png" alt="logo-img" />
          </a>

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
          {false ? (
            <div className="navbar-end">
              <a href="##" className="navbar-item">
                Home
              </a>
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
                <span> dasjideepak</span>
              </a>
            </div>
          ) : (
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a href="##" className="button is-primary">
                    Home
                  </a>
                  <a href="##" className="button is-info">
                    <strong>Sign up</strong>
                  </a>
                  <a href="##" className="button is-link">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
