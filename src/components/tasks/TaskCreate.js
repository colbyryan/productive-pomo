import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { addTask } from "../../modules/TaskManager";
import { getTaskCateogry } from "../../modules/TaskManager";

export const TaskCreate = () => {
    const [task, setTask] = useState({
        name: "",
        date: "",
        isCompleted: false,
        userId: parseInt(sessionStorage.getItem("productivePomo_user")),
        taskCategoryId: 0
    });
    const [categories, setCategories] = useState([])
    const history = useHistory();

    const ResetForm = () => {
        setTask({
            name: "",
            date: 0,
            isComplete: false,
            userId: parseInt(sessionStorage.getItem("productivePomo_user")),
            taskCategoryId: 0
        });
    }

    const taskCategory = () => {
        getTaskCateogry().then(res => setCategories(res))
    }

    const handleControlledInputChange = (event) => {
        event.preventDefault()
        const newTask = { ...task }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTask[event.target.id] = selectedVal
        setTask(newTask)
    }

    const handleClickSaveTask = (event) => {
        event.preventDefault()
        const nameList = task.name
        const dateList = task.date

        if (nameList === "" || dateList === "") {
            window.alert("Please Fill out all required info")
        } else {
            addTask(task).then(() => history.push("/"))
        }
    }
    useEffect(() => {
        taskCategory();
    }, [])
    return (
        <>
            <div className="form__flex">
                <form>

                    <div className="form__add-task">
                        Add a New Task
                    </div>
                    <fieldset>
                        <select name="categories" id="taskCategoryId" onChange={handleControlledInputChange}>
                            {categories.map(category => (
                                <option key={category.id} value={category.id} className="form__task-category">{category.name}</option>
                            ))}
                        </select>

                        <div className="fieldset__group">
                            <label htmlFor="name">Enter Task: </label>
                            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="fieldset__group--edit" placeholder="task" value={task.name} />
                        </div>

                        <div className="fieldset__group">
                            <label htmlFor="date">Select Due Date: </label>
                            <input type="date" id="date" onChange={handleControlledInputChange} required className="fieldset__group--edit" />
                        </div>

                    </fieldset>

                    <div className="form__buttons">
                        <button className="form__button" onClick={handleClickSaveTask}>Create Task</button>
                        <button className="form__button" onClick={ResetForm}>Rest Form</button>
                        <button className="form__button" onClick={() => { history.push("/") }}>Cancel</button>
                    </div>

                </form>
            </div>
        </>
    )
}