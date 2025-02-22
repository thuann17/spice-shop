import React from "react";

const MenuCard = ({ name, price, image }) => {
  return (
    <div className="relative flex flex-col items-center bg-[#FAF3E0 ] rounded-lg shadow-md p-3 w-full sm:w-52 md:w-56  xl:64 transition-transform transform  hover:shadow-xl  border border-gray-200">
      {/* Hình ảnh sản phẩm */}
      <img
        className="hover:scale-105 hover:shadow-xl duration-500 w-48 h-40 sm:h-44 md:h-48 object-cover rounded-md"
        src={image}
        alt={name}
      />

      {/* Nhãn yêu thích */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        Yêu thích+
      </div>

      {/* Thông tin sản phẩm */}
      <h3 className="text-sm sm:text-lg font-bold mt-2 text-gray-800">
        {name}
      </h3>

      {/* Giá sản phẩm */}
      <p className="text-gray-600 text-sm sm:text-md">
        Giá:{" "}
        <span className="text-red-500 font-bold">
          {price.toLocaleString()} VNĐ
        </span>
      </p>
    </div>
  );
};

export default MenuCard;
