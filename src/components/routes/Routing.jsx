import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/landing page/LandingPage";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";
import Write from "../../pages/write/Write";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/profile/:id" element={<Profile />} />
            <Route path="/home/write" element={<Write />} />
        </Routes>
    );
}
