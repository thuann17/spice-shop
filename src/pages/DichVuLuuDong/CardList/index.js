// 
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import PopupService from "./Popup/PopupService";
import { Select } from "antd";
import "./index.css";

const CardList2 = () => {
  const [services, setServices] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedService, setSelectedService] = useState(null);

useEffect(() => {
  axios
    .get("http://localhost:8080/api/services")
    .then((response) => {
      console.log("Dữ liệu API:", response.data); 
      setServices(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Lỗi khi lấy dữ liệu:", error);
      setLoading(false);
    });
}, []);


  // Sắp xếp dữ liệu theo giá
  const sortedItems = [...services].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-background">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-text-textMain mb-8">
        Dịch vụ lưu động
      </h1>

      {/* Bộ lọc */}
      <div className="flex justify-center md:justify-end gap-4 mb-6 w-full rounded-xl">
        <Select
          className="custom-select"
          value={sortOrder}
          showSearch
          style={{ width: 200 }}
          placeholder="Sắp xếp theo giá"
          onChange={(value) => setSortOrder(value)}
          options={[
            { value: "", label: "Sắp xếp theo giá" },
            { value: "asc", label: "Giá tăng dần" },
            { value: "desc", label: "Giá giảm dần" },
          ]}
        />
      </div>

      {/* Hiển thị danh sách dịch vụ */}
      {loading ? (
        <p className="text-center text-lg font-semibold">Đang tải...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:mx-56">
          {sortedItems.map((item) => (
            <div key={item.id} onClick={() => setSelectedService(item)}>
              <Card {...item} />
            </div>
          ))}
        </div>
      )}

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
