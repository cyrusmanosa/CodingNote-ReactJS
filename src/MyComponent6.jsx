import React, { useState, useEffect } from 'react';

function MyComponent6() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count},Color: ${color}`;
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1)
    }
    function subtractCount() {
        setCount(c => c - 1)

    }

    function ChangeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={ChangeColor}>Change Color</button>
        </>
    );
}

export default MyComponent6