import React from "react";
import { FiHome, FiEdit, FiClock, FiStar, FiSettings } from "react-icons/fi";

const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", icon: <FiHome /> },
        { name: "Prompt Generator", icon: <FiEdit /> },
        { name: "History", icon: <FiClock /> },
        { name: "Favorites", icon: <FiStar /> },
        { name: "Settings", icon: <FiSettings /> },
    ];

    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col p-6 shadow-lg">
            {/* Logo / App Name */}
            <h1 className="text-3xl font-bold mb-10 tracking-wide">NeuraUI</h1>

            {/* Navigation Menu */}
            <nav className="flex flex-col mt-4 space-y-3">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg"
                    >
                        {item.icon} <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            {/* Optional bottom content */}
            <div className="mt-auto text-gray-400 text-sm px-4">
                v1.0.0
            </div>
        </aside>
    );
};

export default Sidebar;