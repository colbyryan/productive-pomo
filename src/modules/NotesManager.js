const url = "http://localhost:8088"

export const getNotesByCategory = (notesCategoryId) => {
    return fetch(`${url}/notes?notesCategoryId=${notesCategoryId}`)
        .then(res => res.json());
}

export const getNoteById = (noteId) => {
    return fetch(`${url}/notes/${noteId}`)
        .then(res => res.json())
}

export const addNote = (newNote) => {
    return fetch(`${url}/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newNote)
    }).then(res => res.json())
}

export const deleteNote = (id) => {
    return fetch(`${url}/notes/${id}`, {
        method: "DELETE"
    }).then(res => res.json())

}

export const getNoteCateogry = () => {
    return fetch(`${url}/notesCategory`)
        .then(res => res.json());
}

export const updateNote = (editedNote) => {
    return fetch(`${url}/notes/${editedNote.id} `, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedNote)
    }).then(data => data.json());
}

