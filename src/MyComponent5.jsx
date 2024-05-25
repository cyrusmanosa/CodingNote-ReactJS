import React, { useState } from "react"

function MyComponent5() {

    const [allCars, setAllCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModle] = useState("");

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setAllCar(cars => [...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModle("");
    }


    function handleRemoveCar(index) {
        setAllCar(allCars.filter((_, i) => i !== index));
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }

    function handleModelChange(e) {
        setCarModle(e.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>

            <ul>
                {allCars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>


            <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter Car Yeear" /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" /><br />
            <input type="string" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent5;