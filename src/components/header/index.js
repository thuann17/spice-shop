import React, { useState, useEffect } from "react";

const Header = ({ onSelectCategory }) => {
  const categories = ["Sốt và nước chấm", "Món ăn", "Dịch vụ lưu động"];
  const menuItems = [
    { name: "Hệ Thống", link: "#", requiresAuth: true }, // Yêu cầu nhập password
    { name: "Trang Chủ", link: "/" },
    { name: "Giới Thiệu", link: "/about" },
    { name: "Liên Hệ", link: "/contact" },
  ];

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

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSystemClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handlePasswordSubmit = () => {
    const correctPassword = "123456";
    if (password === correctPassword) {
      setIsModalOpen(false);
      setPassword("");
      setError("");
      window.location.href = "/admin";
    } else {
      setError("Mật khẩu không đúng!");
    }
  };

  return (
    <>
      {/* Thanh địa chỉ nhỏ phía trên */}
      <div className="bg-primary text-white text-center py-1">
        <p className="text-sm">Địa chỉ: CanTho City.</p>
      </div>

      {/* Header */}
      <header
        className={`fixed left-0 w-full bg-secondary text-white p-4 z-50 transition-all duration-200 ${
          isScrolled ? "top-0 shadow-md" : "top-6"
        }`}
      >
        <div className="mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-textMain">Logo</h1>
          {/* Danh mục */}
          <nav className=" space-x-4 text-textMain font-medium">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="relative px-3 py-2 rounded-md text-sm transition-all duration-300
        bg-gradient-to-r from-[#9C6B4A] to-[#D7A98C] text-white shadow-md
        hover:shadow-lg hover:scale-105 hover:from-[#D7A98C] hover:to-[#9C6B4A] hover:text-[#FFF5E1]"
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </a>
            ))}
          </nav>
          {/* Menu chính */}
          <nav className="hidden lg:flex space-x-6 text-textMain font-medium">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-[#8C5A3D] cursor-pointer"
                onClick={item.requiresAuth ? handleSystemClick : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Nút mở menu trên mobile */}
          <button className="lg:hidden text-white" onClick={handleToggleMenu}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Menu trên mobile */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 w-full bg-secondary lg:hidden transition-transform">
              <ul className="flex flex-col space-y-4 p-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block text-textMain hover:text-[#8C5A3D]"
                      onClick={
                        item.requiresAuth ? handleSystemClick : undefined
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Modal nhập mật khẩu */}
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
                  setPassword("");
                  setError("");
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
