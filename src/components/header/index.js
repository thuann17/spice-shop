import React, { useState, useEffect } from "react";
import LoginModal from "../modal/LoginModal";
import ForgotPasswordModal from "../modal/ForgotPasswordModal";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Đảm bảo e luôn tồn tại khi gọi
  const handleSystemClick = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div>
      <header
        className={`fixed top-0 z-50 left-0 w-full bg-secondary text-white p-4 transition-all duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-3xl font-bold text-textMain md:mx-2">
            Logo
          </h1>

          {/* Danh mục chính */}
          <div className="flex items-center md:justify-between lg:-ml-32 xl:ml-64 md:space-x-4">
            <nav className="flex flex-1 flex-nowrap justify-center md:gap-3">
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
                onClick={
                  item.requiresAuth ? (e) => handleSystemClick(e) : undefined
                }
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-3/4 bg-secondary text-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            {/* Nút đóng menu */}
            <button onClick={handleToggleMenu} className="text-white">
              ✖ Đóng
            </button>

            {/* Danh sách menu */}
            <ul className="mt-4 space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block text-lg hover:text-[#D7A98C] transition"
                    onClick={
                      item.requiresAuth
                        ? (e) => {
                            e.preventDefault();
                            handleSystemClick(e);
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
        </div>
      </header>

      {/* Modal đăng nhập */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ForgotPasswordModal />
    </div>
  );
};

export default Header;
