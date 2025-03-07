import React, { useState } from "react";
import products from "./data";

const statusClasses = {
  Available: "bg-green-500 text-white",
  "Out of Stock": "bg-red-500 text-white",
  Limited: "bg-orange-500 text-white",
};

const ProductManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 text-white shadow-lg w-full max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
        Product List
      </h2>

      {/* Table Wrapper (Cuộn ngang trên mobile) */}
      <div className="overflow-x-auto border border-gray-700 rounded-lg h-[31.3rem]">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="py-3 px-4">PRODUCT</th>
              <th className="py-3 px-4">PRICE</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4">DATE</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((item, index) => (
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
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
        <span className="text-gray-400 text-sm">
          SHOWING {currentPage * itemsPerPage - itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, products.length)} OF{" "}
          {products.length}
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
    </div>
  );
};

export default ProductManager;
