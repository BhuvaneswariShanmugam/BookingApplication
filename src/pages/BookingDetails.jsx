import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllBookingsQuery, useDeleteBookingMutation } from '../redux/service/BookingApi';
import { Button, Card, Row, Col } from 'react-bootstrap';

const BookingDetails = () => {
    const navigate = useNavigate();
    const { data, error, isLoading, isError } = useGetAllBookingsQuery();
    const [deleteBooking] = useDeleteBookingMutation();  // Hook to delete a booking

    if (isLoading) {
        return <div>Loading bookings...</div>;
    }

    if (isError) {
        return <div>Error fetching bookings: {error.message}</div>;
    }

    const handleEdit = (booking, seat) => {
        // Pass both booking data and the selected seat to the edit page
        navigate(`/edit-booking/${booking.id}`, { state: { booking, seat } });
    };

    const handleCancel = async (bookingId, seatNumbers) => {
        try {
            // Call deleteBooking mutation to delete the booking
            await deleteBooking({ busNumber: bookingId, seatNumbers }).unwrap();
            alert('Booking canceled successfully!');
            // Optionally, you can refetch the bookings or navigate away after successful delete
            navigate('/booking-details'); // Redirect to the same page to show updated list
        } catch (error) {
            alert('Failed to cancel booking: ' + error.message);
        }
    };

    const textColor = "#123456";

    return (
        <div className="booking-details-container d-flex justify-content-center align-items-center">
            <div className="card border-0 shadow-lg bg-light mx-auto" style={{ maxWidth: '900px' }}>
                <div className="card-body">
                    <h2 className="text-center font-italic" style={{ color: textColor }}>
                        Your Booking Details
                    </h2>
                    {data && data.length > 0 ? (
                        <Row className="booking-list">
                            {data.map((booking, index) => (
                                booking.bookedNoOfSeats.map((seat, seatIndex) => (
                                    <Col xs={12} md={6} key={`${index}-${seatIndex}`} className="mb-4">
                                        <Card className="booking-item" style={{ width: '100%' }}>
                                            <Card.Body>
                                                <div style={{ color: textColor }}>
                                                    <p><strong>Bus Number:</strong> {booking.busNumber}</p>
                                                    <p><strong>Bus Type:</strong> {booking.busType}</p>
                                                    <p><strong>Seat Number:</strong> {seat}</p>
                                                    <p><strong>Trip:</strong> {booking.pickupPoint} - {booking.destinationPoint}</p>
                                                    <p><strong>Date:</strong> {new Date(booking.pickupTime).toLocaleDateString()} {new Date(booking.pickupTime).toLocaleTimeString()}</p>
                                                    <p><strong>Per Seat Amount:</strong> ₹{booking.pricePerSeat || 'Not Available'}</p>
                                                    <p><strong>Total Amount:</strong> ₹{booking.totalPrice || 'Not Available'}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => handleEdit(booking, seat)} // Pass both booking and seat
                                                    >
                                                        Edit Booking
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => handleCancel(booking.busNumber, [seat])} // Pass busNumber and seat
                                                    >
                                                        Cancel Booking
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ))}
                        </Row>
                    ) : (
                        <p>No bookings found</p>
                    )}
                    <div className="text-center mt-3">
                        <Button variant="secondary" onClick={() => navigate('/home')}>
                            Go to Home
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
