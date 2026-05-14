import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router"
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About/About";
import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/Contact/Contact";

import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';


function App() {
  
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (API call, heavy assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>

    <HashRouter>

      <ScrollToTop />
    
      <Navbar></Navbar>

      <Routes>

      <Route path="/home" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Navigate to="/home" />} />

      </Routes>
      
    </HashRouter>

    <Footer></Footer>
    
      
    </>
  )
}

export default App
