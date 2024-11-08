// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './auth/SignIn'; 
import Signup from './auth/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import SleeperBus from './pages/SleeperBus';
import Layout from './pages/Layout';
import CardGrid from './pages/listOfBuses'; 
import AcBus from './pages/AcBus';
import NonAcBus from './pages/NonAcBus';
import BookingDetails from './pages/BookingDetails';
import UpdateBooking from './pages/UpdateBooking';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sleeper-bus-booking" element={<SleeperBus />} />
          <Route path="/buses" element={<CardGrid />}/>
          <Route path="/ac-bus-booking" element={< AcBus/>}/>
          <Route path="/non-ac-bus-booking" element={< NonAcBus/>}/>
          <Route path="/bookingDetails" element={<BookingDetails/>}/>
          <Route path="/edit-booking/:id" element={<UpdateBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
