import React from "react";
import path from "./contants/path";
import { Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Search from "./pages/Search/Search";

function MainRoutes() {
  return (
    <Routes>
      <Route element={ <MainLayout /> }>
        <Route index element={ <Home /> } />
        <Route path={ path.home } element={ <Home /> } />
        <Route path={ path.search } element={ <Search /> } />
        <Route path={ path.collection } element={ <Collection /> } />
      </Route>
    </Routes>
  );
}


function Home() {
  return <div>HOME</div>;
}

// function Search() {
//   return <div>Search</div>;
// }

function Collection() {
  return <div>Collection</div>;
}

export default MainRoutes;
