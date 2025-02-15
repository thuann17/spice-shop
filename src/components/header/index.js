import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="bg-primary text-white text-center py-1">
        <p className="text-sm">Địa chỉ</p>
      </div>

      <header className="bg-secondary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-textMain">Logo</h1>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
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
          <nav
            className={`lg:flex space-x-6 text-textMain font-medium ${
              isMenuOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 justify-start">
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8C5A3D]">
                  Trang Chủ
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
