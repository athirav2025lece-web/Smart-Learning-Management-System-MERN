
import React from "react";

import {
    LayoutDashboard,
    BookOpen,
    ClipboardList,
    Calendar,
    ChartBar,
    Settings
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "My Courses", icon: BookOpen },
        { name: "Assignments", icon: ClipboardList },
        { name: "Schedule", icon: Calendar },
        { name: "Progress", icon: ChartBar },
        { name: "Settings", icon: Settings }
    ];

    return (
        <aside className="sidebar">

            <h3>LEARNING MENU</h3>

            {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.name}
                        className={`sidebar-item ${
                            activePage === item.name ? "active" : ""
                        }`}
                        onClick={() => setActivePage(item.name)}
                    >
                        <Icon size={20} />
                        <span>{item.name}</span>
                    </div>
                );
            })}

        </aside>
    );
}

export default Sidebar;
