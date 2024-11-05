import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import '../App.css'; 

import Input from '../components/Input';
import Label from '../components/Label';
import seat from '../assets/seat.jpg'; // Import seat image

const SleeperBus = () => {
    const location = useLocation(); 
    const { bus, from, to, date } = location.state || {}; // Extract bus and trip details from the state

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isPaid, setIsPaid] = useState(false); // State to track payment status

    const rows = [
        [1, 2, 3, 4, 5], // Top row of sleeper bus
        [6, 7, 8, 9, 10], // Next row
        [null, null, null, null, null], // Empty space for aisle
        [11, 12, 13, 14, 15], // Third row
        [16, 17, 18, 19, 20], // Bottom row
    ];

    const toggleSeatSelection = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const totalPrice = selectedSeats.length * bus.price; // Calculate total price based on selected seats

    const handlePayment = () => {
        if (selectedSeats.length > 0) {
            setIsPaid(true); // Update payment status
            alert(`Payment Successful! Total Amount: $${totalPrice}`);
        } else {
            alert('Please select at least one seat to proceed with payment.');
        }
    };

    const handleDownloadTicket = () => {
        if (!isPaid) {
            alert('Please complete the payment before downloading the ticket.');
        } else if (selectedSeats.length === 0) {
            alert('Please select a seat to download the ticket.');
        } else {
            // Logic to download the ticket
            alert('Ticket downloaded successfully!');
        }
    };

    return (
        <div>
            <div className="bus-container">
                <div className="left-container">
                    <h2>Select Your Sleeper Bus Seat</h2>
                    <div className="bus">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="bus-row" style={{ display: 'flex', justifyContent: 'center' }}>
                                {row.map((seatNumber, seatIndex) =>
                                    seatNumber === null ? (
                                        <div key={seatIndex} className="empty-space" style={{ width: '40px', height: '40px', margin: '5px' }} />
                                    ) : (
                                        <img
                                            key={seatNumber}
                                            src={seat}
                                            alt={`Seat ${seatNumber}`}
                                            className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
                                            onClick={() => toggleSeatSelection(seatNumber)}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                margin: '5px',
                                                cursor: 'pointer',
                                                border: selectedSeats.includes(seatNumber) ? '2px solid green' : '2px solid transparent'
                                            }}
                                        />
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
                            <Label htmlFor="bus-id">Bus ID:</Label>
                            <Input type="text" id="bus-id" value={bus.id || 'N/A'} readOnly />
                        </div>
                        <div className="summary-item">
                            <Label htmlFor="from-point">From:</Label>
                            <Input type="text" id="from-point" value={from || ''} readOnly />
                        </div>
                        <div className="summary-item">
                            <Label htmlFor="to-point">To:</Label>
                            <Input type="text" id="to-point" value={to || ''} readOnly />
                        </div>
                        <div className="summary-item">
                            <Label htmlFor="pickup-date">Date:</Label>
                            <Input type="text" id="pickup-date" value={date || ''} readOnly />
                        </div>
                        <div className="summary-item">
                            <Label htmlFor="bus-type">Bus Type:</Label>
                            <Input type="text" id="bus-type" value={bus.type || 'Sleeper'} readOnly />
                        </div>
                       
                        <div className="summary-item">
                            <Label htmlFor="selected-seats">Selected Seats:</Label>
                            <Input type="text" id="selected-seats" value={selectedSeats.length ? selectedSeats.join(', ') : 'None'} readOnly />
                        </div>
                        <div className="summary-item">
                            <Label htmlFor="per-seat-amount">Per Seat Amount:</Label>
                            <Input type="text" id="per-seat-amount" value={`$${bus.price}`} readOnly />
                        </div>
                        <div className="summary-item">
                            <Label htmlFor="total-price">Total Price:</Label>
                            <Input type="text" id="total-price" value={`$${totalPrice}`} readOnly />
                        </div>
                    </div>

                    {/* Button Container */}
                    <div className="button-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                        <button className="pay-button" onClick={handlePayment}>
                            Proceed to Pay
                        </button>
                        
                        <button 
                            className="pay-button" 
                            onClick={handleDownloadTicket} 
                        >
                            Download Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SleeperBus;
