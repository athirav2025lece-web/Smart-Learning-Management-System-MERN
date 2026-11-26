
import React from "react";
import { BookOpen, Clock, CheckCircle } from "lucide-react";

function TaskCard({ title, subject, deadline, status }) {

    return (
        <div className="task-card">

            <div className="task-icon">
                <BookOpen size={25} />
            </div>

            <h3>{title}</h3>

            <p>{subject}</p>

            <div className="task-deadline">
                <Clock size={16} />
                <span>{deadline}</span>
            </div>

            <div className="task-status">
                {status === "Completed" && (
                    <CheckCircle size={16} />
                )}

                <span>{status}</span>
            </div>

        </div>
    );
}

export default TaskCard;
