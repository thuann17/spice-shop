import React from "react";

const Card = () => {
  return (
    <div className="bg-background border border-border rounded-2xl shadow-md overflow-hidden">
      <a href="#">
        <img
          className="w-full h-40 object-cover p-4 rounded-t-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmgxP16I99RT4NvWCdHi_4cSBK0z0kFQNLg&s"
          alt="Nước tương tiêu thái tảm"
        />
      </a>
      <div className="px-6 pb-6">
        <a href="#">
          <h5 className="text-lg font-semibold text-primary hover:text-secondary transition duration-200">
            Nước tương tiêu thái tảm
          </h5>
        </a>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-textMain">500.000 VND</span>
          {/* Có thể thêm nút nếu cần */}
        </div>
      </div>
    </div>
  );
};

export default Card;
