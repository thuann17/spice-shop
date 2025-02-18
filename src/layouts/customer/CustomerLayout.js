import React from "react";
import "./style.css";
import Header from "../../components/header/index";
import CardGrid from "../../components/card/CardGrid";
import Aside from "../../components/aside/aside";
import Fotter from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
const CustomerLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-background">
        <Banner />
        <div className="grid grid-cols-12 gap-4 mx-4 mt-4">
          <Aside />
          <div className="col-span-10">
            <CardGrid />
          </div>
        </div>{" "}
        <Fotter />
      </div>
    </>
  );
};
export default CustomerLayout;
