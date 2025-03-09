import React from "react";
import CardDetail from "../Cardetail/Cardetail";

const PopupService2 = ({ service, closePopup }) => {
  return (
    <div
      className="z-50 fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-sm"
      onClick={closePopup}
    >
      <div
        className="mx-10 rounded-xl shadow-2xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute z-50 top-3 right-3 bg-[#eee8e3] text-gray-700 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={closePopup}
        >
          ✕
        </button>

        {/* Nội dung modal */}
        <CardDetail service={service} />
      </div>
    </div>
  );
};

export default PopupService2;
