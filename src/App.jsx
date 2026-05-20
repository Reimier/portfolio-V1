import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router"
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About/About";
import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/Contact/Contact";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

  return (
    <>

      <HashRouter>
        <ScrollToTop />

        <ClickSpark
          sparkColor="#000000"
          sparkSize={12}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >

          <div style={{ position: "relative", zIndex: 1 }}>

            <Navbar />

            <Routes>
              <Route path="/home" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>

          </div>

        </ClickSpark>

      </HashRouter>

      <Chatbot></Chatbot>
    </>
  )
}

export default App
