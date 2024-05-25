import React, { useState } from "react";
function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take Shower", "Walk the dog"]);
    const [newTasks, setNewTasks] = useState("")

    function handleInputChange(e) {
        setNewTasks(e.target.value);
    }

    function addTask() {
        if (newTasks.trim() !== "" || newTasks.trim() !== " ") {
            setTasks(task => [...task, newTasks])
            setNewTasks("")
        }
    }

    function deleteTask(index) {
        const updateTask = tasks.filter((_, i) => i !== index);
        setTasks(updateTask);
    }

    function moveTaskUp(index) {

        if (index > 0) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]];
            setTasks(updateTask);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
            setTasks(updateTask);
        }
    }

    return (
        <div className="to-do-list">
            <h1>ToDoList</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTasks} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>
                            Down
                        </button>


                    </li>)}
            </ol>
        </div>
    );
}
export default ToDoList;