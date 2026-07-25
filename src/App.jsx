import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About/About";
import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/Contact/Contact";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import Chatbot from "./components/Chatbot/Chatbot";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import GradualBlurMemo from "./components/GradualBlur/GradualBlur";

function App() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToHash />

        <ClickSpark
          sparkColor="#000000"
          sparkSize={12}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div style={{ position: "relative", minHeight: "100vh" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </Routes>
            </div>

            <GradualBlurMemo
              target="page"
              position="bottom"
              height="7rem"
              strength={1}
              divCount={5}
              curve="bezier"
              exponential
              opacity={1}
            />
          </div>
        </ClickSpark>
      </BrowserRouter>

      <Chatbot />
    </>
  );
}

export default App
