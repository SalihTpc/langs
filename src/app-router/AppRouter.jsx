import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyCard from "../components/MyCard";
import MyNavbar from "../components/MyNavbar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import { Data } from "../assets/data";

const AppRouter = () => {
  const nani = Data.length - 1;
  const path = `/details/${Data.length}`;
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
        <Route path="/newblog" element={<NewBlog />} />
        <Route path={path} element={<MyCard data={Data[nani]} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
