import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNotesByCategory, deleteNote, getNoteCateogry } from "../../modules/NotesManager";
import { NoteCard } from "./NoteCard";
import "./Notes.css"

export const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(0)

    const getNotes = (categoryId) => {
        setSelectedCategory(categoryId)
        getNotesByCategory(categoryId).then(notesFromAPI => {
            setNotes(notesFromAPI)
        });
    }

    const handleDeleteNote = (id) => {
        deleteNote(id)
            .then(() => getNotesByCategory(selectedCategory).then(setNotes));
    }

    const taskCategory = () => {
        getNoteCateogry().then(res => setCategories(res))
    }

    useEffect(() => {
        taskCategory();
    }, [])

    return (
        <>
            <section className="note__section">
                <div className="note__top">
                    <div className="task__header">Notes</div>
                    <div className="note__card">
                        <select name="Category" id="" onChange={(evt) => { getNotes(evt.target.value) }}>
                            <option value={selectedCategory}>Select a Category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <Link to={`notes/create`}>
                        <button className="add__note">+ Note</button>
                    </Link>

                </div>
                {notes.map(note => <NoteCard key={note.id} note={note} handleDeleteNote={handleDeleteNote} />)}

            </section>
        </>
    );
}