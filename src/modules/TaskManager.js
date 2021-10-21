const url = "http://localhost:8088"

export const getAllTasks = () => {
    return fetch(`${url}/tasks?_sort=date&_order=asc`)
        .then(res => res.json());
}

export const getTaskById = (taskId) => {
    return fetch(`${url}/tasks/${taskId}`)
        .then(res => res.json())
}

export const addTask = (newTask) => {
    return fetch(`${url}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(res => res.json())
}

export const deleteTask = (id) => {
    return fetch(`${url}/tasks/${id}`, {
        method: "DELETE"
    }).then(res => res.json())

}

export const getTaskCateogry = () => {
    return fetch(`${url}/taskCategory`)
        .then(res => res.json());
}

export const updateTask = (editedTask) => {
    return fetch(`${url}/tasks/${editedTask.id} `, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTask)
    }).then(data => data.json());
}