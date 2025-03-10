import Card from "./Card/Card";
import { useState } from "react";
import PopupService from "./Popup/PopupService";
import PopupService2 from "./Popup/PopupService2";
import "./index.css";
import Item from "./Items";

const CardList2 = () => {
  const [searchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [editService, setEditService] = useState(null);
  const handleUpdate = (updatedService) => {
    console.log("Dịch vụ đã cập nhật:", updatedService);
    setEditService(null);
  };

  const handleDelete = (serviceId) => {
    console.log("Xóa dịch vụ với ID:", serviceId);
    setEditService(null);
  };
  const filteredItems = Item.filter((item) =>
    item.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {sortedItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <Card {...item} />
          <div className="flex justify-center gap-3 mt-3">
            <button
              className="px-3 py-1 bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-all"
              onClick={() => setSelectedService(item)}
            >
              Xem
            </button>
            <button
              className="px-3 py-1 bg-yellow-500 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-yellow-600 hover:scale-105 transition-all"
              onClick={() => setEditService(item)}
            >
              Sửa
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-red-600 hover:scale-105 transition-all"
              onClick={() => handleDelete(item.id)}
            >
              Xóa
            </button>
          </div>
        </div>
      ))}
      {selectedService && (
        <PopupService
          service={selectedService}
          closePopup={() => setSelectedService(null)}
        />
      )}
      {editService && (
        <PopupService2
          service={editService}
          closePopup={() => setEditService(null)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CardList2;
