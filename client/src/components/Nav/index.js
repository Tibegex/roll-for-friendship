import React from "react";
import "./navStyle.css";

const Nav = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + "RFFLogo.png"}
            alt="RFF Logo"
            width="105px"
            height="60px"
            className="d-inline-block align-text-center"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
