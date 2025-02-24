import React, { useState, useEffect } from "react";

const categories = [
  { name: "Sốt và nước chấm", link: "/sauces" },
  { name: "Món ăn", link: "/foods" },
  { name: "Dịch vụ lưu động", link: "/services" },
];

const menuItems = [
  { name: "Hệ Thống", link: "#", requiresAuth: true }, // Yêu cầu nhập password
  { name: "Trang Chủ", link: "/" },
  { name: "Giới Thiệu", link: "/about" },
  { name: "Liên Hệ", link: "/contact" },
];

const Header = ({ onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSystemClick = () => {
    setIsModalOpen(true); // Mở modal khi bấm vào "Hệ Thống"
  };

  const handlePasswordSubmit = () => {
    const correctPassword = "123456"; // Đổi mật khẩu tại đây
    if (password === correctPassword) {
      //
      setIsModalOpen(false);
      setPassword(""); // Reset password field
      setError(""); // Xóa lỗi
      window.location.href = "/admin"; // Chuyển hướng sau khi đăng nhập
    } else {
      setError("Mật khẩu không đúng!");
    }
  };

  return (
    <>
      <div className="bg-primary text-white text-center py-1">
        <p className="text-sm">Địa chỉ: CanTho City.</p>
      </div>

      <header
        className={`fixed left-0 w-full bg-secondary text-white p-4 z-50 transition-all duration-200 ${
          isScrolled ? "top-0 shadow-md" : "top-6"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-3xl font-bold text-textMain">Logo</h1>
            <nav className="hidden lg:flex space-x-6 text-textMain font-medium">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link} // Gắn link vào đây
                  className="relative px-6 py-3 rounded-md transition-all duration-300
        bg-gradient-to-r from-[#9C6B4A] to-[#D7A98C] text-white shadow-md
        hover:shadow-lg hover:scale-105 hover:from-[#D7A98C] hover:to-[#9C6B4A] hover:text-[#FFF5E1]"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>

          <nav className="hidden lg:flex space-x-6 text-textMain font-medium">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-[#8C5A3D] cursor-pointer"
                onClick={
                  item.requiresAuth
                    ? (e) => {
                        e.preventDefault();
                        handleSystemClick();
                      }
                    : null
                }
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="lg:hidden text-white"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Modal nhập password */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold mb-4">Nhập mật khẩu</h2>
            <input
              type="password"
              className="w-full border p-2 rounded-md"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="mt-4 flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setIsModalOpen(false);
                  setPassword(""); // Xóa ký tự trong ô nhập mật khẩu khi đóng modal
                  setError(""); // Xóa thông báo lỗi nếu có
                }}
              >
                Hủy
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handlePasswordSubmit}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
