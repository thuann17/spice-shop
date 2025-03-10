import React from "react";
import MenuItem from "./MenuItem";

const AsideManager = ({ isMobile, toggleSidebar }) => {
  return (
    <>
      {isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 fixed sm:relative top-0 left-0 z-50 w-64
          ${isMobile ? "block" : "hidden"} sm:block`}
      >
        <h2 className="mb-12 text-xl font-semibold text-gray-300">Logo</h2>
        <nav className="space-y-2">
          <MenuItem icon="📊" text="Trang chủ" to="/manager" />
          <MenuItem icon="📅" text="Sản phẩm" to="/manager/product" />
          <MenuItem icon="👤" text="Sản phẩm 2" to="/manager/product2" />
          <MenuItem icon="👤" text="Menu" to="/manager/service" />
          <MenuItem icon="👤" text="Cấp tài khoản quản lý" to="/manager/r" />
          <MenuItem icon="👤" text="Home Images" to="/manager/home" />
        </nav>
      </aside>
    </>
  );
};

export default AsideManager;
