import React, { useContext, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom"; // ✅ Added missing Link import
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate(); // ✅ Renamed from "navigateTo" to common practice

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://wellcare-bzyc.onrender.com/api/v1/user/login",
        { email, password, confirmPassword, role: "Admin" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      navigate("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section className="container form-component">
      <img src="/hhlogo.png" alt="logo" className="logo" />
      <h1 className="form-title">WELCOME TO ZEECARE</h1>
      <p>Only Admins Are Allowed To Access These Resources!</p>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <p>
          Add New Doctor Register? <Link to="/doctor/addnew">Add New Docter</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
