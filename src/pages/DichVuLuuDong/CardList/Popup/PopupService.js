import React from "react";
import CardDetail from "../Cardetail/Cardetail";

const PopupService = ({ service, closePopup }) => {
  return (
    <div
      className=" fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-sm"
      onClick={closePopup}
    >
      <div
        className="mx-1 rounded-xl shadow-2xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng (X) */}
        <button
          className="absolute top-3 right-3 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
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

export default PopupService;
