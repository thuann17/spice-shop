import React from "react";
import Card from "./card";

const CardGrid = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">Không có sản phẩm nào.</p>
        )}

      </div>
    </div>
  );
};

export default CardGrid;
