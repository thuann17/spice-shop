import React from "react";
import "./style.css";
import CardGrid from "../card/CardGrid";
import Images from "./image";

function Body() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="flex mx-4 mt-4">
        {/* Brand Image */}
        <div className="flex-1 text-center mx-4 h-96">
          <img
            src={Images.icon2}
            alt="Ảnh thương hiệu"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 mx-4 mt-4">
        {/* Sidebar */}
        <aside className="col-span-2 bg-button p-4 h-[400px] overflow-y-auto rounded-lg scrollbar scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-300">
          <ul className="space-y-2">
            <li className="p-2 bg-secondary shadow-md rounded">Gia vị</li>
            <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
            <li className="p-2 bg-secondary shadow-md rounded">Nước dùng</li>
            <li className="p-2 bg-secondary shadow-md rounded">Tươi sống</li>
            <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
            <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
            <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
            <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
            <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="col-span-10">
          <CardGrid />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white text-center py-4 mt-4 rounded-lg mx-4">
        Footer
      </footer>
    </div>
  );
}

export default Body;
