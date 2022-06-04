import React from "react";
import './Navbar.css';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import {Routes} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      <h2>Haufe Hackathon</h2>
      </a>
     
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/Map.js">
              <Nav.Link>Map</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Table.js">
              <Nav.Link>Table</Nav.Link>
            </LinkContainer>
          </Nav>
          </li>
        </ul>
      </div>
      <Routes />
    </nav>
  );
};

export default Navbar;