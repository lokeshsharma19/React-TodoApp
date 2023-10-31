import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddtask = (newTask) => {
    setTasks((prevState) => [...prevState, newTask]);
  };
  const handleCheck = (id) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) return { ...task, completed: !task.completed };
        else return task;
      });
    });
  };
  const handleRemove = (id) => {
    setTasks((prevState) => {
      return prevState.filter((task) => {
        return task.id !== id;
      });
    });
  };
  return (
    <div className="App container">
      <ToastContainer />
      <h1 className="main__title">Todo List</h1>
      <TodoForm handleAddtask={handleAddtask} />
      <Todos
        tasks={tasks}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
