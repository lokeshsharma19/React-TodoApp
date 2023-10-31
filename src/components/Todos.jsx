import Todo from "./Todo";

function Todos({ tasks, handleCheck, handleRemove }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Todo
            key={task.id}
            {...task}
            handleCheck={handleCheck}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
}

export default Todos;
