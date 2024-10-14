import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assterts/logo.png'; 

const Navbar = () => {

    const navigate=useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid me-5">
                <img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-text-top ms-3" />
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                        <li className="nav-item">
                            <Link className="nav-link  mx-3" to="/" style={{ color: '#0066b8' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/about" style={{ color: '#0066b8' }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/contact" style={{ color: '#0066b8' }}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/services" style={{ color: '#0066b8' }}>Services</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link 
                            to="/login" 
                            className="btn me-2" 
                            style={{ backgroundColor: '#0066b0', color: 'white' }} 
                            onClick={() => navigate('/signin')}
                        >
                            Sign In
                        </Link>
                        <Link 
                            to="/signup" 
                            className="btn me-2" 
                            style={{ backgroundColor: '#0066b0', color: 'white' }}
                            onClick={() => navigate('/customer-signup')}
                        >
                            Customer Sign Up
                        </Link>
                        <Link 
                            to="/signup" 
                            className="btn me-2" 
                            style={{ backgroundColor: '#0066b0', color: 'white' }}
                            onClick={() => navigate('/admin-signup')}
                        >
                            Admin Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
