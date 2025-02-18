import React, { useState } from "react";
import Card from "./card";

const CardGrid = ({ products }) => {
  const itemsPerPage = 8; // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán số trang tối đa
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Lấy danh sách sản phẩm của trang hiện tại
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Chuyển trang
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Không có sản phẩm nào.
          </p>
        )}
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-primary text-white hover:bg-secondary"
            }`}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Trước
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-secondary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-primary text-white hover:bg-secondary"
            }`}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Sau
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGrid;
