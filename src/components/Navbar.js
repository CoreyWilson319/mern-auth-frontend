import React from "react";
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">MERN Auth</Link>
            <button className="navbar-toggler" type="button" data-toggle="#navbarsExample07" data-target="#navbarsExample07" aria-controls="#navbarExample07" aria-label="Toggle Navigation">
                <span className="navbar-tooler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Navlink className="nav-link" exact to="/">Home</Navlink>
                    </li>
                    <li className="nav-item">
                        <Navlink className="nav-link" exact to="/about">About</Navlink>
                    </li>
                </ul>
                
            </div>
        </div>

    </nav>
  );
}

export default Navbar;
