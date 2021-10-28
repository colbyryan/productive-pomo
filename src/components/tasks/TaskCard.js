import React from "react";
import { Link } from "react-router-dom";
import "./Tasks.css"
import { FaTrash, FaPencilAlt } from "react-icons/fa";

export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask }) => {
    if (task.userId === parseInt(sessionStorage.getItem("productivePomo_user"))) {
        return (
            <>
                <section className="task__card">
                    <div className="task__card--task">
                        <input type="checkbox" className="checkbox" onClick={() => handleCompleteTask(task.id)} />
                        <div className="task__name">{task.name}</div>
                    </div>
                    <div className="task__card--buttons">
                        <div className="task__date">{task.date}</div>
                        <button className="btn" onClick={() => handleDeleteTask(task?.id)}><FaTrash /></button>
                        <Link to={`/tasks/${task?.id}/edit`}><button className="btn"><FaPencilAlt /></button></Link>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            null
        )
    }
}