import React, { useState } from "react";

const data = {
  id: 1,
  name: "Bột điều màu",

  description:
    "Bột điều màu 100% từ hạt điều màu, dùng làm gia vị trong chế biến thực phẩm.",
  images: [
    "https://thucphamviet.net/wp-content/uploads/2024/02/405785609_767223942086603_2023345669857607214_n-1024x576.jpg",
    "https://havamall.com/wp-content/uploads/2020/10/b%E1%BB%99t-%C4%91i%E1%BB%81u-1.jpg",
  ],
  details: {
    "Thành phần": "Bột điều màu 100%",
    "Màu sắc": "Màu đỏ, cam đỏ của hạt điều màu",
    "Hướng dẫn sử dụng": "Dùng làm gia vị trong chế biến thực phẩm.",
    "Bảo quản":
      "Nơi khô ráo, thoáng mát, tránh tiếp xúc trực tiếp với ánh nắng mặt trời.",
    "Mùi vị": "Không mùi",
    "Hạn sử dụng": "12 tháng kể từ NSX",
    "Đóng gói tại": "Chi nhánh Công ty TNHH Gia Vị Việt Hiệp",
  },
};

const ChiTietGiaVi = () => {
  const [mainImage, setMainImage] = useState(data.images[0]);

  return (
    <div className="h-full  bg-background py-8 mt-16 xl:px-56">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
        {/* Hình ảnh sản phẩm */}
        <div className="w-full md:w-1/2 p-4 ">
          <img
            src={mainImage}
            alt="Gia vị"
            className="w-full rounded-lg shadow-md xl:h-96 object-cover"
          />
          <div className="flex gap-4 py-4 justify-center overflow-x-auto">
            {data.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Hình ${index + 1}`}
                className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => setMainImage(src)}
              />
            ))}
          </div>
        </div>

        {/* Chi tiết gia vị */}
        <div className="flex flex-col items-center w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
          {/* <p className="text-gray-600 mb-4">Mã sản phẩm: {data.sku}</p> */}
          <p className="text-gray-700 mb-6">{data.description}</p>
          <table className="w-full border-collapse border ">
            <tbody>
              {Object.entries(data.details).map(([key, value]) => (
                <tr key={key} className="border border-border">
                  <td className="p-1 xl:pl-3  bg-gray-100">{key}</td>
                  <td className="p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChiTietGiaVi;
