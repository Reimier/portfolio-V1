import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import Chatbot from "./components/Chatbot/Chatbot";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";

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
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </ClickSpark>
      </BrowserRouter>

      <Chatbot />
    </>
  );
}

export default App;
