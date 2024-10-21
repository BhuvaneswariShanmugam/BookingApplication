import React from 'react';
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const BookingPageNavbar = () => {
    return (
        <div className="navbar navbar-light bg-light p-2">
           
            <div className="d-flex justify-content-center flex-grow-1">
                <button className="btn btn-primary mx-1">Non-AC Bus</button>
                <button className="btn btn-primary mx-1">AC Bus</button>
                <button className="btn btn-primary mx-1">Sleeper Bus</button>
              
            </div>
        </div>
    );
};

export default BookingPageNavbar;
