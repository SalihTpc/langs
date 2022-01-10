import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyCard from "../components/MyCard";
import MyNavbar from "../components/MyNavbar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mycard" element={<MyCard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
