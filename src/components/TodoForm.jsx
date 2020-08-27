import React, { useState } from "react";
import { extractHashTagsFromString } from "../utils.js";
function TodoForm(props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObj = {
      todo,
      hashTags: extractHashTagsFromString(todo),
    };
    props.addTodoToTodoList(todoObj);
  };
  const handleTodoInput = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={todo}
        onChange={handleTodoInput}
        name="text"
        className="todo-input"
      />
      <button className="add-task">Add Task</button>
    </form>
  );
}

export default TodoForm;
