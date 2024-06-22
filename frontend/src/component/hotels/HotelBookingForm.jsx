import React, { useState } from "react";
import "./hotelBookigForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function HotelBookingForm() {
    const navigate = useNavigate();
    const [hotelForm, setHotelForm] = useState({
        name: "",
        email: "",
        document: "",
        date: "",
        preferredFloor: ""
    });


    const handleChange = (e) => {
        // console.log("e.target", e.target);
        const { name, value } = e.target;
        setHotelForm({
            ...hotelForm,
            [name]: value,
        });
    };

    const submitHotelBooking = () => {
        const { name, email, document, date, preferredFloor } = hotelForm;
        if (name && email && document && date && preferredFloor) {

            axios.post("http://localhost:9002/hotelBookingForm", hotelForm).then((res) => {
                alert(res.data.message);
                navigate("/");

            });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="hotelBookingForm" name="hotelBookingForm" >

            <div className="topSideOfReg">
                <h1>Book Our Hotel</h1>
            </div>
            <input
                type="text"
                name="name"
                value={hotelForm.name}
                placeholder="Your Name"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="email"
                value={hotelForm.email}
                placeholder="Your Name E-mail"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="document"
                value={hotelForm.document}
                placeholder="Your document"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="date"
                value={hotelForm.date}
                placeholder="Enter Your Preferred Date For Booking"
                onChange={handleChange}
            ></input>
            <input
                type="number"
                name="preferredFloor"
                value={hotelForm.preferredFloor}
                placeholder="Enter Your Preferred Floor"
                onChange={handleChange}
            ></input>
            <div className="button"
                onClick={submitHotelBooking}
            >Submit</div>
            <div className="button" onClick={() => navigate("/")}>
                Close
            </div>
        </div>
    );
}
