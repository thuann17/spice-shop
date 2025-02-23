import React, { useState } from "react";
import "./style.css";
import Header from "../../components/header/index";
import Fotter from "../../components/footer/footer";
import { Outlet } from "react-router-dom";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
const CustomerLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
      <FloatingButton />
    </>
  );
};

export default CustomerLayout;
