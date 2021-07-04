import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import "./navStyle.css";

const Nav = () => {
  const [state] = useStoreContext();

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
        <div className="h3">Welcome, {state.currentUserName}</div>
      </div>
    </nav>
  );
};

export default Nav;
