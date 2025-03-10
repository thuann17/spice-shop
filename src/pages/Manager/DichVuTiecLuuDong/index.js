import React, { useState } from "react";
import AddProduct from "../Product/Modal";
import CardList from "./CardList/"
const DichVuTiecLuuDong = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4 sm:p-6 text-white shadow-lg w-full max-w-7xl mx-auto">
      <div className=" flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Quản lý Dịch Vụ Tiệc Lưu Động
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 hidden sm:block "
        >
          Thêm dịch vụ
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden fixed bottom-6 right-6 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
        >
          +
        </button>
      </div>
      
      <CardList />
      <AddProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default DichVuTiecLuuDong;
