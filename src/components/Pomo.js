import React from "react";
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { TaskList } from "./tasks/TaskList";
import { Timer } from "./pomodoro/Timer";

export const Pomo = () => (

    <>
        < Route

            render={() => {
                if (sessionStorage.getItem("productivePomo_user")) {

                    return (
                        <>
                            <NavBar />
                            <Timer />
                            <ApplicationViews />
                            <TaskList />
                        </>
                    )
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route Route path="/login" >
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)