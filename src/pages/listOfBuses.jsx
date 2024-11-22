import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { acBuses, nonAcBuses, sleeperBuses } from '../constant/Index';
import '../App.css'; 
import Navbar from '../auth/Navbar';
import Footer from '../pages/Footer';

const CardGrid = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { from, to, date } = location.state || {};

    const handleBusClick = (bus) => {
        let bookingPath;

        if (bus.type === 'AC') {
            bookingPath = '/ac-bus-booking';
        } else if (bus.type === 'NON-AC') {
            bookingPath = '/non-ac-bus-booking';
        } else if (bus.type === 'SLEEPER') {
            bookingPath = '/sleeper-bus-booking';
        }

        navigate(bookingPath, {
            state: { bus, from, to, date },
        });
    };

    return (
        <div>
            <div className="buses-container mt-4">
            <Navbar/>
             <h3 className="text-center mb-4">
                    <strong>{from}</strong> - <strong>{to}</strong> on <strong>{date}</strong>
                </h3>
            <div className="card p-4">
            
                <div className="mb-4">
                    <h5 className="text-start mb-3">Book Non-AC Buses</h5>
                    <div className="bus-row">
                        {nonAcBuses.map((bus) => (
                            <div
                                key={bus.id}
                                className="bus-card"
                                onClick={() => handleBusClick(bus)}
                            >
                                <img src={bus.imgSrc} alt={`Non-AC Bus ${bus.id}`} className="image" />
                                <p className="summary">Non-AC Bus {bus.id} - ${bus.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

      
                <div className="mb-4">
                    <h5 className="text-start mb-3">Book AC Buses</h5>
                    <div className="bus-row">
                        {acBuses.map((bus) => (
                            <div
                                key={bus.id}
                                className="bus-card"
                                onClick={() => handleBusClick(bus)}
                            >
                                <img src={bus.imgSrc} alt={`AC Bus ${bus.id}`} className="image" />
                                <p className="summary">AC Bus {bus.id} - ${bus.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

       
                <div className="mb-4">
                    <h5 className="text-start mb-3">Book Sleeper Buses</h5>
                    <div className="bus-row">
                        {sleeperBuses.map((bus) => (
                            <div
                                key={bus.id}
                                className="bus-card"
                                onClick={() => handleBusClick(bus)}
                            >
                                <img src={bus.imgSrc} alt={`Sleeper Bus ${bus.id}`} className="image"/>
                                <p className="summary">Sleeper Bus {bus.id} - ${bus.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          
        </div>
        <Footer/>
        </div>
    );
};

export default CardGrid;
