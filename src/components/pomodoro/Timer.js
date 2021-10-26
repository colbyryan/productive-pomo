import React, { useContext, useEffect } from "react"
import { SettingContext } from "../../context/SettingsContext";
import Button from "../pomodoro/Button";
import { SetPomo } from "../pomodoro/SetPomo";
import CountDown from "./CountDown";
import "./Timer.css"

export const Timer = () => {
    const {
        pomo,
        executing,
        setCurrentTimer,
        SettingsBtn,
        children,
        startAnimate,
        startTimer,
        pauseTimer,
        updateExecute
    } = useContext(SettingContext)

    useEffect(() => updateExecute(executing), [updateExecute, executing, startAnimate])

    return (
        <div className="container">
            {pomo !== 0 ?
                <>
                    <ul className="lables">
                        <li>
                            <Button
                                title="Work"
                                activeClass={executing.active === 'work' && 'active-label'}
                                _callback={() => setCurrentTimer('work')}
                            />
                        </li>
                        <li>
                            <Button
                                title="Short Break"
                                activeClass={executing.active === 'short' && 'active-label'}
                                _callback={() => setCurrentTimer('short')}
                            />
                        </li>
                        <li>
                            <Button
                                title="Long Break"
                                activeClass={executing.active === 'long' && 'active-label'}
                                _callback={() => setCurrentTimer('long')}
                            />
                        </li>
                        <li>
                            <Button className="settings__btn" title="Settings" _callback={SettingsBtn} />
                        </li>
                    </ul>

                    <div className="time-container">
                        <div className="time-wrapper">
                            <CountDown
                                key={pomo}
                                timer={pomo}
                                animate={startAnimate}
                            >
                                {children}
                            </CountDown>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <Button title="Start" activeClass={!startAnimate && 'activeClass'} _callback={startTimer} />
                        <Button title="Pause" activeClass={startAnimate && 'activeClass'} _callback={pauseTimer} />
                    </div>
                </> : <SetPomo />}
        </div>
    )
}