import React from "react";
import { Route } from "react-router";
import { TaskCreate } from "./tasks/TaskCreate";
import { TaskList } from "./tasks/TaskList";
import { Timer } from "./pomodoro/Timer";
import { TaskEdit } from "./tasks/TaskEdit";


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Timer />
                <TaskList />
            </Route>

            <Route exact path="/tasks/create">
                <TaskCreate />
            </Route>
            <Route exact path="/tasks/:taskId(\d+)/edit">
                <TaskEdit />
            </Route>
        </>
    )
}