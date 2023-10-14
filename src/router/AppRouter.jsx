import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Users from "../pages/users/Users";
import UserDetailsPage from "../pages/UserDetailsPage";
import HelloWorld from "../pages/HelloWorld";
import UsersForTest from "../pages/usersForTest/UsersForTest";

const AppRouter = () => {
    return (
            <Routes>
                <Route path={'/'} element={<MainPage/>} />
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/*'} element={<ErrorPage />}/>
                <Route path={'/users'} element={<Users />}/>
                <Route path={'/users/:id'} element={<UserDetailsPage/>}/>
                <Route path={'/hello'} element={<HelloWorld />} />
                <Route path={'/users-test'} element={<UsersForTest />} />
            </Routes>
    );
};

export default AppRouter;