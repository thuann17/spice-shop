import React from "react";

const Card = ({ name, price, image }) => {
  return (
    <div className="cursor-pointer relative flex flex-col items-center bg-gradient-to-b from-[#9C6B4F] to-[#6D4C41] rounded-xl shadow-xl shadow-[#5C3D31]/40 p-4 w-full sm:w-52 md:w-56 xl:64 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#A67B5B] border-opacity-50">
      {/* Hình ảnh sản phẩm */}
      <div className="relative w-48 h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={image}
          alt={name}
        />
        {/* Lớp phủ mờ dần từ trên xuống */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#6D4C41] rounded-lg"></div>
      </div>

      {/* Nhãn yêu thích */}
      <div className="absolute top-2 left-2 bg-[#E67E22] text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
        Đặt ngay
      </div>

      {/* Thông tin sản phẩm */}
      <h3 className="text-base sm:text-lg font-semibold mt-3 text-[#F5E1C0] drop-shadow-md">
        {name}
      </h3>

      {/* Giá sản phẩm */}
      <p className="text-[#F5E1C0] text-sm sm:text-md mt-1">
        Chỉ từ:{" "}
        <span className="text-[#FFD700] font-bold drop-shadow-sm">
          {price.toLocaleString()} VNĐ
        </span>
      </p>
    </div>
  );
};

export default Card;
