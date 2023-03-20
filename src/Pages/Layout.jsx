import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import App from '../Components/NormalMap';
const Layout = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500"> 
      <Navbar/>
      <Outlet/>
    </div>
    );
};

export default Layout;
