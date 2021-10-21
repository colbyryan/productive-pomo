import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTasks, deleteTask } from "../../modules/TaskManager";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    }

    const handleDeleteTask = (id) => {
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <>
            <section className="task__section">
                <div className="task__header">Tasks</div>
                <div className="task__create">
                    <Link to={`tasks/create`}>
                        <button className="add__task">Add a Task</button>
                    </Link>
                </div>
                <div className="task__card">
                    <select name="Category" id="">
                        <option value=""></option>
                    </select>
                    {tasks.map(task => task.isComplete ? console.log("true")
                        : <TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} />)}
                </div>
            </section>
        </>
    );
}