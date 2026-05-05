import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router"
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"


function App() {
  
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

  return (
    <>

    <HashRouter>
    
      <Navbar></Navbar>

      <Routes>

      <Route path="/home" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to="/home" />} />

      </Routes>
      
    </HashRouter>

    <Footer></Footer>
    
      
    </>
  )
}

export default App
