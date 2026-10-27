
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import PackageDetails from "./pages/PackageDetails.jsx";
import Booking from "./pages/Booking.jsx";
import MyBookings from "./pages/MyBookings.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="*" element={<div className="container section text-center"><h1 className="text-3xl font-bold">404 - Page not found</h1></div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
