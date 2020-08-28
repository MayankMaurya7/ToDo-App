import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoPage() {
  const [todoList, setTodoList] = useState([]);

  // Use Effect renders the component again. Find a better way to update local storage without re-rendering the component
  useEffect(() => {
    // Checking if the array is not empty so as to not replace the localstorage with and empty array on reload
    if (todoList.length)
      localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  /**
   * Getting the todo list from localstorage on component load
   */
  useEffect(() => {
    const todoListFromLS = JSON.parse(localStorage.getItem("todoList"));

    setTodoList(todoListFromLS === null ? [] : todoListFromLS);
  }, []);

  const addTodoToTodoList = (todo) => {
    setTodoList([todo, ...todoList]);
  };
  const removeTodoFromTodoList = (id) => {
    const updatedTodoList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(updatedTodoList);
    // debugger;
    console.log(updatedTodoList);
  };

  const completeTask = (completedTask) => {
    completedTask.isComplete = true;

    const updatedTodoList = todoList.filter(
      (todo) => todo.id !== completedTask.id
    );

    const completedTasks = updatedTodoList.filter((todo) => todo.isComplete);
    const incompleteTasks = updatedTodoList.filter((todo) => !todo.isComplete);

    console.log(completedTask);

    setTodoList([...incompleteTasks, completedTask, ...completedTasks]);
  };

  const reset = () => {
    setTodoList([]);
  };

  return (
    <div className="container">
      <TodoForm addTodoToTodoList={addTodoToTodoList} />
      <button className="reset" onClick={reset}>
        Reset
      </button>
      <TodoList
        todoList={todoList}
        removeTodoFromTodoList={removeTodoFromTodoList}
        completeTask={completeTask}
      />
    </div>
  );
}

export default TodoPage;
