import React from "react";

const MenuCard = ({ name, price, image, status, discount }) => {
  const originalPrice = price;
  const discountedPrice = Math.round(price * (1 - discount / 100));

  return (
    <div className="bg-background border h-80 border-border rounded-2xl shadow-md overflow-hidden relative">
      <a href="#">
        <img
          className="w-full h-44 object-cover p-4 rounded-t-xl"
          src={image}
          alt={name}
        />
      </a>
      {/* Giá từ (4) lên (3) - Kéo lên cao hơn, hướng về right hơn */}
      <div className="absolute right-0 bottom-0 bg-red-500 text-white px-20 py-1 rounded-md shadow-lg -rotate-[30deg] translate-x-8 -translate-y-6">
        <span className="text-sm font-bold">{"Giảm 10%"}</span>
      </div>
      <div className="px-6 pb-2 mt-3">
        <a href="#">
          <h5 className="text-lg font-semibold text-primary hover:text-secondary transition duration-200">
          Khoai tây
          
          </h5>
        </a>
      </div>{" "}
    </div>
  );
};

export default MenuCard;
