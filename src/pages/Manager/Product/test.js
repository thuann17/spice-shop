import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from "./data";
import AddProduct from "../../../components/modal/AddProduct";

const statusClasses = {
  Available: "bg-green-500 text-white",
  "Out of Stock": "bg-red-500 text-white",
  Limited: "bg-orange-500 text-white",
};

const ProductManager2 = () => {
  const [products, setProducts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [isOpen, setIsOpen] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const updatedProducts = Array.from(products);
    const [movedItem] = updatedProducts.splice(result.source.index, 1);
    updatedProducts.splice(result.destination.index, 0, movedItem);
    setProducts(updatedProducts);
  };

  const displayedData = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 text-white shadow-lg w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
          Product List
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 hidden sm:block"
        >
          Thêm sản phẩm
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg sm:h-[31.3rem]">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="products">
            {(provided) => (
              <table
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full min-w-[600px] text-left border-collapse hidden sm:table"
              >
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="py-3 px-4">PRODUCT</th>
                    <th className="py-3 px-4">PRICE</th>
                    <th className="py-3 px-4">STATUS</th>
                    <th className="py-3 px-4">DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map((item, index) => (
                    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="border-b border-gray-700 hover:bg-gray-800 transition"
                        >
                          <td className="py-4 px-4">{item.name}</td>
                          <td className="py-4 px-4">{item.price}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 text-sm rounded-lg ${statusClasses[item.status]}`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">{item.date}</td>
                        </tr>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </tbody>
              </table>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <AddProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ProductManager2;
