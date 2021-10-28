import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css"
import { FaTrash, FaPencilAlt } from "react-icons/fa";

export const NoteCard = ({ note, handleDeleteNote }) => {
    if (note.userId === parseInt(sessionStorage.getItem("productivePomo_user"))) {
        return (
            <>
                <section className="note__card">
                    <div className="note__card--note">
                        <div className="note__name">{note.note}</div>
                    </div>
                    <div className="note__card--buttons">
                        {/* <div className="note__date">Due Date: {note.date}</div> */}
                        <button className="btn" onClick={() => handleDeleteNote(note?.id)}><FaTrash /></button>
                        <Link to={`/notes/${note?.id}/edit`}><button className="btn"><FaPencilAlt /></button></Link>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            null
        )
    }
}