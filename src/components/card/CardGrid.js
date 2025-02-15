import React from "react";
import Card from "./card";

const CardGrid = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill()
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
};

export default CardGrid;
