import { MdCheck, MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import "./Todo.css";
export const Todo = () => {
  //user todo input-data
  const [inputValue, setInputValue] = useState("");
  // todo store user-data
  const [task, setTask] = useState([]);
  // set date and time
  const [dateTime, setDateTime] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };
  // set Date and Time
  useEffect(() => {
    const Interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime} `);
    }, 1000);
    return () => clearInterval(Interval);
  }, []);

  // Delete Todo-Tsk
  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  // Clear Todo funcnality
  const handleClearTodo = () => {
    setTask([]);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={() => {
                handleInputChange(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="todo-button">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList ">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodo}>
          Clear All
        </button>
      </section>
    </section>
  );
};
