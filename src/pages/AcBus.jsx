import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateBookingMutation } from '../redux/service/BookingApi';
import '../App.css';
import Input from '../components/Input';
import Label from '../components/Label';
import seat from '../assets/seat.jpg';
import Navbar from '../auth/Navbar';
import Footer from '../pages/Footer';

const AcBus = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bus, from, to, date } = location.state || {};
    const busId = bus?.id;

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const [createBooking] = useCreateBookingMutation();

    const rows = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15, 16],
        [null, null, null, null, null, null, null, 17],
        [null, null, null, null, null, null, null, 18],
        [19, 20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, 32, 33, 34]
    ];

    const toggleSeatSelection = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const totalPrice = selectedSeats.length * bus.price;

    const handlePayment = async () => {
        if (selectedSeats.length > 0) {
            try {
                const bookingDetails = {
                    pickupPoint: from,
                    destinationPoint: to,
                    pickupTime: date,
                    busNumber: busId,
                    busType: bus.type || 'AC',
                    bookedNoOfSeats: selectedSeats,
                    perSeatAmount: bus.price,
                    totalAmount: totalPrice,
                };

                console.log('Booking payload:', JSON.stringify(bookingDetails));

                const response = await createBooking(bookingDetails).unwrap();
                console.log('Booking successful:', response);
                alert(`Payment Successful! Total Amount: $${totalPrice}`);
                setIsPaymentSuccessful(true);
            } catch (error) {
                console.error('Failed to create booking:', error);
                alert(`Booking failed, please try again. Reason: ${error.data?.message || 'Unknown error'}`);
            }
        } else {
            alert('Please select at least one seat to proceed with payment.');
        }
    };

    const handleDownloadTicket = () => {
        if (!isPaymentSuccessful) {
            alert('Please complete the payment before downloading the ticket.');
        } else if (selectedSeats.length === 0) {
            alert('Please select a seat to download the ticket.');
        } else {
            alert('Ticket downloaded successfully!');
        }
    };

    return (
        <div>
            <Navbar />


            <div className="bus-container" style={{ marginTop: '0px',height:'88vh',marginRight:'0px' }}>
            

                <div >
                    {/* <h2>Select Your AC Seat</h2> */}
                    <div className="bus" >
                        <div className="bus-image" style={{ marginTop: '200px' ,marginRight:'0px'}}>
                            <img src={bus?.imgSrc || seat} alt={`Bus ${bus?.id}`} style={{ width: '550px', height: 'auto', paddingBottom: '4px', border: 'none', top: '200px' }} />
                            <div className='text' style={{ width: '700px', height: '150px' }}>
                                <h2 className="mb-2">AC Bus Travel</h2>
                                <p>⭐⭐⭐⭐⭐(4.5)</p>
                                <p>
                                    Bus air conditioners are indispensable for providing acomfortable and enjoyable journey for passengers. By understanding the benefits, considerations, and maintenance
                                    tips associated with bus air conditioners, operators can make informed decisions to enhance passenger experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




                <div >


                    <div className='summary' style={{ marginTop: '50px', marginRight: '100px', marginLeft: '200px' }}>
                        <div className="summary-item">
                            <Label htmlFor="bus-id">Bus ID:</Label>
                            <Input type="text" id="bus-id" value={busId || 'N/A'} readOnly />
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
                            <Input type="text" id="bus-type" value={bus.type || 'AC'} readOnly />
                        </div>
                        <div className="summary-item">
                            <Label htmlFor="selected-seats">Selected Seats:</Label>
                            <Input type="text" id="selected-seats" value={selectedSeats.join(', ') || 'None'} readOnly />
                        </div>
                        <div className="summary-item" style={{ paddingBottom: '5px' }}>
                            <Label htmlFor="total-price">Total Price:</Label>
                            <Input type="text" id="total-price" value={`$${totalPrice}`} readOnly />
                        </div>

                        <div className='btn-container d-flex justify-content-between mt-5' >
                            <button className="pay-button  btn btn-primary" onClick={handlePayment}> To Pay</button>
                            <button className="pay-button btn  btn-primary" onClick={handleDownloadTicket}>Download Ticket</button>
                        </div>
                    </div>
                    



                    
                    <div className="bus" style={{ marginRight: '30px', marginTop: '50px' }}>
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="bus-row" style={{ display: 'flex', justifyContent: 'center' }}>
                                {row.map((seatNumber, seatIndex) =>
                                    seatNumber === null ? (
                                        <div key={seatIndex} className="empty-space" style={{ width: '40px', height: '40px', margin: '3px' }} />
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
                                                margin: '3px',
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
            </div>

            {/* 
        <Footer /> */}
        </div>
    );
};

export default AcBus;
