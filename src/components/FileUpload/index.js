import { useState } from "react";

const FileUpload = ({ images, setImages }) => {
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      file: file,
    }));
    setImages([...images, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Hình ảnh sản phẩm</label>
      <label className="block w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:bg-gray-100">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <span className="text-gray-500">+ Chọn ảnh</span>
      </label>

      {/* Hiển thị ảnh */}
      <div className="flex flex-wrap gap-3 mt-3">
        {images.map((img) => (
          <div key={img.id} className="relative w-24 h-24">
            <img
              src={img.id}
              alt="preview"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              onClick={() => removeImage(img.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;