import React, { useState } from "react";
import "./bookingForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function BookingForm() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        document: "",
        dob: "",
        days: "",
    });


    const handleChange = (e) => {
        // console.log("e.target", e.target);
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const PostData = () => {
        const { name, document, dob, days } = form;
        if (name && document && dob && days) {

            axios.post("http://localhost:9002/bookingForm", form).then((res) => {
                alert(res.data.message);
                navigate("/");

            });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="BookingForm" name="bookingForm" >

            <div className="topSideOfReg">
                <h1>Book Our Packages Now & Get Amazing Gifts.</h1>

            </div>
            <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Your Name"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="document"
                value={form.document}
                placeholder="Your document"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="dob"
                value={form.dob}
                placeholder="Your dob"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="days"
                value={form.days}
                placeholder="Enter Your Preferred Date For Booking"
                onChange={handleChange}
            ></input>
            <div className="button"
                onClick={PostData}
            >
                Submit
            </div>
            <div className="button" onClick={() => navigate("/")}>
                Close
            </div>

        </div>
    );
}
