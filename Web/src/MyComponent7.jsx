import React, { useState, useEffect } from "react";

function MyComponent7() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} X ${height}`;
    }, [width, height])

    function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return (
        <>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </>
    );
}
export default MyComponent7;