

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'; 
import profile from '../assets/profile.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid me-5">
                <img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-text-top ms-3" />
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/home" style={{ color: '#0066b8' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/Footer" style={{ color: '#0066b8' }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/Footer" style={{ color: '#0066b8' }}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/Footer" style={{ color: '#0066b8' }}>Services</Link>
                        </li>
                    </ul>

                    <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle p-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profile} alt="User Profile" width="30" height="30" className="rounded-circle" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li>
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/signout">Signout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
