import React, { useState } from "react";
import "./style.css";
import Header from "../../components/header/index";
import Fotter from "../../components/footer/footer";
import { Outlet } from "react-router-dom";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";

const CustomerLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sốt và nước chấm");

  return (
    <>
      {/* Truyền setSelectedCategory để Header thay đổi danh mục */}
      <Header onSelectCategory={setSelectedCategory} />
      {/* Truyền selectedCategory xuống tất cả các trang con */}
      <div className="bg-background">
        <Outlet context={{ setSelectedCategory }} />
      </div>
      <Fotter />
      <FloatingButton />
    </>
  );
};

export default CustomerLayout;
