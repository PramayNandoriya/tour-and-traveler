import React, { useState } from "react";
import "./hotel.css";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { hotelData } from "./hotelData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";


export default function Hotels() {
  const navigate = useNavigate();
  return (
    <div name="Hotels" className="mainWrapperHotel">
      <div className="BookingHotel">
        <h1>Our Hotels</h1>
      </div>
      <div className="locationHotel">
        {hotelData.map((e, id) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={id}>
              <CardMedia
                sx={{ height: 200, width: 500 }}
                image={hotelData[id].image}
                title="hotels"
              />
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {hotelData[id].name}
                </Typography>
                <Typography>{hotelData[id].price}</Typography>
                <Rating
                  name="read-only"
                  value={hotelData[id].rating}
                  readOnly
                />
                <Link className="bookBtn" onClick={() => navigate("/hotelBookingForm")} to="hotelBookingForm" smooth={true} duration={500}>
                  BookNow
                </Link>

              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
