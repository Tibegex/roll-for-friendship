import React from "react";
import { Link } from "react-router-dom";
// CSS
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./navStyle.css";
// State Store
import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../../utils/auth";

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
        <Dropdown>
          <DropdownButton
            id="user dropdown"
            menuAlign="right"
            title={`Welcome, ${state.currentUserName}`}
          >
            <Dropdown.Item as="button">Update your information</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              as="button"
              onClick={() => {
                Auth.logout();
              }}
            >
              Logout
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        {/* <div className="h3">Welcome, {state.currentUserName}</div> */}
      </div>
    </nav>
  );
};

export default Nav;
