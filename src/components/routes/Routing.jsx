import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/landing page/LandingPage";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";
import Editor from "../../pages/editor/Editor";
import NewWrite from "../../pages/new write/NewWrite";
import ExistingWrite from "../../pages/existing write/ExistingWrite";
import Content from "../../pages/content/Content";
import Sinopsis from "../../pages/sinopsis/Sinopsis";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/profile/:id" element={<Profile />} />
            <Route path="/home/write/editor/:id" element={<Editor />} />
            <Route path="/home/write/new-write" element={<NewWrite />} />
            <Route
                path="/home/write/existing-write/:id"
                element={<ExistingWrite />}
            />
            <Route path="/home/post/content/:id" element={<Content />} />
            <Route path="/home/post/sinopsis/:id" element={<Sinopsis />} />
        </Routes>
    );
}
