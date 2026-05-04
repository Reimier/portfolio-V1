import { BrowserRouter } from "react-router"
import LandingPage from "./pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"


function App() {
  
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

  return (
    <>

    <BrowserRouter>
    
      <Navbar></Navbar>
      
      <LandingPage></LandingPage>
      
    </BrowserRouter>

    <Footer></Footer>
    
      
    </>
  )
}

export default App
