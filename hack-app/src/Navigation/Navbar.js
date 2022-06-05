import React from "react";
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      <h2>Haufe Hackathon</h2>
      </a>
     
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/Map.js">
              Map <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Table.js">
              Table
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;