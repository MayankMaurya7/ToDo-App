import React, { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import { extractTodosContainingHashtags } from "../utils";

function TodoList(props) {
  const [hashTagSelected, setHashTagSelected] = useState([]);

  const handleHashTagClicked = (hashTag) => {
    setHashTagSelected([...hashTagSelected, hashTag]);
  };

  const iterateThroughList = (list) => {
    return list.map((todo, i) => (
      <TodoCard
        todo={todo}
        key={i}
        handleHashTagClicked={handleHashTagClicked}
        removeTodoFromTodoList={props.removeTodoFromTodoList}
        completeTask={props.completeTask}
      />
    ));
  };

  const renderTodoList = () => {
    if (hashTagSelected.length) {
      const filteredTodoList = extractTodosContainingHashtags([
        ...hashTagSelected,
      ]);
      return iterateThroughList(filteredTodoList);
    } else {
      return iterateThroughList(props.todoList);
    }
  };
  return (
    <div className="todoList-container">
      {hashTagSelected.length ? (
        <button
          className="show-all-todos"
          onClick={() => {
            console.log("clicked");
            setHashTagSelected([]);
          }}
        >
          Show All Todos
        </button>
      ) : (
        " "
      )}
      {hashTagSelected.length ? `You clicked :${hashTagSelected}` : " "}
      <div className="todoList-wrapper">{renderTodoList()}</div>
    </div>
  );
}

export default TodoList;
