import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <>
      <Link to={`/detail/${product.id}`}>
        <div
          className="bg-background border h-80 border-border
       rounded-2xl shadow-md overflow-hidden relative"
        >
          <a href="#">
            <img
              className="w-full h-44 object-cover p-4 rounded-t-xl"
              src={product.img}
              alt={product.name}
            />
          </a>
          <div className="absolute top-1 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Còn hàng
          </div>
          {/* Giá từ (4) lên (3) - Kéo lên cao hơn, hướng về right hơn */}
          <div className="absolute right-0 bottom-0 bg-red-500 text-white px-20 py-1 rounded-md shadow-lg -rotate-[30deg] translate-x-8 -translate-y-6">
            <span className="text-sm font-bold">{"Giảm 10%"}</span>
          </div>
          <div className="px-6 pb-2 mt-3">
            <a href="#">
              <h5 className="text-lg font-semibold text-primary hover:text-secondary transition duration-200">
                {product.name}
              </h5>
            </a>
          </div>{" "}
          <div className="flex items-center justify-between ">
            <span className="text-2xl font-bold text-textMain px-6">
              {product.price}{" "}
            </span>{" "}
          </div>{" "}
          <span className="px-6 text-gray-400 line-through text-sm">
            2000000 VND
          </span>
        </div>
      </Link>
    </>
  );
};

export default Card;
