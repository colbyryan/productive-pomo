import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTasks, deleteTask, completeTask, getTaskCateogry } from "../../modules/TaskManager";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([])

    const getTasks = () => {
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    }

    const handleDeleteTask = (id) => {
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    }

    const handleCompleteTask = (id) => {
        completeTask(id)
            .then(() => getAllTasks().then(setTasks));
    }

    const taskCategory = () => {
        getTaskCateogry().then(res => setCategories(res))
    }

    const filterTaskCategory = () => {
    }

    useEffect(() => {
        getTasks();
        taskCategory();
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
                        {categories.map(category => (
                            <option key={category.id} value={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                    {tasks.map(task => task.isCompleted ? console.log("true")
                        : <TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />)}
                </div>
            </section>
        </>
    );
}