import { useState } from "react";

const LoginModal = ({ isOpen, onClose, setIsForgotPasswordOpen }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-background rounded-lg shadow-lg w-96 overflow-hidden">
        {/* Header */}
        <div className="bg-primary p-4 text-white flex justify-between items-center">
          <h5 className="font-semibold">Chào mừng trở lại!</h5>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-textMain">Tên đăng nhập</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nhập tên đăng nhập"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSub">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-textMain">Mật khẩu</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nhập mật khẩu"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textSub cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </span>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm text-textMain">
                <input type="checkbox" className="mr-2" /> Nhớ tài khoản
              </label>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsForgotPasswordOpen(true);
                }}
                className="text-primary text-sm"
              >
                Quên mật khẩu?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-button text-white p-3 rounded-lg hover:bg-secondary transition"
            >
              Đăng nhập
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-textMain">
            Chưa có tài khoản?{" "}
            <a href="#" className="text-primary font-semibold">
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
