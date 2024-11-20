import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../auth/Navbar';
import { useSearchTripsMutation } from '../redux/service/TripApi';
import Button from '../components/Button';
import HomeBus from '../assets/homeBus.png';
import bus1 from '../assets/cat-bus1.png';
import bus2 from '../assets/cat-bus2.png';
import bus3 from '../assets/cat-bus3.jpg';

import '../App.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingDetails = location.state?.bookingDetails;

  const [pickupPoint, setPickupPoint] = useState('');
  const [destinationPoint, setDestinationPoint] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [ticket, setTicket] = useState(null);

  const [searchTrips] = useSearchTripsMutation();

  const locations = [
    'Salem',
    'Namakkal',
    'Chennai',
    'Coimbatore',
    'Bangalore',

  ];

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
    <div>
      <Navbar />
      <div className="home-container">
        <div className="button-container">
          <h1>
            Reserve Your Bus{' '}
            <span className="ticket" style={{ color: '#B966E2' }}>
              Tickets
            </span>{' '}
            Now
          </h1>

          <div>
            <p>
              Find and book your bus tickets with just a few clicks. we offer a
              wide range of bus routes and schedules to suit your needs
            </p>
          </div>

          <button>Reserve Seat Now</button>
        </div>

        <div className="right-img-container">
          <img src={HomeBus} alt="homepage-right-img" />
        </div>
      </div>

      <div className="card search-container shadow-lg">
        <div className="row g-3">
          {/* From Dropdown */}
          <div className="col">
            <select
              className="form-control input-custom"
              value={pickupPoint}
              onChange={(e) => setPickupPoint(e.target.value)}
            >
              <option value="" disabled>
                From
              </option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* To Dropdown */}
          <div className="col">
            <select
              className="form-control input-custom"
              value={destinationPoint}
              onChange={(e) => setDestinationPoint(e.target.value)}
            >
              <option value="" disabled>
                To
              </option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Date Input */}
          <div className="col">
            <input
              type="date"
              className="form-control input-custom"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          {/* Search Button */}
          <div className="col">
            <button
              className="search-btn"
              style={{
                width: '280px',
                height: '40px',
                backgroundColor: 'darkorchid',
                color: 'white',
              }}
              onClick={handleBookNowClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="category-title-container">
          <h1 className="text-center my-4">Categories</h1>

          <div className="bus-container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div
                  className="card bus-category-card shadow-lg"
                  style={{ width: '450px', height: '300px' }}
                >
                  <div className="card-body text-center">
                    <img src={bus1} alt="bus" width="250px" height="150px" />
                    <div className="bus-content d-flex justify-content-between">
                      <p className="mt-2">Luxury Travel</p>
                      <p className="mt-2">20 Passengers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col">
                <div
                  className="card bus-category-card shadow-lg"
                  style={{ width: '450px', height: '300px' }}
                >
                  <div className="card-body text-center">
                    <img src={bus2} alt="bus" width="250px" height="150px" />
                    <div className="bus-content d-flex justify-content-between">
                      <p className="mt-2">AC Bus Travel</p>
                      <p className="mt-2">54 Passengers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col">
                <div
                  className="card bus-category-card shadow-lg"
                  style={{ width: '450px', height: '300px' }}
                >
                  <div className="card-body text-center">
                    <img src={bus3} alt="bus" width="250px" height="150px" />
                    <div className="bus-content d-flex justify-content-between">
                      <p className="mt-2">Non-AC Bus Travel</p>
                      <p className="mt-2">54 Passengers</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='book-online-container'>
        <p>BOOK BUS TICKETS ONLINE</p>
        <p>redBus is India's largest brand for online bus ticket booking and offers an easy-to-use online bus and train ticket booking; with over 36 million satisfied customers, 3500+ bus operators to choose from, and plenty of offers on bus ticket booking, redBus makes road journeys super convenient for travellers. A leading platform for booking bus tickets, redBus has been the leader in online bus booking over the past 17 years across thousands of cities and lakhs of routes in India.</p>
        <p>Booking a bus ticket online on the redBus app or website is very simple. You can download the redBus app or visit redbus.in and enter your source, destination & travel date to check the top-rated bus services available. You can then compare bus prices, user ratings & amenities, select your preferred seat, boarding & dropping points and pay using multiple payment options like UPI, debit or credit card, net banking and more. With redBus, get assured safe & secure payment methods and guaranteed travel with the best seat and bus operator of your choice. Once the bus booking payment is confirmed, all you have to do is pack your bags and get ready to travel with the m-ticket, which you can show to the bus operator on your mobile before boarding the bus. Online bus ticket booking with redBus is that simple!</p>
        <p></p>
      </div>
    </div>
  );
};


export default Home;
