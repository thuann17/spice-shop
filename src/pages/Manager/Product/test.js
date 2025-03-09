import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from "./data";
import AddProduct from "./Modal/index";

const ProductManager2 = () => {
  const [products, setProducts] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  // Sắp xếp theo position ban đầu
  const sortedProducts = [...products].sort((a, b) => a.position - b.position);

  // Xử lý kéo thả
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newProducts = [...products];
    const [movedItem] = newProducts.splice(result.source.index, 1);
    newProducts.splice(result.destination.index, 0, movedItem);

    const updatedProducts = newProducts.map((item, index) => ({
      ...item,
      position: index + 1,
    }));

    setProducts(updatedProducts);
  };

  // Cập nhật vị trí khi nhập tay
  const handlePositionChange = (e, id) => {
    const newPosition = parseInt(e.target.value, 10) || 1;
    let updatedProducts = products.map((item) =>
      item.id === id ? { ...item, position: newPosition } : item
    );

    updatedProducts = updatedProducts.sort((a, b) => a.position - b.position);
    setProducts(updatedProducts);
  };

  return (
    <div className="p-6 text-white shadow-lg w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Product List</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Thêm sản phẩm
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="products">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {sortedProducts.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-gray-800 rounded-lg shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <input
                        type="number"
                        min="1"
                        value={item.position}
                        onChange={(e) => handlePositionChange(e, item.id)}
                        className="w-full mt-2 p-2 border rounded bg-gray-700 text-white"
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ProductManager2;
