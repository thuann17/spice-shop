import Card from "./Card/Card";
import { useState } from "react";
import PopupService from "./Popup/PopupService";
import
{ Input }
from
"antd"
;
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
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  // Tìm tên
  const filteredItems = Items.filter((item) =>
    item.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  // Sắp xếp theo giá
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });
  return (
    <div className="min-h-screen p-6 sm:p-10 bg-background">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-text-textMain  mb-8">
        Dịch vụ lưu động
      </h1>
      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="flex flex-col sm:flex-row sm:justify-center  gap-4 mb-6 w-full  rounded-xl ">
        {/* Ô tìm kiếm */}
        <input
          type="text"
          placeholder="🔍 Tìm kiếm dịch vụ..."
          className="px-4 py-3 border border-gray-300 rounded-md w-full  md:w-2/4 lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <Input placeholder="Tìm kiếm dịc vụ "/> */}
        

        {/* Bộ lọc theo giá */}
        <select
          className="px-4 py-3 border border-gray-300 rounded-md w-full  md:w-2/4 lg:w-1/4 bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value=""> Lọc theo giá</option>
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:mx-56">
        {sortedItems.map((item) => (
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