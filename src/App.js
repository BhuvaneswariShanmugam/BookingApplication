import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './auth/SignIn'; 
import Signup from './auth/Signup';
import Navbar from  './auth/Navbar';
import Home from './pages/Home';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>  
          < Route path="/" element={<Home />}/>
          < Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
