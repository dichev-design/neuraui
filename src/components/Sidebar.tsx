import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", path: "/" },
        { name: "Generate", path: "/generate" },
        { name: "History", path: "/history" },
        { name: "Favorites", path: "/favorites" },
        { name: "Settings", path: "/settings" },
    ];

    return (
        <aside className="w-64 min-h-screen bg-zinc-950 text-white p-6 flex flex-col">

            <h1 className="text-2xl font-bold mb-10">
                NeuraUI
            </h1>

            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                            `px-4 py-3 rounded-lg text-sm font-medium transition ${isActive
                                ? "bg-violet-600 text-white"
                                : "hover:bg-zinc-800 text-zinc-300"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto pt-10">
                <button className="w-full bg-violet-600 py-3 rounded-lg font-medium hover:opacity-90 transition">
                    Upgrade
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;