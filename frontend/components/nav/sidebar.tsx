import React from "react";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (arg0: boolean) => void;
};
export type SidebarToggleProps = {
  toggleSidebar: () => void;
};
const Sidebar: React.FC<SidebarProps> = ({
  isOpen,

  setSidebarOpen,
}) => {
  return (
    <aside
      id="cta-button-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-gray-50 dark:bg-gray-800`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <div
              className="ms-3 w-full cursor-pointer"
              onClick={() => {
                setSidebarOpen(false);
              }}
            >
              Back
            </div>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
            </a>
          </li>
          {/* Add additional items as needed */}
        </ul>
        <div className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900">
          <p className="text-sm text-blue-800 dark:text-blue-400">
            Preview the new Flowbite dashboard navigation!
          </p>
          <a href="#" className="text-sm text-blue-800 underline font-medium">
            Turn new navigation off
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
