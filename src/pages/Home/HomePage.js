import React, { useState } from "react";
import Header from "../../components/header/index";
import Aside from "../../components/aside/aside";
import CardGrid from "../../components/card/CardGrid";
import Banner from "../../components/banner/banner";
import img1 from "../../assets/images/bot-ngot-ajinomoto-goi-1kg-201912111050340356.jpg";
import img2 from "../../assets/images/hatnem.jpg";
import img3 from "../../assets/images/dauhao.jpg";
import img4 from "../../assets/images/icon.png";
import img5 from "../../assets/images/hamxuong.jpg";
import img6 from "../../assets/images/thitbo.jpg";
const productData = {
  "Sốt và nước chấm": [
    { id: 1, name: "Bột ngọt", price: "50.000 VND", img: img1 },
    { id: 2, name: "Hạt nêm", price: "70.000 VND", img: img2 },
  ],
  "Món ăn": [
    { id: 11, name: "Nước tương", price: "90.000 VND", img: img3 },
    { id: 12, name: "Dầu hào", price: "120.000 VND", img: img4 },
  ],
  "Dịch vụ lưu động": [
    { id: 13, name: "Nước hầm xương", price: "200.000 VND", img: img5 },
    { id: 14, name: "Thịt bò", price: "500.000 VND", img: img6 },
  ],
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sốt và nước chấm");

  return (
    <div className="flex flex-col min-h-screen bg-background mt-3">
      <Header onSelectCategory={setSelectedCategory} />
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mx-4 mt-4 mb-4">
        <div className="col-span-1 md:col-span-3">
          <Aside />
        </div>
        <div className="col-span-1 md:col-span-9">
          <CardGrid />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
