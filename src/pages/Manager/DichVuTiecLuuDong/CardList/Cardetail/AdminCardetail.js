import React, { useState } from "react";
import FileUpload from "../../../../../components/FileUpload/index";

const AdminCardDetail = ({ service, onUpdate, onDelete, closePopup }) => {
  const [editedService, setEditedService] = useState(service);
  const [isChanged, setIsChanged] = useState(false);
  const [images, setImages] = useState(
    service.image ? [{ id: service.image, file: null }] : []
  );
  const [newDetail, setNewDetail] = useState({ name: "", price: "" });

  // Xử lý thay đổi thông tin dịch vụ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedService({ ...editedService, [name]: value });
    setIsChanged(true);
  };

  // Cập nhật chi tiết nguyên liệu
  const handleDetailChange = (id, key, value) => {
    const updatedDetails = editedService.details.map((item) =>
      item.id === id ? { ...item, [key]: value } : item
    );
    setEditedService({ ...editedService, details: updatedDetails });
    setIsChanged(true);
  };

  // Xóa một dòng nguyên liệu
  const handleDeleteDetail = (id) => {
    const updatedDetails = editedService.details.filter(item => item.id !== id);
    setEditedService({ ...editedService, details: updatedDetails });
    setIsChanged(true);
  };

  // Thêm một nguyên liệu mới
  const handleAddDetail = () => {
    if (newDetail.name && newDetail.price) {
      const newId = Date.now();
      setEditedService({
        ...editedService,
        details: [...editedService.details, { id: newId, ...newDetail }],
      });
      setNewDetail({ name: "", price: "" });
      setIsChanged(true);
    }
  };

  // Lưu thay đổi
  const handleSave = () => {
    onUpdate({ ...editedService, image: images.length > 0 ? images[0].id : "" });
    setIsChanged(false);
  };

  return (
    <div className="flex min-h-[500px] max-h-[620px] flex-col items-center 
    bg-[#C29A6C] text-textMain shadow-xl max-w-md mx-auto p-4 relative">
      {/* Nút đóng */}
      <button
        className="absolute z-50 top-3 right-3 bg-[#eee8e3] text-gray-700 
        hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
        onClick={closePopup}
      >
        ✕
      </button>
      
      {/* Tiêu đề */}
      <div className="relative text-center mt-4 w-full">
        <input
          type="text"
          name="name"
          value={editedService.name}
          onChange={handleChange}
          className="text-xl md:text-3xl font-bold text-textMain uppercase w-full text-center bg-transparent border-b border-textMain outline-none"
        />
      </div>

      {/* Thành phần nguyên liệu */}
      <div className="w-full px-4 bg-white shadow-md rounded-md mt-4">
        <ul className="text-textSub space-y-2 py-2">
          {editedService.details.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b border-gray-300 pb-2 relative"
            >
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleDetailChange(item.id, "name", e.target.value)}
                className="flex-1 p-1 bg-transparent border-b border-gray-400 outline-none"
              />
              <input
                type="number"
                value={item.price}
                onChange={(e) => handleDetailChange(item.id, "price", e.target.value)}
                className="w-20 p-1 bg-transparent border-b border-gray-400 outline-none text-right"
              />
              <button
                className="absolute z-50 top-1 right-1 bg-[#eee8e3] text-gray-700 hover:bg-gray-400 rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleDeleteDetail(item.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        {/* Input để thêm nguyên liệu mới */}
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Tên nguyên liệu"
            value={newDetail.name}
            onChange={(e) => setNewDetail({ ...newDetail, name: e.target.value })}
            className="flex-1 p-1 border-b border-gray-400 outline-none"
          />
          <input
            type="number"
            placeholder="Giá"
            value={newDetail.price}
            onChange={(e) => setNewDetail({ ...newDetail, price: e.target.value })}
            className="w-20 p-1 border-b border-gray-400 outline-none text-right"
          />
          <button
            onClick={handleAddDetail}
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md"
          >
            +
          </button>
        </div>
      </div>

      {/* Upload Hình ảnh */}
      <FileUpload images={images} setImages={setImages} label="Thêm ảnh" />

      {/* Nút Hủy, Lưu và Xóa toàn bộ */}
      <div className="flex justify-between w-full mt-4">
        <button
          onClick={closePopup}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Hủy
        </button>
        {isChanged && (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Lưu
          </button>
        )}
        <button
          onClick={() => onDelete(editedService.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Xóa toàn bộ
        </button>
      </div>
    </div>
  );
};

export default AdminCardDetail;