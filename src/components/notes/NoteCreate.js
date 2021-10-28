import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { addNote } from "../../modules/NotesManager";
import { getNoteCateogry } from "../../modules/NotesManager";
import "./Notes.css"

export const NoteCreate = () => {
    const [note, setNote] = useState({
        note: "",
        date: "",
        userId: parseInt(sessionStorage.getItem("productivePomo_user")),
        notesCategoryId: 1
    });
    const [categories, setCategories] = useState([])
    const history = useHistory();

    const ResetForm = () => {
        setNote({
            note: "",
            date: 0,
            userId: parseInt(sessionStorage.getItem("productivePomo_user")),
            notesCategoryId: 1
        });
    }

    const noteCategory = () => {
        getNoteCateogry().then(res => setCategories(res))
    }

    const handleControlledInputChange = (event) => {
        event.preventDefault()
        const newNote = { ...note }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newNote[event.target.id] = selectedVal
        setNote(newNote)
    }

    const handleClickSaveNote = (event) => {
        event.preventDefault()
        const nameList = note.note
        const dateList = note.date

        if (nameList === "" || dateList === "") {
            window.alert("Please Fill out all required info")
        } else {
            addNote(note).then(() => history.push("/"))
        }
    }
    useEffect(() => {
        noteCategory();
    }, [])
    return (
        <>
            <div className="form__flex">
                <form>

                    <div className="form__add-task">
                        Add a New Note
                    </div>
                    <fieldset className="form__fieldset">
                        <select name="categories" id="notesCategoryId" onChange={handleControlledInputChange}>
                            {categories.map(category => (
                                <option key={category.id} value={category.id} className="form__note-category">{category.name}</option>
                            ))}
                        </select>

                        <div className="fieldset__group">
                            <label htmlFor="name">Enter Note: </label>
                            <input type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="fieldset__group--edit" placeholder="Note" value={note.note} />
                        </div>

                        <div className="fieldset__group-date-notes">
                            <label htmlFor="date">Date: </label>
                            <input type="date" id="date" onChange={handleControlledInputChange} required className="fieldset__group--edit" />
                        </div>

                    </fieldset>

                    <div className="form__buttons">
                        <button className="form__button" onClick={handleClickSaveNote}>Create Note</button>
                        <button className="form__button" onClick={ResetForm}>Rest Form</button>
                        <button className="form__button" onClick={() => { history.push("/") }}>Cancel</button>
                    </div>

                </form>
            </div>
        </>
    )
}