import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import SignIn from './auth/SignIn'; 
import Signup from './auth/Signup';
import Navbar from './auth/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import SleeperBus from './pages/SleeperBus';

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/booking' && <Navbar />}
      <Routes>  
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sleeper-bus" element={<SleeperBus />}/>
      </Routes>
    </div>
  );
}


const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;