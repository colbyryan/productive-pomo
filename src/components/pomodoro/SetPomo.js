import React, { useContext, useState } from 'react'
import { SettingContext } from '../../context/SettingsContext'
import "./Timer.css"


export const SetPomo = () => {

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        active: 'work'
    })

    const { updateExecute } = useContext(SettingContext)

    const handleChange = input => {
        const { name, value } = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form_container">
            <form noValidate onSubmit={handleSubmit}>
                <h4>Please set times</h4>
                <div className="input-wrapper">
                    <input type="number" name="work" className="input" onChange={handleChange} value={newTimer.work} />
                    <input type="number" name="shortBreak" className="input" onChange={handleChange} value={newTimer.short} />
                    <input type="number" name="longBreak" className="input" onChange={handleChange} value={newTimer.long} />
                </div>
                <button className="timer__set">Set Timer</button>
            </form>
        </div>
    )
}


