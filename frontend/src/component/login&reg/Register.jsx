import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    // console.log("e.target", e.target);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      // alert("ok");
      axios.post("http://localhost:9002/reg", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
        // if()
      });
    } else {
      alert("Invalid input");
    }
  };
  return (
    <div className="register">

      <div className="topSideOfReg">
        <h1>Register</h1>
        <div className="closeBtn" onClick={() => navigate("/")}>
          Close
        </div>
      </div>


      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Submit
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>

    </div>
  );
}
