import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";


function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/book-a-table" element={<BookingPage/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
