import React, { useState, useEffect } from "react";
import Context from './StatesContext';

function States(props) {
    const [examState, setexamState] = useState(true)
    const startTimer = Date.now() + 300000;
    const [timer, setTimer] = useState(startTimer);
    const [timeLeft, setTimeLeft] = useState({ minutes: 5, seconds: 0 })
    const [intervalId, setintervalId] = useState(null)

    const timerStart = () => {
        let timerId = setInterval(() => {
            setTimer(startTimer - Date.now());
        }, 1000);
        setintervalId(timerId);
    }

    useEffect(() => {
        setTimeLeft({
            minutes: Math.floor(timer / 60000),
            seconds: Math.trunc((Math.floor(timer % 60000)) / 1000),
        });
    }, [timer])


    useEffect(() => {
        if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
            clearInterval(intervalId);
            setexamState(false);
        }
    }, [timeLeft])

    const clearTimer=()=>{
        clearInterval(intervalId);
        setexamState(true);
    }

    return (
        <Context.Provider value={{ timerStart, timer, timeLeft, setTimeLeft, examState, setexamState, intervalId,clearTimer }}>
            {props.children}
        </Context.Provider>
    )
}

export default States