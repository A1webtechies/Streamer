import React from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./Header.css";
import GoogleAuth from "./GoogleAuth";
const Header = () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="white">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo  teal-text">
                Streamy
              </Link>
              <Link to="#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/" className="black-text">
                    All Streams
                  </Link>
                </li>
                <li>
                  <GoogleAuth />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <Link to="/">All Streams</Link>
        </li>
        <li className="ml-10">
          <GoogleAuth />
        </li>
      </ul>
    </div>
  );
};

export default Header;
