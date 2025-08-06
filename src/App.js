import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopNavbar from './Components/TopNavbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/About';
import Login from './Pages/Login';
import ContactUs from './Pages/ContactUs';
import Consultancy from './Pages/Consulatncy'

import { useEffect } from 'react';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  useEffect(() => {
    // Reset body overflow when NOT on login page
    if (!hideLayout) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden'; // Optional if you want to disable scroll on login
    }
  }, [hideLayout]);

  return (
    <>
      {!hideLayout && <TopNavbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}


function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} /> {/* ✅ No Navbar/Footer here */}
           <Route path="/consultancy" element={<Consultancy />} /> 
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
