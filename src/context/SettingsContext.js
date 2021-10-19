import React, { createContext, useState } from 'react'

export const SettingContext = createContext()

const SettingsContextProvider = (props) => {

    const [pomo, setPomo] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    const SettingsBtn = () => {
        setExecuting({})
        setPomo(0)
    }

    const updateExecute = updateSettings => {
        setExecuting(updateSettings)
        setTimerTime(updateSettings)
    }

    const setTimerTime = evaluate => {
        switch (evaluate.active) {
            case 'work':
                setPomo(evaluate.work)
                break;
            case 'short':
                setPomo(evaluate.short)
                break;
            case 'long':
                setPomo(evaluate.long)
                break;

            default:
                setPomo(0)
                break;
        }
    }

    const children = ({ remainingTimer }) => {
        const minutes = Math.floor(remainingTimer / 60)
        const seconds = remainingTimer % 60

        return `${minutes}:${seconds}`
    }

    return (
        <SettingContext.Provider value={{ stopTimer, updateExecute, pomo, executing, startAnimate, startTimer, pauseTimer, SettingsBtn, setCurrentTimer, updateExecute, children }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider
