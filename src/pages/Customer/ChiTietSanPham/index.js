import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ChiTietGiaVi = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8080/api/spices/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        if (result.imageUrls && result.imageUrls.length > 0) {
          setMainImage(result.imageUrls[0]);
        }
      })
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, [id]);

  if (!data) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="h-full bg-background py-8 mt-16 xl:px-56">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
        {/* Hình ảnh sản phẩm */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={mainImage}
            alt={data.name}
            className="w-full rounded-lg shadow-md xl:h-96 object-cover"
          />
          <div className="flex gap-4 py-4 justify-center overflow-x-auto">
            {data.imageUrls?.map((src, index) => (
              <img
                key={index}
                src={src}
                className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => setMainImage(src)}
                alt="Ảnh sản phẩm"
              />
            ))}
          </div>
        </div>

        {/* Chi tiết gia vị */}
        <div className="flex flex-col items-center w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
          <p className="text-gray-700 mb-6">{data.description}</p>

          <table className="w-full border-collapse border">
            <tbody>
              {/*  */}
              <tr className="border border-border">
                <td className="p-2 bg-gray-100">Giá</td>
                <td className="p-2">{data.price} VND</td>
              </tr>
              <tr className="border border-border">
                <td className="p-2 bg-gray-100">Đơn vị</td>
                <td className="p-2">{data.unit}</td>
              </tr>
              <tr className="border border-border">
                <td className="p-2 bg-gray-100">Số lượng còn lại</td>
                <td className="p-2">{data.quantityAvailable}</td>
              </tr>
              <tr className="border border-border">
                <td className="p-2 bg-gray-100">Tình trạng</td>
                <td className="p-2">{data.status ? "Còn hàng" : "Hết hàng"}</td>
              </tr>

              {/*  */}
              {data.spiceDetail && (
                <>
                  <tr className="border border-border">
                    <td className="p-2 bg-gray-100">Thành phần</td>
                    <td className="p-2">{data.spiceDetail.ingredients}</td>
                  </tr>
                  <tr className="border border-border">
                    <td className="p-2 bg-gray-100">Hạn sử dụng</td>
                    <td className="p-2">{data.spiceDetail.expirationPeriod}</td>
                  </tr>
                  <tr className="border border-border">
                    <td className="p-2 bg-gray-100">Mùi hương</td>
                    <td className="p-2">{data.spiceDetail.smell}</td>
                  </tr>
                  <tr className="border border-border">
                    <td className="p-2 bg-gray-100">Bảo quản</td>
                    <td className="p-2">{data.spiceDetail.storage}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChiTietGiaVi;
