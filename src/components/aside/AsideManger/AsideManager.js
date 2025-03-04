import { useState } from "react";
import MenuItem from "./MenuItem";
const AsideManager = ({ isCollapsed, setIsCollapsed }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 
      fixed sm:relative sm:block top-0 left-0 z-50 overflow-y-auto 
      ${isCollapsed ? "w-0 sm:w-20" : "w-64"} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Close Button for Mobile */}
      <button
        className="sm:hidden absolute top-4 right-4 text-white text-xl"
        onClick={() => setIsCollapsed(true)}
      >
        ✖
      </button>

      {/* Menu */}
      <nav className="space-y-2">
        <MenuItem
          icon="📊"
          text="Dashboard"
          isCollapsed={isCollapsed && !isHovered}
        />
        <MenuItem
          icon="📅"
          text="Calendar"
          isCollapsed={isCollapsed && !isHovered}
        />
        <MenuItem
          icon="👤"
          text="User Profile"
          isCollapsed={isCollapsed && !isHovered}
        />
      </nav>
    </aside>
  );
};

export default AsideManager;
