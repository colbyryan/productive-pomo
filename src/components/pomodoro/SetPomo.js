import React, { useContext, useState } from 'react'
import { SettingContext } from '../../context/SettingsContext'
import Button from './Button'


export const SetPomo = () => {

    const { updateExecute } = useContext(SettingContext)

    const [newTimer, setNewTimer] = useState({
        work: 0.3,
        short: 0.2,
        long: 1,
        active: 'work'
    })

    const handleChange = e => {
        const { name, value } = e.target
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
            <form noValidate>
                <div className="input-wrapper">
                    <input name="work" className="input" onChange={handleChange} value={newTimer.work} />
                    <input name="shortBreak" className="input" onChange={handleChange} value={newTimer.short} />
                    <input name="longBreak" className="input" onChange={handleChange} value={newTimer.long} />
                </div>
                <Button title="Set Timer" _callback={handleSubmit} onClick={console.log("clicked")} />
            </form>
        </div>
    )
}


