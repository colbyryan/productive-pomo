import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getTaskById, updateTask } from "../../modules/TaskManager";
import { getTaskCateogry } from "../../modules/TaskManager";
import "./Tasks.css"

export const TaskEdit = () => {

    const [task, setTask] = useState({
        name: "",
        date: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState([])

    const { taskId } = useParams();
    const history = useHistory();

    const handleFieldChange = e => {
        const stateToChange = { ...task };
        stateToChange[e.target.id] = e.target.value;
        setTask(stateToChange);
    };

    const taskCategory = () => {
        getTaskCateogry().then(res => setCategory(res))
    };
    const updateExistingTask = (e) => {
        e.preventDefault()
        setIsLoading(true);

        const editedTask = {
            id: taskId,
            name: task.name,
            date: task.date,
            isComplete: false,
            userId: task.userId,
            taskCategoryId: parseInt(task.taskCategoryId)
        };

        updateTask(editedTask)
            .then(() => history.push("/"))
    }

    useEffect(() => {
        taskCategory()
        getTaskById(taskId)
            .then(task => {
                setTask(task)
                setIsLoading(false);
            })
    }, [taskId]);
    return (
        <>
            <div className="form__flex">
                <form>

                    <div className="form__add-task">
                        Edit Task
                    </div>
                    <fieldset className="form__fieldset">
                        <select name="" id="taskCategoryId" onChange={handleFieldChange}>
                            {category.map(taco => (
                                <option key={taco.id} value={taco.id} className="form__task-category">{taco.name}</option>
                            ))}
                        </select>

                        <div className="fieldset__group">
                            <label htmlFor="text">Enter Task: </label>
                            <input type="text" id="name" onChange={handleFieldChange} required className="fieldset__group--edit" value={task.name} />
                        </div>

                        <div className="fieldset__group-date">
                            <label htmlFor="date">Select Due Date: </label>
                            <input type="date" id="date" onChange={handleFieldChange} required className="fieldset__group--edit" />
                        </div>

                    </fieldset>

                    <div className="form__buttons">
                        <button className="form__button" disabled={isLoading} onClick={(e) =>
                            updateExistingTask(e)}>Save Task</button>
                        <button className="form__button" onClick={() => { history.push("/") }}>Cancel</button>
                    </div>

                </form>
            </div>
        </>
    )
}