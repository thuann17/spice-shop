const Card = ({ name, price, image }) => {
  return (
    <div className="cursor-pointer relative flex flex-col items-center bg-secondary rounded-lg 
    shadow-md p-2 w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] transition-transform transform hover:shadow-xl border border-border">
      <img
        className="hover:scale-105 hover:shadow-xl duration-500 w-40 h-32 object-cover rounded-md"
        src={image}
        alt={name}
      />
      <div className="absolute top-2 left-2 bg-[#E74C3C] text-white text-xs font-bold px-2 py-1 rounded">
        Đặt ngay
      </div>
      <h3 className="text-xs sm:text-sm font-bold mt-2 text-[#5A3E2B]">
        {name}
      </h3>
      <p className="text-[#6D5F4F] text-xs sm:text-sm">
        <span className="text-[#D35400] font-bold">
          {price.toLocaleString()} VNĐ
        </span>
      </p>
    </div>
  );
};

export default Card;
