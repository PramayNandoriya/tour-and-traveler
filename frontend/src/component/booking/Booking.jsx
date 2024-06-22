import React from "react";
import "./booking.css";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { packageData } from "../booking/packageData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export default function Booking() {
  const navigate = useNavigate();


  return (
    <div name="Packages" className="mainWrapper">
      <div className="Booking">
        <h1>Our Packages</h1>
      </div>

      <div className="locationBox">
        {packageData.map((e, id) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={id}>
              <CardMedia
                sx={{ height: 250 }}
                image={packageData[id].image}
                title="tourOne"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {packageData[id].name}
                </Typography>
                <Typography>{packageData[id].price}</Typography>
                <Rating
                  name="read-only"
                  value={packageData[id].rating}
                  readOnly
                />
                <Typography variant="body2" color="text.secondary">
                  {packageData[id].description}
                </Typography>
                <Link className="bookBtn" onClick={() => navigate("/bookingForm")} to="bookingForm" smooth={true} duration={500}>
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
