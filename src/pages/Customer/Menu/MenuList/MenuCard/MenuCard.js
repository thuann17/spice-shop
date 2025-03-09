import React from "react";

const MenuCard = ({ name, price, image, status, discount }) => {
  const originalPrice = price;
  const discountedPrice = Math.round(price * (1 - discount / 100));

  return (
    <div className="relative flex flex-col items-center bg-[#FAF3E0] rounded-lg shadow-md p-3 w-full sm:w-52 md:w-56  xl:64 transition-transform transform  hover:shadow-xl  border border-gray-200">
      {/* Hình ảnh sản phẩm */}
      <img
        className="hover:scale-105 hover:shadow-xl duration-500 w-48 h-40 sm:h-44 md:h-48 object-cover rounded-md"
        src={image}
        alt={name}
      />
      {/* Nhãn trạng thái (còn hàng/hết hàng) */}
      <div className="absolute top-1 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        {status}
      </div>
      {/* Thông tin sản phẩm */}
      <h3 className="text-sm sm:text-lg font-bold mt-2 text-gray-800">
      Khoai tây
      </h3>
      {/* Giá sản phẩm */}
      <div className="flex flex-col mt-1">
        <p className="text-gray-600 text-sm sm:text-md">
          Giá:{" "}
          <span className="text-red-500 font-bold">
            {price.toLocaleString()} VNĐ
          </span>
        </p>
        {/* Giá gốc + Nhãn giảm giá cùng hàng */}
        <div className="flex items-center space-x-16">
          <span className="text-gray-400 line-through text-sm">
            {originalPrice.toLocaleString()} đ
          </span>
          <div className="bg-yellow-400  text-black text-sm font-bold px-2 py-1 rounded flex items-center transform -rotate-12">
            <span className="mr-1">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.09243 1.41848L0 8.8288H3.86295L1.25546 17.7065L9.5608 5.86956H5.02183L9.5608 0L2.09243 1.41848Z"
                  fill="#F59E0B"
                ></path>
              </svg>
            </span>
            -{discount}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
