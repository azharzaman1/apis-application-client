import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <>
      <div className="dashboard-layout-content flex lg:pl-[280px] max-w-full flex-col">
        <DashboardHeader />
        <main>
          <Outlet />
        </main>
      </div>
      <DashboardSidebar
        open={sideBarOpen}
        onClose={() => setSideBarOpen(false)}
      />
    </>
  );
};

export default DashboardLayout;
