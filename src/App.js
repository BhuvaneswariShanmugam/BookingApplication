import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './auth/SignIn'; 
import AdminSignup from './auth/AdminSignup';
import CustomerSignup from './auth/CustomerSignup';
import Navbar from  './auth/Navbar';
import Home from './pages/Home';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>  
          < Route path="/" element={<Home />}/>
           < Route path="/customer-signup" element={<CustomerSignup />}/>
          < Route path="/admin-signup" element={<AdminSignup />}/>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
