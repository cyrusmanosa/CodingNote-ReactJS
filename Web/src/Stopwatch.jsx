import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const IntervalIdRef = useRef(null);
    const starTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            IntervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - starTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(IntervalIdRef.current);
        }

    }, [isRunning])

    function start() {
        setIsRunning(true);
        starTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        let hour = Math.floor(elapsedTime / (1000 * 60 * 60));

        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);

        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let mill = Math.floor((elapsedTime % 1000) / 10);

        hour = String(hour).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        mill = String(mill).padStart(2, "0");

        return `${minutes}:${seconds}:${mill}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-Btn">Start</button>
                <button onClick={stop} className="stop-Btn">Stop</button>
                <button onClick={reset} className="reset-Btn">Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;