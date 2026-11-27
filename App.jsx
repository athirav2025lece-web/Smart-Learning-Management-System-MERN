
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Schedule from "./pages/Schedule";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
    const [studentName] = useState("Athira");
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="app">
            <Navbar
                studentName={studentName}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            <div className="main-layout">
                <Sidebar />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/assignments" element={<Assignments />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/progress" element={<Progress />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
