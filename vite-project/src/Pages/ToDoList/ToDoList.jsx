import { useState } from "react";
import { Link } from "react-router-dom";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const HandleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const AddNewTaskFunction = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask.trim()]);
      setNewTask("");
    }
  };

  const DeleteFunction = (index) => {
    const newTasksList = tasks.filter((_, i) => index !== i);
    setTasks(newTasksList);
  };

  const MoveUpFunction = (index) => {
    if (index > 0) {
      const tasksList = [...tasks];
      [tasksList[index - 1], tasksList[index]] = [tasksList[index], tasksList[index - 1]];
      setTasks(tasksList);
    }
  };

  const MoveDownFunction = (index) => {
    if (index < tasks.length - 1) {
      const tasksList = [...tasks];
      [tasksList[index], tasksList[index + 1]] = [tasksList[index + 1], tasksList[index]];
      setTasks(tasksList);
    }
  };

  return (
    <main className="todo-container">
      <h2 className="todo-title">To Do List</h2>
      <hr className="todo-divider" />

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span className="task-text">{task}</span>
            <span className="task-actions">
              <button onClick={() => DeleteFunction(index)}>Delete</button>
              <button onClick={() => MoveUpFunction(index)}>↑</button>
              <button onClick={() => MoveDownFunction(index)}>↓</button>
            </span>
          </li>
        ))}
      </ul>

      <hr className="todo-divider" />

      <div className="todo-input-group">
        <input
          className="todo-input"
          placeholder="Write here your new task"
          onChange={HandleNewTask}
          value={newTask}
        />
        <button className="add-task-button" onClick={AddNewTaskFunction}>
          Add new task
        </button>
      </div>

      <Link className="todo-link" to="/">
        Go back home
      </Link>
    </main>
  );
}

export default ToDoList;
