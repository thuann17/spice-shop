import React from "react";

const Card = ({ name, price, image }) => {
  return (
    <div
      className="cursor-pointer relative flex flex-col items-center bg-secondary rounded-lg 
    shadow-md p-3 w-full sm:w-52 md:w-56 xl:64 transition-transform transform hover:shadow-xl border border-border"
    >
      <img
        className="hover:scale-105 hover:shadow-xl duration-500 w-48 h-40 sm:h-44 md:h-48 object-cover rounded-md"
        src={image}
        alt={name}
      />
      {/* Nhãn yêu thích */}
      <div className="absolute top-2 left-2 bg-[#E74C3C] text-white text-xs font-bold px-2 py-1 rounded">
        Đặt ngay
      </div>
      {/* Thông tin sản phẩm */}
      <h3 className="text-sm sm:text-lg font-bold mt-2 text-[#5A3E2B] truncate max-w-[200px]">
        {name}
      </h3>

      {/* Giá sản phẩm */}
      <p className="text-[#6D5F4F] text-sm sm:text-md">
        <span className="text-[#D35400] font-bold">
          Chỉ từ {price.toLocaleString()} VNĐ
        </span>
      </p>
    </div>
  );
};

export default Card;
