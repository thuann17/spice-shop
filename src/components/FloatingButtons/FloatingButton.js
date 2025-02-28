import React from "react";
import "./style.css";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0838644462"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
          alt="Zalo"
          className="w-8 h-8"
        />
      </a>

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/thuan.ng.985974"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnDKAcwAqjwk8Yspu3n73kcXZEbZMBLTU0g&s"
          alt="Facebook"
          className="w-8 h-8"
        />
      </a>

      {/* SDT */}
      <a
        href="tel:0838644462"
        className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform phone-shake"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="Call"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default FloatingButtons;
