import React, { useState } from "react";
import "./style.css";
import Header from "../../components/header/index";
import CardGrid from "../../components/card/CardGrid";
import Aside from "../../components/aside/aside";
import Fotter from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import img1 from "../../assets/images/bot-ngot-ajinomoto-goi-1kg-201912111050340356.jpg";
import img2 from "../../assets/images/hatnem.jpg";
import img3 from "../../assets/images/dauhao.jpg";
import img4 from "../../assets/images/icon.png";
import img5 from "../../assets/images/hamxuong.jpg";
import img6 from "../../assets/images/thitbo.jpg";
import img7 from "../../assets/images/ca-hoi-na-uy(1).jpg";
const productData = {
  "Gia vị": [
    { id: 1, name: "Bột ngọt", price: "50.000 VND", img: img1 },
    { id: 2, name: "Hạt nêm", price: "70.000 VND", img: img2 },
    { id: 3, name: "Muối tiêu", price: "30.000 VND", img: img3 },
    { id: 4, name: "Tiêu xay", price: "40.000 VND", img: img4 },
    { id: 5, name: "Đường", price: "25.000 VND", img: img5 },
    { id: 6, name: "Bột nghệ", price: "45.000 VND", img: img6 },
    { id: 7, name: "Bột ớt", price: "55.000 VND", img: img7 },
    { id: 8, name: "Bột sắn", price: "60.000 VND", img: img1 },
    { id: 9, name: "Bột bắp", price: "35.000 VND", img: img2 },
    { id: 10, name: "Bột chiên xù", price: "70.000 VND", img: img3 },
  ],
  "Đóng chai": [
    { id: 11, name: "Nước tương", price: "90.000 VND", img: img3 },
    { id: 12, name: "Dầu hào", price: "120.000 VND", img: img4 },
  ],
  "Nước dùng": [{ id: 13, name: "Nước hầm xương", price: "200.000 VND", img: img5 }],
  "Tươi sống": [
    { id: 14, name: "Thịt bò", price: "500.000 VND", img: img6 },
    { id: 15, name: "Cá hồi", price: "450.000 VND", img: img7 },
  ],
};

const CustomerLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("Gia vị");

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-background mt-3">
        <Banner />
        <div className="grid grid-cols-12 gap-4 mx-4 mt-4">
        <Aside onSelectCategory={setSelectedCategory} />

          <div className="col-span-10">
          <CardGrid products={productData[selectedCategory] || []} />

          </div>
        </div>{" "}
        <Fotter />
      </div>
    </>
  );
};
export default CustomerLayout;
