
import React from "react";
import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    BookOpen,
    ClipboardList,
    Calendar,
    ChartBar,
    Settings
} from "lucide-react";

function Sidebar() {

    const menuItems = [
        { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
        { name: "My Courses", path: "/courses", icon: BookOpen },
        { name: "Assignments", path: "/assignments", icon: ClipboardList },
        { name: "Schedule", path: "/schedule", icon: Calendar },
        { name: "Progress", path: "/progress", icon: ChartBar },
        { name: "Settings", path: "/settings", icon: Settings }
    ];

    return (
        <aside className="sidebar">

            <h3>LEARNING MENU</h3>

            {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `sidebar-item ${isActive ? "active" : ""}`
                        }
                    >
                        <Icon size={20} />
                        <span>{item.name}</span>
                    </NavLink>
                );
            })}

        </aside>
    );
}

export default Sidebar;
