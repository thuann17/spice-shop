import React, { useState } from "react";
import data from "./data";
import AddProduct from "../../../components/modal/AddProduct";
import MenuCard from "./Menu";
const ProductManager2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(data); // State để lưu danh sách sản phẩm
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [isOpen, setIsOpen] = useState(false);

  // Sắp xếp sản phẩm theo vị trí
  const sortedProducts = [...products].sort((a, b) => a.position - b.position);

  // Cắt dữ liệu theo trang
  const displayedData = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Hàm thay đổi vị trí
  const changePosition = (id, direction) => {
    const index = products.findIndex((item) => item.id === id);
    if (index < 0) return;

    const newProducts = [...products];
    const swapIndex = direction === "up" ? index - 1 : index + 1;

    if (swapIndex < 0 || swapIndex >= newProducts.length) return;

    // Hoán đổi vị trí
    [newProducts[index].position, newProducts[swapIndex].position] = 
      [newProducts[swapIndex].position, newProducts[index].position];

    setProducts([...newProducts]);
  };

  return (
    <div className="p-6 text-white shadow-lg w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Thêm sản phẩm
        </button>
      </div>

      <div className="min-h-screen p-6 sm:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedData.map((item, index) => (
            <MenuCard
              key={index}
              {...item}
              onMoveUp={() => changePosition(item.id, "up")}
              onMoveDown={() => changePosition(item.id, "down")}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
        <span className="text-gray-400 text-sm">
          SHOWING {currentPage * itemsPerPage - itemsPerPage + 1}- 
          {Math.min(currentPage * itemsPerPage, products.length)} OF {products.length}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-4 py-2 rounded-lg transition ${
                num === currentPage ? "bg-purple-600 text-white" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <AddProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ProductManager2;
