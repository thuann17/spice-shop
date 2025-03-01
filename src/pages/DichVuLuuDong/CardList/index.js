import Card from "./Card/Card";
import { useState } from "react";
import PopupService from "./Popup/PopupService";

export const Items = [
  {
    id: 1,
    name: "Bàn tiệc Hải Sản",
    price: 2000000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
    details: [
      { id: 1, name: "Ghẹ", price: 300000, quantity: 2 },
      { id: 2, name: "Tôm càng", price: 250000, quantity: 3 },
      { id: 3, name: "Nghêu", price: 100000, quantity: 1 },
      { id: 4, name: "Ốc hương", price: 150000, quantity: 1 },
      { id: 5, name: "Bào ngư", price: 350000, quantity: 2 },
    ],
  },
  {
    id: 2,
    name: "Hải Sản Nướng",
    price: 1200000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
    details: [
      { id: 1, name: "Tôm hùm", price: 500000, quantity: 1 },
      { id: 2, name: "Mực nướng", price: 300000, quantity: 1 },
      { id: 3, name: "Sò điệp", price: 200000, quantity: 2 },
      { id: 4, name: "Hàu", price: 100000, quantity: 3 },
      { id: 5, name: "Bạch tuộc", price: 200000, quantity: 1 },
    ],
  },
  {
    id: 3,
    name: " Hải Sản Cay",
    price: 890000,
    image:
      "https://giadinh.mediacdn.vn/296230595582509056/2023/8/7/edit-z4557883676821a4f90e787de265d8c4c25437e1a72451-1691375977197776037183.png",
    details: [
      { id: 1, name: "Cá hồi", price: 300000, quantity: 1 },
      { id: 2, name: "Tôm sú", price: 200000, quantity: 2 },
      { id: 3, name: "Ngao", price: 100000, quantity: 1 },
      { id: 4, name: "Nấm", price: 50000, quantity: 1 },
      { id: 5, name: "Rau cải", price: 40000, quantity: 1 },
    ],
  },
];


const CardList2 = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="min-h-screen p-6 sm:p-10 bg-background">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-text-textMain  mb-8">
        Dịch vụ lưu động
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:mx-56">
        {Items.map((item) => (
          <div key={item.id} onClick={() => setSelectedService(item)}>
            <Card {...item} />
          </div>
        ))}
      </div>

      {/* Hiển thị popup */}
      {selectedService && (
        <PopupService
          service={selectedService}
          closePopup={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default CardList2;