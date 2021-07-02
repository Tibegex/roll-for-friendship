import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.css";

const Nav = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "RFFLogo.png"}
              alt="RFF Logo"
              width="105px"
              height="60px"
              className="d-inline-block align-text-center"
            ></img>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
