import { useState } from "react";
import Notification from "../Notification";
import ProfileMenu from "../ProfileMenu";

const HeaderManager = ({ toggleSidebar }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex justify-between items-center fixed w-full z-50">
      {/* Left: Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <button
          className="text-xl dark:text-white sm:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <span className="text-xl font-semibold text-gray-800 dark:text-white">
          MyLogo
        </span>
      </div>
      {/* Right: Icons & Profile */}
      <div className="flex items-center gap-6">
        <button
          className="text-xl dark:text-white"
          onClick={() => setDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <Notification />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default HeaderManager;
