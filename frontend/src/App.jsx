import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/component/login&reg/Login";
import Register from "../src/component/login&reg/Register";
import Navbar from "../src/component/navbar/Navbar"
import TopCenter from "../src/component/centerPart/TopCenter"
import Destinations from "../src/component/destinations/Destinations"
import Selects from "../src/component/selects/Selects"
import Booking from '../src/component/booking/Booking'
import Hotels from "../src/component/hotels/Hotels"
import Footer from "../src/component/footer/Footer"
import BookingForm from "./component/booking/BookingForm";
import HotelBookingForm from "./component/hotels/HotelBookingForm";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <TopCenter />
        <Selects />
        <Booking />
        <Hotels />
        <Destinations />
        <Footer />
        <Routes>
          <Route path="/reg" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookingForm" element={<BookingForm />} />
          <Route path="/hotelBookingForm" element={<HotelBookingForm />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
