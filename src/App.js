import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './auth/SignIn'; 
import Signup from './auth/Signup';
import Navbar from  './auth/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Profile from './pages/Profile';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>  
          < Route path="/home" element={<Home />}/>
          < Route path="/signup" element={<Signup />}/>
          <Route path="/" element={<SignIn />} />
          <Route path="/footer" element={<Footer />}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
