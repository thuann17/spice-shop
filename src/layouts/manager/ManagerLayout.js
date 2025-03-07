import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderManager from "../../components/header/HeaderManager";
import AsideManager from "../../components/aside/AsideManger/AsideManager";

const ManagerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <AsideManager isMobile={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <HeaderManager toggleSidebar={toggleSidebar} />
        <main className="flex-grow overflow-auto bg-gray-100 dark:bg-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ManagerLayout;
