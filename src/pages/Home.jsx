import React from 'react';
import Navbar from '../auth/Navbar'; 

const Home = () => {
    return (
        <div className="customer-signup-container">
            <Navbar /> 
            <div className="container text-center" style={{ paddingTop: '70px' }}>
                <h1 className="text-white mt-5">Welcome to Blue Bus Service</h1>
                <p className="text-white">We are glad to have you here! Explore our services and sign up today.</p>
            </div>
            <div 
                className="d-flex justify-content-right align-items-center" 
                style={{ width: '20%', height: '200px', paddingTop: '300px',  marginTop:'10px', marginLeft:'60px'}}
            >
                <h1 className="text-white mt-5">Reserve Your Bus Tickets Now</h1>
            </div>
            <div>
                <button className="btn "style={{color : 'white', backgroundColor:'#0066b8' ,  marginTop:'80px', marginLeft:'120px'}}>
                    Reserve Seat 
                </button>
            </div>
        </div>
    );
};

export default Home;
