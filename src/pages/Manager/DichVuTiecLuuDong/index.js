import React, { useState } from "react";
import AddProduct from "../Product/Modal";

const DichVuTiecLuuDong = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Quản lý Dịch Vụ Tiệc Lưu Động
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 hidden sm:block "
        >
          Thêm sản phẩm
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden fixed bottom-6 right-6 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
        >
          +
        </button>
      </div>
      <AddProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default DichVuTiecLuuDong;
