import React from "react";
import "./navStyle.css";

const Nav = () => {
  return (
    <nav id="navbar" class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + "RFFLogo.png"}
            alt="RFF Logo"
            width="105px"
            height="60px"
            class="d-inline-block align-text-center"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
