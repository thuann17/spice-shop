import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Thêm state cho menu mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Thanh địa chỉ nhỏ phía trên */}
      <div className="bg-primary text-white text-center py-1">
        <p className="text-sm">Địa chỉ: CanTho City.</p>
      </div>

      {/* Header chính với hiệu ứng */}
      <header
        className={`fixed left-0 w-full bg-secondary text-white p-4 z-50 transition-all duration-50 ${
          isScrolled ? "top-0 shadow-md" : "top-6"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-textMain">Logo</h1>

          {/* Nút mở menu trên mobile */}
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

          {/* Menu */}
          <nav
            className={`absolute top-full left-0 w-full bg-secondary lg:static lg:w-auto lg:bg-transparent transition-transform ${
              isMenuOpen ? "block" : "hidden"
            } lg:flex space-x-6 text-textMain font-medium`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 justify-start p-4 lg:p-0">
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
