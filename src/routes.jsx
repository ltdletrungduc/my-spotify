import React from "react";
import path from "./contants/path";
import { Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';

function MainRoutes() {
  return (
    <Routes>
      <Route element={ <MainLayout /> }>
        <Route index element={ <Home /> } />
        <Route path={ path.home } element={ <Home /> } />
        <Route path={ path.login } element={ <Login /> } />
        <Route path={ path.register } element={ <Register /> } />
        <Route path={ path.user } element={ <User /> } />
      </Route>
    </Routes>
  );
}

function Home() {
  return <div>HOME</div>;
}

function Login() {
  return <div>Login</div>;
}

function Register() {
  return <div>Register</div>;
}

function User() {
  return <div>User</div>;
}

export default MainRoutes;
