import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { SetPomo } from "./pomodoro/SetPomo";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { TaskList } from "./tasks/TaskList";
import { SettingContext } from "../context/SettingsContext";
import Button from "./pomodoro/Button";
// import CountDown from "./pomodoro/CountDown";



export const Pomo = () => (

    <>
        < Route
            render={() => {
                const { pomodoro, executing, setCurrentTimer } = useContext(SettingContext)
                if (sessionStorage.getItem("productivePomo_user")) {

                    return (
                        <>
                            {pomodoro !== 0 ?
                                <SetPomo /> :
                                <>
                                    <ul className="lables">
                                        <li>
                                            <Button
                                                title="Work"
                                                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                                                _callback={() => setCurrentTimer('work')}
                                            />
                                        </li>
                                        <li>
                                            <Button
                                                title="Short Break"
                                                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                                                _callback={() => setCurrentTimer('short')}
                                            />
                                        </li>
                                        <li>
                                            <Button
                                                title="Long Break"
                                                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                                                _callback={() => setCurrentTimer('long')}
                                            />
                                        </li>
                                    </ul>
                                </>
                            }

                            <NavBar />
                            <ApplicationViews />
                            {/* <CountDown /> */}
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