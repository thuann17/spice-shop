import React from "react";

const CardDetail = ({ service }) => {
  return (
    <div className="flex min-h-[500px] max-h-[620px] flex-col items-center bg-background text-textMain shadow-xl max-w-md mx-auto">
      {/**/}
      <div className="relative text-center mt-4">
        <h1
          style={{
            textShadow: `1px 1px 4px rgba(0, 0, 0, 0.3), 0px 0px 6px rgba(139, 94, 59, 0.4)`,
            letterSpacing: "2px",
          }}
          className="font-custom text-xl md:text-3xl font-bold text-primary uppercase mx-auto leading-tight break-words"
        >
          {service.name}
        </h1>
        {/* Họa tiết */}
        <div className="mt-1 flex justify-center items-center gap-2 animate-fadeIn">
          <span className="w-8 h-2 bg-gradient-to-r from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md transition-transform duration-300 hover:scale-105"></span>
          <span className="w-20 h-1 bg-gradient-to-r from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md"></span>
          <img
            src="https://cdn.dribbble.com/userupload/13122763/file/original-79c46238fc3738b8c60813bb3af243fb.jpg?resize=400x300"
            alt="Chef Like"
            className="w-10 h-10 object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
          <span className="w-20 h-1 bg-gradient-to-l from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md"></span>

          <span className="w-8 h-2 bg-gradient-to-r from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md transition-transform duration-300 hover:scale-105"></span>
        </div>
      </div>

      {/* Thành phần nguyên liệu */}
      <div className="w-full py-2 px-10 bg-gradient-to-b from-background to-white via-white/30 rounded-b-sm shadow-md">
        <ul className="text-textSub space-y-4 px-4 py-2 text-sm md:text-lg">
          {service.details.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-dashed border-b border-border pb-2"
            >
              <span className="font-medium text-textMain">{item.name}</span>
              <span className="text-primary text-lg">
                {item.price.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hình ảnh món ăn */}
      <div className="relative w-full h-64">
        <img
          className="w-full h-full object-cover rounded-t-sm"
          src={service.image}
          alt={service.name}
        />
        {/* Lớp phủ mờ dần */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default CardDetail;
