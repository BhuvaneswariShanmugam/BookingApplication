import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import '../App.css'; 
import { useCreateBookingMutation } from '../redux/service/BookingApi'; 

import Input from '../components/Input';
import Label from '../components/Label';
import seat from '../assets/seat.jpg'; 

const SleeperBus = () => {
    const location = useLocation(); 
    const navigate = useNavigate();
    const { bus, from, to, date } = location.state || {}; 
    const busId = bus?.id; 

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isPaid, setIsPaid] = useState(false); 
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); 
    const [createBooking] = useCreateBookingMutation(); 

    const rows = [
        [1, 2, 3, 4, 5], 
        [6, 7, 8, 9, 10], 
        [null, null, null, null, null], 
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20], 
    ];

    const toggleSeatSelection = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) =>
            prevSelectedSeats.includes(seatNumber)
                ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
                : [...prevSelectedSeats, seatNumber]
        );
    };

    const totalPrice = selectedSeats.length * bus.price; 

    const handlePayment = async () => {
        if (selectedSeats.length > 0) {
            setIsPaid(true);

            try {
                const bookingDetails = {
                    pickupPoint: from,
                    destinationPoint: to,
                    pickupTime: date,
                    busNumber: busId,
                    busType: bus.type || 'Non-AC',
                    bookedNoOfSeats: selectedSeats, 
                    perSeatAmount: bus.price,
                    totalAmount: totalPrice,
                };
    
                console.log('Booking payload:', JSON.stringify(bookingDetails));
    
                const response = await createBooking(bookingDetails).unwrap();
                console.log('Booking successful:', response);
    
                alert(`Payment Successful! Total Amount: $${totalPrice}`);
                setIsPaymentSuccessful(true);
                navigate('/home', { state: { bookingDetails, isPaymentSuccessful: true } });
            } catch (error) {
                alert('Failed to create booking. Please try again.');
            }
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

                    <div className="button-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                        <button className="pay-button" onClick={handlePayment}>
                            Proceed to Pay
                        </button>
                        <button className="pay-button" onClick={handleDownloadTicket}>
                            Download Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SleeperBus;
