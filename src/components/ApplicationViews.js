import React from "react";
// import { TaskList } from "./tasks/TaskList";
import { Route } from "react-router";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/tasks">
                {/* <TaskList /> */}
            </Route>
        </>
    )
}