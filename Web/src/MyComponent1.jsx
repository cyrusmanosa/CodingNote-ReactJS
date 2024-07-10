
import React, { useState } from 'react';

function MyComponent() {


    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Cyrus");
    }
    const incrementAge2 = () => {
        // 上行處理完成後才到下行
        setAge(age => age + 1);
        setAge(age => age + 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(isEmployed => !isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> Set Name </button>

            <p>Age: {age}</p>
            <button onClick={incrementAge2}> Increment Age </button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}> Is employed </button>
        </div>
    );
}
export default MyComponent;