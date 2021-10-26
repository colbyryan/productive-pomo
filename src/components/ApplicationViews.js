import React from "react";
import { Route } from "react-router";
import { TaskCreate } from "./tasks/TaskCreate";
import { Timer } from "./pomodoro/Timer";
import { TaskEdit } from "./tasks/TaskEdit";
import { NoteEdit } from "./notes/NoteEdit";
import { NoteCreate } from "./notes/NoteCreate";
import Lists from "./Lists";


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Timer />
                <Lists />
            </Route>

            <Route exact path="/tasks/create">
                <TaskCreate />
            </Route>
            <Route exact path="/tasks/:taskId(\d+)/edit">
                <TaskEdit />
            </Route>
            <Route exact path="/notes/:noteId(\d+)/edit">
                <NoteEdit />
            </Route>
            <Route exact path="/notes/create">
                <NoteCreate />
            </Route>
        </>
    )
}