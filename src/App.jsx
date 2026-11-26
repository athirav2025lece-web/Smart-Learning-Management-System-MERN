
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/TaskCard";

import "./App.css";

function App() {
    // Navigation
    const [activePage, setActivePage] = useState("Dashboard");

    // Search
    const [searchQuery, setSearchQuery] = useState("");

    // Live Clock
    const [time, setTime] = useState(new Date());

    // Student Profile
    const [studentName, setStudentName] = useState(
        () => localStorage.getItem("studentName") || "Athira"
    );

    const [email, setEmail] = useState(
        () => localStorage.getItem("email") || "Athira@gmail.com"
    );

    const [course, setCourse] = useState(
        () => localStorage.getItem("course") || "Java Programming"
    );

    // Update Clock
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Save Profile
    const handleSave = () => {
        localStorage.setItem("studentName", studentName);
        localStorage.setItem("email", email);
        localStorage.setItem("course", course);

        alert("Profile updated successfully!");
    };

    // Course Details
    const courses = [
        { name: "Web Development", teacher: "Athira", progress: 80 },
        { name: "Database Management", teacher: "Saranya", progress: 65 },
        { name: "Java Programming", teacher: "Swasthi", progress: 90 },
        { name: "Python Programming", teacher: "Smriti", progress: 50 },
        { name: "C++ Programming", teacher: "Maha", progress: 50 }
    ];

    // Assignment Details
    const tasks = [
        {
            title: "Complete React Assignment",
            subject: "Web Development",
            deadline: "Today",
            status: "Pending"
        },
        {
            title: "DBMS Quiz",
            subject: "Database Management",
            deadline: "Tomorrow",
            status: "In Progress"
        },
        {
            title: "Java Programming",
            subject: "Java Programming",
            deadline: "28 November",
            status: "Completed"
        }
    ];

    // Schedule Details
    const schedule = [
        { time: "09:00 AM", subject: "Web Development", room: "Room 101" },
        { time: "11:00 AM", subject: "Database Management", room: "Room 202" },
        { time: "02:00 PM", subject: "Java Programming", room: "Room 103" },
        { time: "04:00 PM", subject: "Python Programming", room: "Online Class" }
    ];

    // Filter Courses
    const filteredCourses = courses.filter((item) =>
        `${item.name} ${item.teacher}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    // Filter Assignments
    const filteredTasks = tasks.filter((item) =>
        `${item.title} ${item.subject} ${item.status}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    // Filter Schedule
    const filteredSchedule = schedule.filter((item) =>
        `${item.time} ${item.subject} ${item.room}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    // Greeting
    const greeting =
        time.getHours() < 12 ? "Good Morning" :
        time.getHours() < 17 ? "Good Afternoon" :
        "Good Evening";

    // Page Content
    const renderContent = () => {
        switch (activePage) {

            // DASHBOARD
            case "Dashboard":
                return (
                    <>
                        <section className="system-banner">
                            <div>
                                <h2>{greeting}, {studentName}!</h2>
                                <p>
                                    Welcome to your Smart Learning Management System.
                                </p>
                            </div>

                            <div className="system-info">
                                <span className="status">
                                    ● All Systems Operational
                                </span>

                                <p>{time.toLocaleDateString()}</p>
                                <p>{time.toLocaleTimeString()}</p>
                            </div>
                        </section>

                        <h2 className="section-title">
                            Dashboard Overview
                        </h2>

                        <div className="stats">
                            <div className="stat-card">
                                <h3>06</h3>
                                <p>Enrolled Courses</p>
                            </div>

                            <div className="stat-card">
                                <h3>12</h3>
                                <p>Total Assignments</p>
                            </div>

                            <div className="stat-card">
                                <h3>08</h3>
                                <p>Completed Tasks</p>
                            </div>

                            <div className="stat-card">
                                <h3>75%</h3>
                                <p>Learning Progress</p>
                            </div>
                        </div>

                        <h2 className="section-title">
                            My Learning Tasks
                        </h2>

                        <div className="task-container">
                            {filteredTasks.length > 0 ? (
                                filteredTasks.map((task, index) => (
                                    <TaskCard key={index} {...task} />
                                ))
                            ) : (
                                <p>No matching assignments found.</p>
                            )}
                        </div>
                    </>
                );

            // MY COURSES
            case "My Courses":
                return (
                    <>
                        <h2 className="section-title">My Courses</h2>

                        <p className="page-description">
                            Explore your enrolled learning courses.
                        </p>

                        <div className="content-grid">
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((course, index) => (
                                    <div className="content-card" key={index}>
                                        <h3>{course.name}</h3>

                                        <p>Instructor: {course.teacher}</p>

                                        <p>
                                            Course Progress: {course.progress}%
                                        </p>

                                        <div className="progress-bar">
                                            <div
                                                style={{
                                                    width: `${course.progress}%`
                                                }}
                                            ></div>
                                        </div>

                                        <button
                                            className="view-btn"
                                            onClick={() =>
                                                alert(`You selected ${course.name}`)
                                            }
                                        >
                                            View Course
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No matching courses found.</p>
                            )}
                        </div>
                    </>
                );

            // ASSIGNMENTS
            case "Assignments":
                return (
                    <>
                        <h2 className="section-title">My Assignments</h2>

                        <p className="page-description">
                            Track your assignment deadlines and status.
                        </p>

                        <div className="content-grid">
                            {filteredTasks.length > 0 ? (
                                filteredTasks.map((task, index) => (
                                    <div className="content-card" key={index}>
                                        <h3>{task.title}</h3>

                                        <p>Subject: {task.subject}</p>
                                        <p>Deadline: {task.deadline}</p>

                                        <span className="assignment-status">
                                            {task.status}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p>No matching assignments found.</p>
                            )}
                        </div>
                    </>
                );

            // SCHEDULE
            case "Schedule":
                return (
                    <>
                        <h2 className="section-title">My Schedule</h2>

                        <p className="page-description">
                            Your daily learning timetable.
                        </p>

                        <div className="content-card">
                            {filteredSchedule.length > 0 ? (
                                filteredSchedule.map((item, index) => (
                                    <div className="schedule-item" key={index}>
                                        <strong>{item.time}</strong>

                                        <div>
                                            <h3>{item.subject}</h3>
                                            <p>{item.room}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No matching schedule found.</p>
                            )}
                        </div>
                    </>
                );

            // PROGRESS
            case "Progress":
                return (
                    <>
                        <h2 className="section-title">Learning Progress</h2>

                        <p className="page-description">
                            Monitor your course completion.
                        </p>

                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                                <div
                                    className="content-card progress-card"
                                    key={index}
                                >
                                    <h3>{course.name}</h3>

                                    <p>{course.progress}% Completed</p>

                                    <div className="progress-bar">
                                        <div
                                            style={{
                                                width: `${course.progress}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No matching courses found.</p>
                        )}
                    </>
                );

            // SETTINGS
            case "Settings":
                return (
                    <>
                        <h2 className="section-title">Settings</h2>

                        <p className="page-description">
                            Manage your student profile and preferences.
                        </p>

                        <div className="content-card settings-card">
                            <h3>Student Profile</h3>

                            <label>Student Name</label>

                            <input
                                type="text"
                                value={studentName}
                                onChange={(e) =>
                                    setStudentName(e.target.value)
                                }
                            />

                            <label>Email Address</label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                            <label>Course</label>

                            <input
                                type="text"
                                value={course}
                                onChange={(e) =>
                                    setCourse(e.target.value)
                                }
                            />

                            <button
                                className="view-btn"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </>
                );

            default:
                return <h2>Page Not Found</h2>;
        }
    };

    // Main Layout
    return (
        <div className="app">

            <Navbar
                studentName={studentName}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            <div className="main-layout">

                <Sidebar
                    activePage={activePage}
                    setActivePage={setActivePage}
                />

                <main className="dashboard">

                    <div className="page-heading">
                        <h1>{activePage}</h1>
                    </div>

                    {renderContent()}

                </main>
            </div>
        </div>
    );
}

export default App;
