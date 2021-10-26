import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTasksByCategory, deleteTask, completeTask, getTaskCateogry } from "../../modules/TaskManager";
import { TaskCard } from "./TaskCard";
import "./Tasks.css"

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(0)


    const getTasks = (categoryId) => {
        setSelectedCategory(categoryId)
        getTasksByCategory(categoryId).then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    }

    const handleDeleteTask = (id) => {
        deleteTask(id)
            .then(() => getTasksByCategory(selectedCategory).then(setTasks));
    }

    const handleCompleteTask = (id) => {
        completeTask(id)
            .then(() => getTasksByCategory(selectedCategory).then(setTasks));
    }

    const taskCategory = () => {
        getTaskCateogry().then(res => setCategories(res))
    }

    useEffect(() => {
        taskCategory();
    }, [])

    return (
        <>
            <section className="task__section">

                <div className="task__card">
                    <div className="task__header">Tasks</div>
                    <select name="Category" id="" onChange={(evt) => { getTasks(evt.target.value) }}>
                        <option value={selectedCategory}>Select a Category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>

                    <Link to={`tasks/create`}>
                        <button className="add__task">Add a Task</button>
                    </Link>
                </div>
                <div className="task__create">
                    {tasks.map(task => task.isCompleted ? console.log("true")
                        : <TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />)}
                </div>
            </section>
        </>
    );
}