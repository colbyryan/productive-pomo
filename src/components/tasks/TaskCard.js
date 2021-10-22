import React from "react";
import { Link } from "react-router-dom";

export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask }) => {
    if (task.userId === parseInt(sessionStorage.getItem("productivePomo_user"))) {
        return (
            <>
                <section className="task__card">
                    <input type="checkbox" className="checkbox" onClick={() => handleCompleteTask(task.id)} />
                    <div className="task__name">{task.name}</div>
                    <div className="task__date">Due Date: {task.date}</div>
                    <button className="btn" onClick={() => handleDeleteTask(task?.id)}>Delete</button>
                    <Link to={`/tasks/${task?.id}/edit`}><button className="btn">Edit</button></Link>
                </section>
            </>
        )
    } else {
        return (
            null
        )
    }
}