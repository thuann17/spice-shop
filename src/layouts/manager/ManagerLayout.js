import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderManager from "../../components/header/HeaderManager";
import AsideManager from "../../components/aside/AsideManger/AsideManager";

const ManagerLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Default collapsed on mobile

  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <AsideManager isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderManager toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
        <main className="flex-1 overflow-y-auto p-4 mt-16 sm:mt-3 md:mx-6 md:mt-6 lg:mx-8 lg:mt-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ManagerLayout;
