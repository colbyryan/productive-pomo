import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getNoteById, updateNote } from "../../modules/NotesManager";
import { getNoteCateogry } from "../../modules/NotesManager";
import "./Notes.css"

export const NoteEdit = () => {

    const [note, setNote] = useState({
        note: "",
        date: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState([])

    const { noteId } = useParams();
    const history = useHistory();

    const handleFieldChange = e => {
        const stateToChange = { ...note };
        stateToChange[e.target.id] = e.target.value;
        setNote(stateToChange);
    };

    const noteCategory = () => {
        getNoteCateogry().then(res => setCategory(res))
    };
    const updateExistingNote = (e) => {
        e.preventDefault()
        setIsLoading(true);

        const editedNote = {
            id: noteId,
            note: note.note,
            date: note.date,
            userId: note.userId,
            notesCategoryId: parseInt(note.notesCategoryId)
        };

        updateNote(editedNote)
            .then(() => history.push("/"))
    }

    useEffect(() => {
        noteCategory()
        getNoteById(noteId)
            .then(note => {
                setNote(note)
                setIsLoading(true);
            })
    }, [noteId]);
    return (
        <>
            <div className="form__flex">
                <form>

                    <div className="form__edit-note">
                        Edit Note
                    </div>
                    <fieldset>
                        <select name="" id="notesCategoryId" onChange={handleFieldChange}>
                            {category.map(categories => (
                                <option key={categories.id} value={categories.id} className="form__note-category">{categories.name}</option>
                            ))}
                        </select>

                        <div className="fieldset__group">
                            <label htmlFor="text">Enter Note: </label>
                            <input type="text" id="note" onChange={handleFieldChange} required className="fieldset__group--edit" value={note.note} />
                        </div>

                        <div className="fieldset__group">
                            <label htmlFor="date">Select Due Date: </label>
                            <input type="date" id="date" onChange={handleFieldChange} required className="fieldset__group--edit" />
                        </div>

                    </fieldset>

                    <div className="form__buttons">
                        <button className="form__button" disabled={isLoading} onClick={(e) =>
                            updateExistingNote(e)}>Save Note</button>
                        <button className="form__button" onClick={() => { history.push("/") }}>Cancel</button>
                    </div>

                </form>
            </div>
        </>
    )
}