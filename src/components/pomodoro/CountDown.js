import React, { useContext, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../../context/SettingsContext'
import "./Timer.css"

const CountDown = ({ timer, animate, children }) => {

    const { stopAnimate, darkMode } = useContext(SettingContext)
    const [key, setKey] = useState(0)

    let dark = ['#293241', 1]
    let light = ['#FFFFFF', 1]
    return (
        <>

            <CountdownCircleTimer
                key={key}
                isPlaying={animate}
                duration={timer * 60}
                colors={[darkMode ? light : dark]}
                strokeWidth={12}
                size={440}
                trailColor={darkMode ? 'rgb(39, 38, 48)' : '#FFFFFF'}
                onComplete={() => {
                    stopAnimate()
                }}
            >

                {children}

            </CountdownCircleTimer>

            <div className="button-wrapper">
                <button onClick={() => setKey(prevKey => prevKey + 1)}>
                    Restart Timer
                </button>
            </div>
        </>
    )
}

export default CountDown
