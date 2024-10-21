import React from 'react';
import Navbar from '../auth/Navbar'; 
import { useNavigate } from 'react-router-dom';

// import Footer from './Footer';        
const Home = () => {

    const navigate=useNavigate();

    const handleBookNowClick = () => {
        navigate('/booking'); 
    };

    return (
        <div className="customer-signup-container d-flex flex-column">
            <Navbar /> 

            <div className="container d-flex justify-content-center align-items-center" style={{ paddingTop: '110px' }}>
                <div className="card border-0 shadow-lg bg-light mx-auto p-4">
                    <div className="row g-3">
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="From" 
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="To" 
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="date" 
                                className="form-control" 
                            />
                        </div>
                        <div className="col">
                            <button className="btn w-100" style={{ backgroundColor: '#0066b8', color: 'white' }}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }}>
                <div className="text-center" style={{ color: 'white' }}>
                    <h3>Book your Bus Ticket Now</h3>
                    <button className="btn mt-3"
                     style={{ backgroundColor: '#0066b8', color: 'white' }}
                     onClick={handleBookNowClick}>
                        Book now
                    </button>
                </div>
            </div>

          
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
