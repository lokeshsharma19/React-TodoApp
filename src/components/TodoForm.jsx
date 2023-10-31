import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ handleAddtask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskvalue.trim().length === 0) {
      toast("Please Enter Something!", { autoClose: 2000 });
      return;
    }
    const newTask = {
      id: uuid(),
      title: taskvalue,
      completed: false,
    };
    handleAddtask(newTask);
    setTaskvalue("");
  };
  const [taskvalue, setTaskvalue] = useState("");
  const handleChange = (e) => {
    setTaskvalue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="todoForm">
        <input
          className="todoForm__input"
          type="text"
          value={taskvalue}
          onChange={(e) => {
            handleChange(e);
          }}></input>
        <button className="todoForm__btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
