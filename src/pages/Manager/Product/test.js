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

  // Cập nhật giá sản phẩm
  const handlePriceChange = (e, id, field) => {
    const value = parseFloat(e.target.value) || 0;
    const updatedProducts = products.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="p-4 sm:p-6 text-white shadow-lg w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-bold">Quản lý sản phẩm</h2>
        <div className="button">
          {/* Button thêm sản phẩm */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hidden sm:block"
          >
            Thêm sản phẩm
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden fixed bottom-4 right-4 bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
          >
            +
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="products">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
                      className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <h3 className="text-base sm:text-lg font-bold text-center">
                        {item.name}
                      </h3>

                      {/* Giá & Giảm giá */}
                      <div className="flex justify-between items-center w-full mt-2">
                        {/* Giá gốc */}
                        <div className="flex flex-col items-center w-1/2">
                          <label className="text-xs text-gray-300">
                            Giá gốc:
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={item.price}
                            onChange={(e) =>
                              handlePriceChange(e, item.id, "price")
                            }
                            className="w-full sm:w-20 p-2 border rounded bg-gray-700 text-white text-sm text-center"
                          />
                        </div>

                        {/* Giảm giá */}
                        <div className="flex flex-col items-center w-1/2">
                          <label className="text-xs text-gray-300">
                            Giảm giá (%):
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={item.discount}
                            onChange={(e) =>
                              handlePriceChange(e, item.id, "discount")
                            }
                            className="w-full sm:w-20 p-2 border rounded bg-gray-700 text-white text-sm text-center"
                          />
                        </div>
                      </div>

                      {/* Giá sau giảm */}
                      <p className="mt-2 text-green-400 text-sm">
                        Giá sau giảm:{" "}
                        <span className="font-bold">
                          {item.price - (item.price * item.discount) / 100} đ
                        </span>
                      </p>

                      {/* Input vị trí */}
                      <div className="flex flex-col items-center w-full mt-2">
                        <label className="text-xs text-gray-300">Vị trí:</label>
                        <select
                          value={item.position}
                          onChange={(e) => handlePositionChange(e, item.id)}
                          className="w-full sm:w-16 p-2 border rounded bg-gray-700 text-white text-sm text-center"
                        >
                          {sortedProducts.map((p) => (
                            <option key={p.id} value={p.position}>
                              {p.position}
                            </option>
                          ))}
                        </select>
                      </div>
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
