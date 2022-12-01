import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand">My blog</span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/new-post' className="nav-link">Add</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contacts' className="nav-link">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;