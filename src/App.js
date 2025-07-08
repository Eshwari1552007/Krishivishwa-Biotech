import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/TopNavbar';
import Home from './Pages/Home';
import AboutUs from './Components/Aboutus';
import Footer from './Components/Footer';




function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />6
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
