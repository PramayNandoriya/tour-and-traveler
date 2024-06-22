import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginUser,setLoginUser] = useState()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      if (res.data.user) {
        navigate("/");
      } else {
        navigate("/reg");
      }
    });
  };
  return (
    <div className="login">
     <div className="topSideOfReg">
        <h1>Login</h1>
        <div className="closeBtn" onClick={() => navigate("/")}>
          Close
        </div>
      </div>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={login}>
        Submit
      </div>
      <div>OR</div>
      <div>Create a New Account</div>
      <div className="button" onClick={() => navigate("/reg")}>
        Register
      </div>
    </div>
  );
}
