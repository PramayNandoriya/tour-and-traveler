import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/myLoginRegisterDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  document: String,
  dob: String,
  days: String,
  date : String,
  preferredFloor : String,
});

const User = new mongoose.model("User", userSchema);
const PackageData = new mongoose.model("PackageData", userSchema)
const HotelBookingData = new mongoose.model("HotelBookingData", userSchema)


//routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfully", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});
app.post("/reg", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

app.post("/bookingForm", (req, res) => {
  const { name, document, dob, days } = req.body;
  PackageData.findOne((form) => {
    if (form) {
      res.send({ message: "Booking Already Registered" });

    } else {
      const form = new PackageData({
        name,
        document,
        dob,
        days
      });
      form.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Booked" });
        }
      });
    }
  });
});

app.post("/hotelBookingForm", (req, res) => {
  const { name,email, document, date, preferredFloor } = req.body;
  HotelBookingData.findOne((hotelForm) => {
    if (hotelForm) {
      res.send({ message: "Booking Already Registered" });

    } else {
      const hotelForm = new HotelBookingData({
        name,
        email,
        document,
        date,
        preferredFloor
      });
      hotelForm.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Booked" });
        }
      });
    }
  });
});

app.listen(9002, () => {
  console.log("be start at port 9002");
});
