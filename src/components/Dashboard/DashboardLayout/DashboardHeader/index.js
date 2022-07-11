import React from "react";

const DashboardHeader = () => {
  return (
    <header className="dashboard-layout-header">
      <div className="dashboard-header-container px-2 sm:px-3 md:px-4 lg:px-5 xl:px-8 py-3 bg-gray-50 shadow-sm border-b border-gray-100 flex">
        <div className="dashboard-header-search">
          <input
            type="search"
            className="py-2 px-2 border border-gray-200 outline-none w-64 max-w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
