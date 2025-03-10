import { useState } from "react";
import FileUpload from "../../../../components/FileUpload/index";

const AddProduct = ({ isOpen, onClose }) => {
  const [images, setImages] = useState([]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg w-96 overflow-hidden">
        {/* Header */}
        <div className="bg-purple-600 p-4 text-white flex justify-between items-center">
          <h5 className="font-semibold">Thêm dịch vụ</h5>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Tên dịch vụ</label>
              <input
                type="text"
                className="w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder="Nhập tên sản phẩm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Khoảng giá</label>
              <input
                type="number"
                className="w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder="Nhập giá sản phẩm"
              />
            </div>
            <FileUpload
              images={images}
              setImages={setImages}
              label={"Chọn ảnh đại diện"}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
            >
              Thêm dịch vụ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
