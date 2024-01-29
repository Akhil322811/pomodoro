import React from 'react'
import { useEffect, useState } from 'react';
import alaram from '../alaramSound.wav'

const Timer = () => {
    const [time, setTime] = useState(10)
    const [isActive, setIsActive] = useState(false)
    const [userVal, setuseVal] = useState();

    const alaramSound = new Audio(alaram)
    const extractMinutes = () => {
        const currentTime = time

        const currentMinutes = Math.floor(currentTime / 60)
        return currentMinutes
    }

    const extractSeconds = () => {
        const currentTime = time

        const currentSeconds = currentTime % 60
        return currentSeconds
    }

    const toggleTimer = () => {
        setIsActive(!isActive)
    };

    const reset = () => {
        setTime(10)
        setIsActive(false)
    };

    const updateTime = () => {

        if (time > 0 && isActive) {
            setTime((prev) => prev - 1)
        }
        else if (time === 0) {
            alaramSound.play()
        }

    }
    const handleSet = () => {
        setTime(userVal);
    }


    const handleEnteredvalue = ((e) => {
        setuseVal(e.target.value);
    })

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [isActive, time])


    return (
        <div className='main'>
            <div className='sub'>
                <div>
                    <h1>Pomodoro Timer</h1>
                </div>
                <div>
                    <h1>{
                        `${extractMinutes()} : ${extractSeconds()}`
                    }</h1>
                </div>

                <button className='stbtn' onClick={toggleTimer}>{isActive ? 'Pause' : "Start"}</button>
                <button className='psbtn' onClick={reset}>reset</button>
                <br />
                <input className='inp' type='numbers' onChange={handleEnteredvalue} value={userVal} placeholder='Enter the Seconds Here'
                />
                <button className='cstbtn' onClick={handleSet}><b>Customise timer</b></button>
            </div>
        </div>
    )
}

export default Timer