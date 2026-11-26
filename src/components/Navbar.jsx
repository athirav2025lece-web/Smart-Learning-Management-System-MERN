
import React from "react";

import {
    Bell,
    Search,
    GraduationCap
} from "lucide-react";

function Navbar({ studentName, searchQuery, onSearchChange }) {

    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="logo">
                <GraduationCap size={30} />
                <h2>SmartLearn</h2>
            </div>

            {/* Search Box */}
            <div className="search-box">

                <Search size={20} />

                <input
                    type="text"
                    placeholder="Search courses, assignments..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />

            </div>

            {/* Profile */}
            <div className="profile">

                <Bell size={22} />

                <div className="avatar">
                    {studentName
                        ? studentName.charAt(0).toUpperCase()
                        : "S"}
                </div>

                <span>{studentName || "Student"}</span>

            </div>

        </nav>
    );
}

export default Navbar;
