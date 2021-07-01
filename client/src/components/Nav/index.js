import React from "react";
import "./navStyle.css";

const Nav = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + "RFFLogo.png"}
            alt=""
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
