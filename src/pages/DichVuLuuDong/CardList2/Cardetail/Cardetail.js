
const CardDetail2 = ({ service }) => {
  if (!service) {
    return (
      <h2 className="text-center text-red-500 text-lg">Món ăn không tồn tại</h2>
    );
  }

  return (
    <div className="flex min-h-[500px] max-h-[620px] flex-col items-center bg-background text-textMain  shadow-xl max-w-md mx-auto ">
      {/* Tên món ăn */}
      <h1
        style={{
          textShadow: `
              1px 1px 4px rgba(0, 0, 0, 0.3),  
              0px 0px 6px rgba(139, 94, 59, 0.4)`,
          letterSpacing: "2px",
        }}
        className="font-custom mt-4 max-w-[60%] text-xl md:text-3xl font-bold text-primary uppercase text-center mx-auto leading-tight break-words"
      >
        {service.name}
      </h1>

      {/* Thành phần nguyên liệu bg-[#FAF3E0]*/}
      <div className="w-full py-4 px-10 bg-gradient-to-b from-background to-white via-white/30 rounded-b-sm shadow-md">
        <ul className="text-textSub space-y-4 px-4 py-2 text-sm md:text-lg">
          {service.details.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b border-border pb-2"
            >
              <span className="font-medium text-textMain">{item.name}</span>
              <span className="text-primary  text-lg">
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
        {/* Lớp phủ mờ dần từ */}
        <div className=" absolute inset-0 bg-gradient-to-b from-white/100 via-white/40 to-transparent "></div>
      </div>
    </div>
  );
};

export default CardDetail2;
