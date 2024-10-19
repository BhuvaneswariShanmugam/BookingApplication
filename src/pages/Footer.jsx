import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase">About Us</h5>
                        <p className="mt-4">
                    Blue Bus Booking makes travel easy with reliable bus ticket bookings at competitive prices. 
                    Thank you for choosing us!
                </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <p>Email: <a href="mailto:support@bluebus.com">support@bluebus.com</a></p>
                        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                        <p>Address: 123 Blue Bus Ave, City, State, ZIP</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase">Services</h5>
                        <ul className="mt-4">
                           <li>Sleeping Bus Service </li>
                           <li>AC and Non-AC Service</li>
                           <li>Luxury Bus Services</li>
                </ul>
                    </div>
                </div>
            </div>
        
            <div className="text-center p-2" style={{ backgroundColor: '#f1f1f1' }}>
                © {new Date().getFullYear()} Blue Bus Booking. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
