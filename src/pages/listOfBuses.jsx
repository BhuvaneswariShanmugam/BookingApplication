import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { acBuses, nonAcBuses, sleeperBuses } from '../constant/Index';

const CardGrid = () => {
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const { from, to, date } = location.state || {}; 

    const handleBusClick = (bus) => {
        let bookingPath;
    
        // Set the path based on the bus type
        if (bus.type === 'AC') {
            bookingPath = '/ac-bus-booking';
        } else if (bus.type === 'NON-AC') {
            bookingPath = '/non-ac-bus-booking';
        } else if (bus.type === 'SLEEPER') {
            bookingPath = '/sleeper-bus-booking';
        }
    
        navigate(bookingPath, {
            state: { bus, from, to, date }, // No need to add busId separately
        });
    };

    return (
        <div className="container">
            <h3 className="text-center mb-4">
                <strong>{from}</strong> - <strong>{to}</strong> on <strong>{date}</strong>
            </h3>

            {/* Non-AC Buses Card */}
            <div className="mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-start">Book Non-AC Buses</h5>
                        <div className="bus-row">
                            {nonAcBuses.map((bus) => (
                                <div key={bus.id} className="mb-3" onClick={() => handleBusClick(bus)} style={{ cursor: 'pointer' }}>
                                    <img src={bus.imgSrc} alt={`Non-AC Bus ${bus.id}`} className="image" />
                                    <p className="summary">Non-AC Bus {bus.id} - ${bus.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* AC Buses Card */}
            <div className="mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-start">Book AC Buses</h5>
                        <div className="bus-row">
                            {acBuses.map((bus) => (
                                <div key={bus.id} className="mb-3" onClick={() => handleBusClick(bus)} style={{ cursor: 'pointer' }}>
                                    <img src={bus.imgSrc} alt={`AC Bus ${bus.id}`} className="image" />
                                    <p className="summary">AC Bus {bus.id} - ${bus.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sleeper Buses Card */}
            <div className="mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-start">Book Sleeper Buses</h5>
                        <div className="bus-row">
                            {sleeperBuses.map((bus) => (
                                <div key={bus.id} className="mb-3" onClick={() => handleBusClick(bus)} style={{ cursor: 'pointer' }}>
                                    <img src={bus.imgSrc} alt={`Sleeper Bus ${bus.id}`} className="image" />
                                    <p className="summary">Sleeper Bus {bus.id} - ${bus.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGrid;
