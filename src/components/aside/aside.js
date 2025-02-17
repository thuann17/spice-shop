import React from "react";
import RangeSlider from "../range/index";

const categories = [
  "Gia vị",
  "Đóng chai",
  "Nước dùng",
  "Tươi sống",
  "Tươi sống",
  "Tươi sống",
  "Tươi sống",
  "Tươi sống",
  "Tươi sống",
  "Tươi sống",
  "Tươi sống",
  "Tươi sống",
];

const Aside = ({ onSelectCategory }) => {
  return (
    <>
      <div className="col-span-3">
        <aside className=" bg-button p-4 h-[400px] overflow-y-auto rounded-lg scrollbar scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-300 mt-6 mx-4">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="p-2 bg-secondary shadow-md rounded cursor-pointer hover:bg-primary transition"
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>
        <div className="w-3/4 mt-16 mx-9 ">
          <RangeSlider />
        </div>
      </div>
    </>
  );
};
export default Aside;
