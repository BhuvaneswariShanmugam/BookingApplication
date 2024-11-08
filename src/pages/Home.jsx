import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { useSearchTripsMutation } from '../redux/service/TripApi';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingDetails = location.state?.bookingDetails;

  const [pickupPoint, setPickupPoint] = useState('');
  const [destinationPoint, setDestinationPoint] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [ticket, setTicket] = useState(null);

  const [searchTrips] = useSearchTripsMutation();

  useEffect(() => {
    if (bookingDetails) {
      setTicket(bookingDetails);
    }
  }, [bookingDetails]);

  const handleBookNowClick = async () => {
    if (!pickupPoint || !destinationPoint || !pickupDate) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const tripExists = await searchTrips({
        pickupPoint,
        destinationPoint,
        pickupTime: pickupDate,
      }).unwrap();

      console.log(tripExists);

      if (tripExists) {
        navigate('/buses', {
          state: {
            from: pickupPoint,
            to: destinationPoint,
            date: pickupDate,
          },
        });
      } else {
        alert('No trips available for the given criteria.');
      }
    } catch (error) {
      console.error('Failed to search for trips:', error);
      alert('Failed to search for trips. Please try again.');
    }
  };

  const handleViewBookingDetails = () => {
    navigate('/bookingDetails');
  };

  return (
    <div className="customer-signup-container d-flex flex-column">
      <Navbar />

      {/* Trip Search Form */}
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

      {/* Booking Buttons */}
      <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }}>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn"
            style={{ backgroundColor: '#0066b8', color: 'white' }}
            onClick={handleBookNowClick}
          >
            Book now
          </button>
          <button
            className="btn"
            style={{ backgroundColor: '#0066b8', color: 'white' }}
            onClick={handleViewBookingDetails}
          >
            View Booking Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
