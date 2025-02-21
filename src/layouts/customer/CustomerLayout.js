import React, { useState } from "react";
import "./style.css";
import Header from "../../components/header/index";

import Fotter from "../../components/footer/footer";

import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
};

export default CustomerLayout;
