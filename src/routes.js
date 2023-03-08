import React from "react";
import path from "@contants/path";
import { Route, Routes } from "react-router-dom";

function MainRoutes() {
  return (
    <Routes>
      <Route path={path.home} element={Home}></Route>
      <Route path={path.home} element={Login}></Route>
      <Route path={path.home} element={Register}></Route>
      <Route path={path.home} element={User}></Route>
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
