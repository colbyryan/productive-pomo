import React, { useContext, useEffect } from "react"
import { Children } from "react";
import { SettingContext } from "../../context/SettingsContext";
import Button from "../pomodoro/Button";
import { SetPomo } from "../pomodoro/SetPomo";
import CountDown from "./CountDown";

export const Timer = () => {
    const { pomodoro,
        executing,
        setCurrentTimer,
        SettingBtn,
        Children,
        startAnimate,
        startTimer,
        pauseTimer,
        updateExecute
    } = useContext(SettingContext)

    useEffect(() => updateExecute(executing), [executing, startAnimate])

    return (
        <>
            {pomodoro !== 0 ?
                <SetPomo /> :
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
                                activeClass={executing.active === 'work' && 'active-label'}
                                _callback={() => setCurrentTimer('short')}
                            />
                        </li>
                        <li>
                            <Button
                                title="Long Break"
                                activeClass={executing.active === 'work' && 'active-label'}
                                _callback={() => setCurrentTimer('long')}
                            />
                        </li>
                    </ul>
                    <Button title="Settings" _callback={SettingBtn} />
                    <div className="time-container">
                        <div className="time-wrapper">
                            <CountDown
                                key={pomodoro}
                                timer={pomodoro}
                                animate={startAnimate}
                            >
                                {Children}
                            </CountDown>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <Button title="Start" className={!startAnimate && 'activeClass'} _callback={startTimer} />
                        <Button title="Pause" className={startAnimate && 'activeClass'} _callback={pauseTimer} />
                    </div>
                </>
            }
        </>
    )
}