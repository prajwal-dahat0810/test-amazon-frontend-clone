const XlListProducts = [
  "All",
  "Mx Player",
  "Sell",
  "Best Seller",
  "Today's Deals",
  "Mobiles",
  "Electronics",
  "Home & kitchen",
  "New Release",
];

import Sidebar from "@/components/nav/sidebar";
import SidebarToggle from "@/components/nav/sidebar";
import { useState } from "react";
export const SubNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <div className="w-full sr-only py-2 lg:not-sr-only h-10 bg-slate-700 flex items-center  ">
      <Sidebar
        isOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div
        onClick={toggleSidebar}
        className="w-full flex cursor-pointer   sr-only lg:not-sr-only  h-16 items-center   gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          color="white"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="flex  items-center gap-5 text-white font-medium ">
          {XlListProducts.map((product) => {
            return <div>{product}</div>;
          })}
        </div>
      </div>
      <div className="w-full not-sr-only h-16 gap-7    bg-slate-700  border py-3 lg:sr-only   items-center px-3 flex ">
        <div className="">
          <div className="text-sm text-white max-sm:text-xs">Shop by</div>
          <div className="text-medium text-white max-sm:text-sm">Category</div>
        </div>
        <div className="text-medium text-white">Deals</div>
        <div className="text-medium text-white">Sells</div>
      </div>
    </div>
  );
};
