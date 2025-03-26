import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

const RegisterModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/register-manager", {
        username,
        email,
        password,
      });

      toast.success("Đăng ký thành công! Đang đăng nhập...");

      // Đăng nhập ngay sau khi đăng ký
      const loginResponse = await axios.post(
        "http://localhost:8080/auth/login",
        {
          username,
          password,
        }
      );

      // Lưu token vào cookie
      setCookie("token", loginResponse.data.token, {
        path: "/",
        maxAge: 60 * 60 * 24, // Token có hiệu lực trong 1 ngày
        secure: true,
        sameSite: "Strict",
      });

      // Chuyển hướng sau khi đăng ký
      onClose();
      window.location.href = "/manager";
    } catch (error) {
      toast.error(
        `Đăng ký thất bại: ${
          error.response?.data?.message || "Lỗi không xác định"
        }`
      );
      console.error("Lỗi đăng ký:", error.response || error);
    }
  };


  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg w-96 overflow-hidden">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <h5 className="font-semibold">Tạo tài khoản mới</h5>
            <button onClick={onClose} className="text-white text-xl">
              &times;
            </button>
          </div>

          <div className="p-6">
            <form onSubmit={handleRegister}>
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
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nhập email"
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
                    <i
                      className={`fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                    ></i>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition"
              >
                Đăng ký
              </button>
            </form>

            <p className="text-center mt-4 text-sm text-gray-700">
              Đã có tài khoản?{" "}
              <a href="#" className="text-primary font-semibold">
                Đăng nhập ngay
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
