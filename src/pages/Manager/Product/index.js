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

  const displayeddata = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 text-white shadow-lg w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center ">
        <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
          Product List
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 hidden sm:block"
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
      {/* Table Wrapper (Cuộn ngang trên mobile) */}
      <div className="overflow-x-auto rounded-lg sm:h-[31.3rem]">
        {/* Hiển thị dạng bảng trên màn hình lớn */}
        <table className="w-full min-w-[600px] text-left border-collapse hidden sm:table">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="py-3 px-4">PRODUCT</th>
              <th className="py-3 px-4">PRICE</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4">DATE</th>
            </tr>
          </thead>
          <tbody>
            {displayeddata.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="py-4 px-4">{item.name}</td>
                <td className="py-4 px-4">{item.price}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-lg ${
                      statusClasses[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="sm:hidden">
          {displayeddata.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-700 p-4 bg-gray-800 mb-2 rounded-lg"
            >
              <p className="text-sm text-gray-300">
                <strong className="text-white">Sản phẩm:</strong> {item.name}
              </p>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Giá:</strong> {item.price}
              </p>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Trạng thái:</strong>{" "}
                <span
                  className={`px-2 py-1 text-xs rounded-lg ${
                    statusClasses[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </p>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Ngày:</strong> {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
        <span className="text-gray-400 text-sm">
          SHOWING {currentPage * itemsPerPage - itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, data.length)} OF{" "}
          {data.length}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-4 py-2 rounded-lg transition ${
                num === currentPage
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
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
