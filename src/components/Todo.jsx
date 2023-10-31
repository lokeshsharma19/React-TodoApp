import React from "react";
import { ImCross } from "react-icons/im";
function Todo({ id, title, completed, handleCheck, handleRemove }) {
  return (
    <div className="todo">
      <div className="todo__title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleCheck(id);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}>title: {title}</p>
      </div>
      <div className="cross__btn" onClick={() => handleRemove(id)}>
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;
