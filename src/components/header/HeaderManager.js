import React, { useState } from "react";
import Notification from "../Notification";
import ProfileMenu from "../ProfileMenu";

const HeaderManager = ({ toggleSidebar }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        {/* Nút mở menu chỉ hiển thị trên mobile */}
        <button className="text-xl dark:text-white sm:hidden" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-xl dark:text-white" onClick={() => setDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <Notification />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default HeaderManager;
