import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { extractTodosContainingHashtags } from "../utils";

function TodoList(props) {
  const [hashTagSelected, setHashTagSelected] = useState();

  const iterateThroughList = (list) => {
    return list.map((todo, i) => (
      <TodoCard todo={todo} key={i} setHashTagSelected={setHashTagSelected} />
    ));
  };

  const renderTodoList = () => {
    if (hashTagSelected) {
      const filterdTodoList = extractTodosContainingHashtags(hashTagSelected);
      return iterateThroughList(filterdTodoList);
    } else {
      return iterateThroughList(props.todoList);
    }
  };
  return (
    <div className="todoList-container">
      <div className="todoList-wrapper">{renderTodoList()}</div>

      <button
        className="show-all-todos"
        onClick={() => setHashTagSelected(undefined)}
      >
        Show All Todos
      </button>
    </div>
  );
}

export default TodoList;
