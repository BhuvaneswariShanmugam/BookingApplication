import React, { useState } from 'react';
import '../App.css'; 
import seatImg from '../assets/seat.jpg'; // Image for seat

const SleeperBus = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Define rows for a sleeper bus with only 20 seats
    const rows = [
        [1, 2, 3, 4, 5],            // Row 1
        [6, 7, 8, 9, 10],          // Row 2
        [null, null, null, null, null], // Space
        [11, 12, 13, 14, 15],      // Row 3
        [16, 17, 18, 19, 20],      // Row 4
    ];

    const toggleSeatSelection = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const seatPrice = 100; // Price per seat
    const totalPrice = selectedSeats.length * seatPrice; // Total price calculation

    return (
        <div>
            <div className="bus-container">
                <div className="left-container">
                    <h2>Select Your Sleeper Bus Seat</h2>
                    <div className="bus">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="bus-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                                {row.map((seat, seatIndex) =>
                                    seat === null ? (
                                        <div key={seatIndex} className="empty-space" style={{ width: '40px', height: '40px', margin: '5px' }} /> // Empty space for aisle
                                    ) : (
                                        <div 
                                            key={seat}
                                            onClick={() => toggleSeatSelection(seat)}
                                            style={{ 
                                                position: 'relative', 
                                                width: '40px', 
                                                height: '40px', 
                                                margin: '5px', 
                                                cursor: 'pointer',
                                                backgroundColor: selectedSeats.includes(seat) ? '#007bff' : 'transparent', // Selected seat color
                                                borderRadius: '5px' // Rounded corners
                                            }}
                                        >
                                            <img
                                                src={seatImg}
                                                alt={`Seat ${seat}`}
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    border: selectedSeats.includes(seat) ? '2px solid white' : 'none' // Optional white border for selected seats
                                                }} 
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-container">
                    <h4>Booking Summary</h4>
                    <div className="booking-summary">
                        <div className="summary-item">
                            <label htmlFor="selected-seats">Selected Seats:</label>
                            <input
                                type="text"
                                id="selected-seats"
                                value={selectedSeats.length ? selectedSeats.join(', ') : 'None'}
                                readOnly
                            />
                        </div>
                        <div className="summary-item">
                            <label htmlFor="per-seat-amount">Per Seat Amount:</label>
                            <input
                                type="text"
                                id="per-seat-amount"
                                value={`$${seatPrice}`}
                                readOnly
                            />
                        </div>
                        <div className="summary-item">
                            <label htmlFor="total-price">Total Price:</label>
                            <input
                                type="text"
                                id="total-price"
                                value={`$${totalPrice}`}
                                readOnly
                            />
                        </div>
                    </div>

                    <button className="pay-button">Continue to Pay</button>
                </div>
            </div>
        </div>
    );
};

export default SleeperBus;
