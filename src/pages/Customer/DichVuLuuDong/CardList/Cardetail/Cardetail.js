import React from "react";

const CardDetail = ({ service }) => {
  return (
    <div className="flex min-h-[500px] max-h-[620px] flex-col items-center bg-[#C29A6C] text-textMain shadow-xl max-w-md mx-auto">
      {/**/}
      <div className="relative text-center mt-4">
        <h1
          style={{
            textShadow: `1px 1px 4px rgba(0, 0, 0, 0.3), 0px 0px 6px rgba(139, 94, 59, 0.4)`,
            letterSpacing: "2px",
          }}
          className=" max-w-[300px] truncate
          font-custom text-xl md:text-3xl font-bold text-textMain uppercase mx-auto leading-tight break-words"
        >
          {service.name}
        </h1>
        {/* Họa tiết */}
        <div className="mt-1 flex justify-center items-center gap-2 animate-fadeIn">
          <span className="w-8 h-2 bg-gradient-to-r from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md transition-transform duration-300 hover:scale-105"></span>
          <span className="w-20 h-1 bg-gradient-to-r from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md"></span>
          <img
            src="https://content.presentermedia.com/files/animsp/00029000/29305/a_chefs_kiss_lg_wm.gif"
            alt="Chef Like"
            className="w-14 h-16 object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
          <span className="w-20 h-1 bg-gradient-to-l from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md"></span>

          <span className="w-8 h-2 bg-gradient-to-r from-[#8B5E3C] to-[#C29A6C] rounded-full shadow-md transition-transform duration-300 hover:scale-105"></span>
        </div>
      </div>

      {/* Thành phần nguyên liệu */}
      <div className="w-full   px-10 bg-gradient-to-b from-[#C29A6C] to-white via-white/30 rounded-b-sm shadow-md">
        <ul className="min-h-44 max-h-52 overflow-y-auto text-textSub space-y-1 px-4 py-2 text-sm md:text-lg">
          {service.details.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-dashed border-b border-border pb-2"
            >
              <span className="font-medium text-textMain">{item.name}</span>
              <span className="text-primary text-lg">
                {(item.price * item.quantity).toLocaleString("vi-VN")}
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
