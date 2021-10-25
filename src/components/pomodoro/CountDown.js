import React, { useContext, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../../context/SettingsContext'
import "./Timer.css"

const CountDown = ({ timer, animate, children }) => {

    const [key, setKey] = useState(0)



    const { stopAnimate } = useContext(SettingContext)
    return (
        <>

            <CountdownCircleTimer
                key={key}
                isPlaying={animate}
                duration={timer * 60}
                colors={[['#293241', 1]]}
                strokeWidth={12}
                size={440}
                trailColor="#ffffff"
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
