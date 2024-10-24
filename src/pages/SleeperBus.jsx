import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access state
import "../App.css";
import Input from '../components/Input';
import Label from '../components/Label';

const SleeperBus = () => {
  const location = useLocation(); // Get location to access state
  const { pickupPoint, destinationPoint, pickupDate } = location.state || {}; // Destructure state
  
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Define rows for a sleeper bus with only 20 seats
  const rows = [
    [1, 2, 3, 4, 5], // Row 1
    [6, 7, 8, 9, 10], // Row 2
    [null, null, null, null, null], // Space
    [11, 12, 13, 14, 15], // Row 3
    [16, 17, 18, 19, 20], // Row 4
  ];

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const seatPrice = 500; // Price per seat
  const totalPrice = selectedSeats.length * seatPrice; // Total price calculation

  return (
    <div>
      <div className="bus-container">
        <div className="left-container">
          <h2>Select Your Sleeper Bus Seat</h2>
          <div className="bus">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="bus-row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {row.map((seat, seatIndex) =>
                  seat === null ? (
                    <div
                      key={seatIndex}
                      className="empty-space"
                      style={{ width: "40px", height: "40px", margin: "5px" }}
                    /> // Empty space for aisle
                  ) : (
                    <div
                      key={seat}
                      onClick={() => toggleSeatSelection(seat)}
                      style={{
                        position: "relative",
                        width: "40px",
                        height: "40px",
                        margin: "5px",
                        cursor: "pointer",
                        backgroundColor: selectedSeats.includes(seat)
                          ? "#007bff"  // Blue when selected
                          : "#808080", // Gray when not selected
                        borderRadius: "5px", // Rounded corners
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          lineHeight: "40px",
                          textAlign: "center",
                          color: "#fff", // White text on button
                        }}
                      >
                        {seat}
                      </span>
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
              <Label htmlFor="from-point">From:</Label>
              <Input
                type="text"
                id="from-point"
                value={pickupPoint || ''}
                readOnly
              />
            </div>
            <div className="summary-item">
              <Label htmlFor="to-point">To:</Label>
              <Input
                type="text"
                id="to-point"
                value={destinationPoint || ''}
                readOnly
              />
            </div>
            <div className="summary-item">
              <Label htmlFor="pickup-date">Date:</Label>
              <Input
                type="text"
                id="pickup-date"
                value={pickupDate || ''}
                readOnly
              />
            </div>
            <div className="summary-item">
              <Label htmlFor="selected-seats">Selected Seats:</Label>
              <Input
                type="text"
                id="selected-seats"
                value={selectedSeats.length ? selectedSeats.join(", ") : "None"}
                readOnly
              />
            </div>
            <div className="summary-item">
              <Label htmlFor="per-seat-amount">Per Seat Amount:</Label>
              <Input
                type="text"
                id="per-seat-amount"
                value={`$${seatPrice}`}
                readOnly
              />
            </div>
            <div className="summary-item">
              <Label htmlFor="total-price">Total Price:</Label>
              <Input
                type="text"
                id="total-price"
                value={`$${totalPrice}`}
                readOnly
              />
            </div>
          </div>

          <div className="pay-button-container">
            <button className="pay-button">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleeperBus;
