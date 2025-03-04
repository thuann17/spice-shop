import React, { useState, useEffect } from "react";

const categories = [
  { name: "Sốt và nước chấm", link: "/sauces" },
  { name: "Món ăn", link: "/foods" },
  { name: "Dịch vụ lưu động", link: "/services" },
];

const menuItems = [
  { name: "Hệ Thống", link: "#", requiresAuth: true },
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSystemClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <d>
      {/* Header */}
      <header
        className={`fixed top-0 z-50 left-0 w-full bg-secondary text-white p-4  transition-all duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex justify-between    items-center ">
          <h1 className="text-sm md:text-3xl font-bold text-textMain md:mx-2">
            Logo
          </h1>
          {/* danh mục chính */}
          <div className="flex items-center  md:justify-between lg:-ml-32 xl:ml-64 md:space-x-4">
            <nav className=" flex flex-1   flex-nowrap  justify-center md:gap-3 ">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="px-1 mx-0.5 md:px-11 lg:px-3 py-1 text-[10px] sm:text-base bg-[#9C6B4A] text-white rounded-md shadow-md hover:bg-[#D7A98C] transition"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>
          {/* Nút mở menu trên mobile */}
          <button
            className="lg:hidden w-6 text-white md:ml-2"
            onClick={handleToggleMenu}
          >
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

          {/* Menu Desktop */}
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
        </div>

        {/* Menu Mobile */}

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={handleToggleMenu}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-secondary text-textMain transform transition-all duration-300 ease-in-out shadow-lg 
  ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
        >
          {/* Header Menu */}
          <div className="p-4 flex items-center justify-between border-b border-gray-300">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={handleToggleMenu}
              className="text-white text-2xl p-2 hover:text-[#D7A98C] transition"
            >
              ✖
            </button>
          </div>

          {/* Danh sách menu */}
          <ul className="mt-4 space-y-4 px-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block text-lg font-medium p-2 rounded-lg hover:bg-[#D7A98C] hover:text-white transition-all"
                  onClick={
                    item.requiresAuth
                      ? (e) => {
                          e.preventDefault();
                          handleSystemClick();
                          setIsMenuOpen(false);
                        }
                      : () => setIsMenuOpen(false)
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
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
                onClick={() => {
                  if (password === "123456") {
                    setIsModalOpen(false);
                    setPassword("");
                    setError("");
                    window.location.href = "/admin";
                  } else {
                    setError("Mật khẩu không đúng!");
                  }
                }}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </d>
  );
};

export default Header;
