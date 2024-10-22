import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [pickupPoint, setPickupPoint] = useState('');
    const [destinationPoint, setDestinationPoint] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const navigate = useNavigate();

    // Handle navigation to the booking page with inputs as state
    const handleBookNowClick = () => {
        if (pickupPoint && destinationPoint && pickupDate) {
            navigate('/booking', {
                state: { pickupPoint, destinationPoint, pickupDate },
            });
        } else {
            alert('Please fill in all fields.');
        }
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
                                value={pickupPoint}
                                onChange={(e) => setPickupPoint(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="To"
                                value={destinationPoint}
                                onChange={(e) => setDestinationPoint(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="date"
                                className="form-control"
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }}>
                <div className="text-center" style={{ color: 'white' }}>
                    <h3>Book your Bus Ticket Now</h3>
                    <button
                        className="btn mt-3"
                        style={{ backgroundColor: '#0066b8', color: 'white' }}
                        onClick={handleBookNowClick}
                    >
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
