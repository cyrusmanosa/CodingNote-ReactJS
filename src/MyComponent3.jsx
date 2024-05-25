import React, { useState } from "react"

function MyComponent3() {

    const [car, setCar] = useState({ year: "2030", make: "Ford", model: "Mustang" });


    function handleYearChange(e) {
        setCar(car => ({ ...car, year: e.target.value }));
    }
    function handleMakeChange(e) {
        setCar(car => ({ ...car, make: e.target.value }));
    }
    function handleModelChange(e) {
        setCar(car => ({ ...car, model: e.target.value }));
    }

    return (
        <div>
            <p>
                Your favorite car is:{car.year},{car.make},{car.model}
            </p>
            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="string" value={car.model} onChange={handleModelChange} />
        </div>
    );
}

export default MyComponent3