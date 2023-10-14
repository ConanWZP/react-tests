import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/users/Users";
import UserDetailsPage from "./pages/UserDetailsPage";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const AppNew = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default AppNew;