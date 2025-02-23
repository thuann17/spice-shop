const CardDetail = ({ service }) => {
  if (!service) {
    return (
      <h2 className="text-center text-red-500 text-lg">
        Dịch vụ không tồn tại
      </h2>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#FAF3E0] to-[#E8D8C4] text-gray-800 p-6 rounded-xl shadow-xl max-w-md mx-auto">
      {/* Hình ảnh */}
      <img
        className="w-full h-64 object-cover rounded-lg shadow-md"
        src={service.image}
        alt={service.name}
      />

      {/* Tên dịch vụ */}
      <h1 className="text-2xl font-semibold mt-4 text-[#8B5E3B]">
        {service.name}
      </h1>

      {/* Giá tổng */}
      <p className="bg-[#D9A679] text-white font-bold text-lg py-2 px-6 mt-3 rounded-full shadow-md">
        {service.price.toLocaleString()} VNĐ
      </p>

      {/* Danh sách nguyên liệu */}
      <div className="w-full mt-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-[#8B5E3B] mb-2">
          Thành phần
        </h2>
        <ul className="text-gray-600 space-y-2">
          {service.details.map((item) => (
            <li
              key={item.id}
              className="flex justify-between border-b border-gray-300 pb-1"
            >
              <span>{item.name}</span>
              <span className="text-gray-900 font-medium">
                {item.quantity} x {item.price.toLocaleString()} VNĐ
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
