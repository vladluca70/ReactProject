import { useState } from "react";
import "./ToDoList.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function ToDoList()
{
    const [tasks, setTasks]= useState([]);
    const [newTask, setNewTask]=useState("");

    function HandleNewTask(e)
    {
        setNewTask(e.target.value);
    }

    function AddNewTaskFunction() {
    if (newTask.trim() !== "") {
        setTasks(t => [...t, newTask.trim()]);
        setNewTask("");
    }
    }

    function DeleteFunction(index)
    {
        const newTasksList=tasks.filter((task, i)=>index!==i)
        setTasks(newTasksList);
    }

    function MoveUpFunction(index) {
        if (index > 0) {
            const tasksList = [...tasks];
            const temp = tasksList[index];
            tasksList[index] = tasksList[index - 1];
            tasksList[index - 1] = temp;
            setTasks(tasksList);
        }
    }


        function MoveDownFunction(index)
    {
    if (index < tasks.length - 1){
        const tasksList=[...tasks];
        const temp = tasksList[index];

        tasksList[index]=tasksList[index+1]
        tasksList[index+1]=temp

        setTasks(tasksList);
        }
    }

    return (
        <>
        <div className="todo-container">
            <h2>To Do List</h2>
            <hr />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <span>
                            <button onClick={() => DeleteFunction(index)}>Delete</button>
                            <button onClick={() => MoveUpFunction(index)}>↑</button>
                            <button onClick={() => MoveDownFunction(index)}>↓</button>
                        </span>
                    </li>
                ))}
            </ul>
            <hr />
            <input
                placeholder="Write here your new task"
                onChange={HandleNewTask}
                value={newTask}
            />
            <br />
            <button onClick={AddNewTaskFunction}>Add new task</button>
            
        </div>
        <Link to={'/'} className="link-button">Go back home</Link>
        </>
    );

}

export default ToDoList;