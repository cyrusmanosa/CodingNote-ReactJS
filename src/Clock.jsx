import React, { useState, useEffect } from "react";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalid);
        }
    }, [time])

    function formatTime() {
        let hours = time.getHours()
        let mintes = time.getMinutes()
        let seconds = time.getSeconds()
        let meridiem = hours >= 12 ? "PM" : "AM"
        console.log(hours, mintes, seconds, meridiem)


        hours %= 12 || 12;

        return `${padZero(hours)}:${padZero(mintes)}:${padZero(seconds)}${padZero(meridiem)}`;
    }

    // 個位數補 0 
    function padZero(number) {
        return (number < 10 ? "0" : "") + number
    }

    return (<>

        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>

    </>);
}

export default Clock;