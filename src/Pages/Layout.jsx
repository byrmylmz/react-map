import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import App from '../Components/NormalMap';
const Layout = () => {
  return (
    <div> 
      <Navbar/>
      <Outlet/>
    </div>
    );
};

export default Layout;
