import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"; // Điều hướng
import { toast } from "react-toastify"; // Toast thông báo
import axios from "axios";
import RegisterModal from "./RegisterModal";
import "react-toastify/dist/ReactToastify.css"; // CSS của Toastify

const LoginModal = ({ isOpen, onClose, setIsForgotPasswordOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const navigate = useNavigate(); // Hook điều hướng

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });

      // Lưu token vào cookie
      setCookie("token", response.data.token, {
        path: "/",
        maxAge: 60 * 60 * 24,
        secure: true,
        sameSite: "Strict",
      });

      // Hiển thị toast thông báo thành công
      toast.success("Đăng nhập thành công!", {
        position: "top-right",
        autoClose: 3000, // 3 giây
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Đóng modal
      onClose();

      // Chuyển hướng đến trang "/manager"
      setTimeout(() => {
        navigate("/manager");
      }, 2000); // Chờ 2 giây trước khi chuyển trang
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.response);

      // Hiển thị thông báo thất bại
      toast.error(
        `Đăng nhập thất bại: ${error.response?.data?.message || "Lỗi không xác định"}`,
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg w-96 overflow-hidden">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <h5 className="font-semibold">Chào mừng trở lại!</h5>
            <button onClick={onClose} className="text-white text-xl">
              &times;
            </button>
          </div>

          <div className="p-6">
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Tên đăng nhập</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nhập tên đăng nhập"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Mật khẩu</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Nhập mật khẩu"
                    required
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center text-sm text-gray-700">
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

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Đăng nhập
              </button>
            </form>

            <p className="text-center mt-4 text-sm text-gray-700">
              Chưa có tài khoản?{" "}
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="text-primary font-semibold"
              >
                Đăng ký ngay
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Hiển thị modal đăng ký nếu isRegisterOpen là true */}
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </>
  );
};

export default LoginModal;
