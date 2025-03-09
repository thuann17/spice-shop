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
          <h5 className="font-semibold">Thêm sản phẩm</h5>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Tên sản phẩm</label>
              <input
                type="text"
                className="w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder="Nhập tên sản phẩm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Giá</label>
              <input
                type="number"
                className="w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder="Nhập giá sản phẩm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Trạng thái</label>
              <select className="w-full text-black p-3 border border-gray-300 rounded-lg ">
                <option value="Available">Còn hàng</option>
                <option value="Out of Stock">Hết hàng</option>
                <option value="Limited">Sắp hết</option>
              </select>
            </div>

            {/* Upload Images */}
            <FileUpload images={images} setImages={setImages} />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
            >
              Thêm sản phẩm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
