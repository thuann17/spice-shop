import React from "react";

const Card2 = ({ name, price, image }) => {
  return (
    <div className="cursor-pointer relative flex flex-col items-center bg-[#FAF3E0] rounded-lg shadow-md p-3 w-full sm:w-52 md:w-56 xl:64 transition-transform transform hover:shadow-xl border border-gray-200">
      {/* Hình ảnh sản phẩm */}
      <img
        className="hover:scale-105 hover:shadow-xl duration-500 w-48 h-40 sm:h-44 md:h-48 object-cover rounded-md"
        src={image}
        alt={name}
      />
      {/* Lớp phủ mờ dần từ trên xuống */}
      <div className=" absolute inset-0 bg-gradient-to-b from-white/100 via-white/20 to-transparent "></div>

      {/* Nhãn yêu thích */}
      <div className="absolute top-2 left-2 bg-[#E74C3C] text-white text-xs font-bold px-2 py-1 rounded">
        Đặt ngay 2
      </div>

      {/* Thông tin sản phẩm */}
      <h3 className="text-sm sm:text-lg font-bold mt-2 text-primary">
        {name}
      </h3>

      {/* Giá sản phẩm */}
      <p className="text-[#6D5F4F] text-sm sm:text-md">
        Chỉ từ:{" "}
        <span className="text-[#D35400] font-bold">
          {price.toLocaleString()} VNĐ
        </span>
      </p>
    </div>
  );
};

export default Card2;
