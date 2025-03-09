import React, { useState } from "react";
import data from "./data";
import AddProduct from "../../../components/modal/AddProduct";

const statusClasses = {
  Available: "bg-green-500 text-white",
  "Out of Stock": "bg-red-500 text-white",
  Limited: "bg-orange-500 text-white",
};

const ProductManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [isOpen, setIsOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Xử lý sắp xếp
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0; // Không sắp xếp nếu chưa chọn

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // Dữ liệu hiển thị sau khi sắp xếp
  const displayedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

      {/* Bảng sản phẩm */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort("name")}>
                PRODUCT {sortConfig.key === "name" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort("price")}>
                PRICE {sortConfig.key === "price" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort("date")}>
                DATE {sortConfig.key === "date" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition">
                <td className="py-4 px-4">{item.name}</td>
                <td className="py-4 px-4">{item.price}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 text-sm rounded-lg ${statusClasses[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-between mt-6">
        <span className="text-gray-400 text-sm">
          SHOWING {currentPage * itemsPerPage - itemsPerPage + 1}- 
          {Math.min(currentPage * itemsPerPage, data.length)} OF {data.length}
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

export default ProductManager;
