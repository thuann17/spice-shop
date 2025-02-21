import React from "react";

const Card = ({ product }) => {
  return (
    <div className="bg-background border h-80 border-border rounded-2xl shadow-md overflow-hidden">
      <a href="#">
        <img
          className="w-full h-44 object-cover p-4 rounded-t-xl"
          src={product.img}
          alt={product.name}
        />
      </a>
      <div className="px-6 pb-6">
        <a href="#">
          <h5 className="text-lg font-semibold text-primary hover:text-secondary transition duration-200">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-textMain">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
