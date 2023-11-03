
import { useState, useEffect } from "react";
enum COUNT_STATUS {
    STOP = 0,
    START = 1
}

export default function CountDown (props) {
    let [hour, setHour] = useState(props.hour || 0)
    let [minute, setMinute] = useState(props.minute || 0)
    let [second, setSecond] = useState(props.second || 0)

    let [status, setStatus] = useState(COUNT_STATUS.STOP)

    const intervalCallback = (stopTime) => {
        let time = Date.now();
        let h = Math.floor((stopTime - time) / 1000 / 3600);
        let m = Math.floor(((stopTime - time) - h * 3600 * 1000) / 1000 / 60);
        let s = Math.floor(((stopTime - time) - h * 3600 * 1000 - m * 60 * 1000) / 1000 % 60);
        setHour(h)
        setMinute(m)
        setSecond(s)
    }

    useEffect(() => {
        let timer;
        if (status === COUNT_STATUS.START) {
            let stopTime = Date.now() + (hour * 3600 + minute * 60 + second) * 1000
            // setStartTime(Date.now())
            intervalCallback(stopTime)
            timer = setInterval(() => {
                intervalCallback(stopTime);
            }, 1000)
        } else {
            clearInterval(timer)
        }

        return () => {
            clearInterval(timer);
        }
    }, [status])

    const handleClick = () => {
        setStatus(status === COUNT_STATUS.STOP ? COUNT_STATUS.START : COUNT_STATUS.STOP)
    }

    return (
        <>
            <div>
                <span>{hour}:{minute}:{second}</span>
            </div>
            <button onClick={handleClick}>{status === COUNT_STATUS.STOP ? 'start' : 'stop'}</button>
        </>
    )
}