import { useState } from "react";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-background rounded-lg shadow-lg w-96 overflow-hidden">
        {/* Header */}
        <div className="bg-primary p-4 text-white flex justify-between items-center">
          <h5 className="font-semibold">Đổi mật khẩu</h5>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form>
            {/* Current Password */}
            <div className="mb-4">
              <label className="block text-textMain">Mật khẩu hiện tại</label>
              <div className="relative">
                <input
                  type={showPassword.current ? "text" : "password"}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nhập mật khẩu hiện tại"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSub cursor-pointer"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      current: !showPassword.current,
                    })
                  }
                >
                  <i
                    className={`fas ${
                      showPassword.current ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </span>
              </div>
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className="block text-textMain">Mật khẩu mới</label>
              <div className="relative">
                <input
                  type={showPassword.new ? "text" : "password"}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nhập mật khẩu mới"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSub cursor-pointer"
                  onClick={() =>
                    setShowPassword({ ...showPassword, new: !showPassword.new })
                  }
                >
                  <i
                    className={`fas ${
                      showPassword.new ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </span>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="mb-4">
              <label className="block text-textMain">
                Xác nhận mật khẩu mới
              </label>
              <div className="relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nhập lại mật khẩu mới"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSub cursor-pointer"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      confirm: !showPassword.confirm,
                    })
                  }
                >
                  <i
                    className={`fas ${
                      showPassword.confirm ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-button text-white p-3 rounded-lg hover:bg-secondary transition"
            >
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
