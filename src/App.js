import React, { useRef } from "react";
import "./App.css";
import { TbArrowBarDown } from "react-icons/tb";
import ListItem from "./components/ListItem";
import { useTodos } from "./hooks";

const App = () => {
  const { allTodos, addTodo, toggleTodos, deleteTodo } = useTodos();

  const todoInputRef = useRef("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo(todoInputRef.current.value);
    todoInputRef.current.value = "";
  };

  return (
    <div className="App">
      <div className="App_todo">
        <form className="App_input_wrapper">
          <input ref={todoInputRef} type={"text"} className="App_input" />
          <div className="App_input_button" onClick={addTodoHandler}>
            <TbArrowBarDown size={24} />
          </div>
        </form>

        <div className="App_todo_list">
          {allTodos.map((todo) => (
            <ListItem
              key={todo.id}
              deleteTodo={() => deleteTodo(todo.id)}
              text={todo.text}
              isChecked={todo.isChecked}
              toggleChecked={() => toggleTodos(todo.id)}
            />
          ))}

          {allTodos.length === 0 && (
            <p className="empty">There are no Todo's</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
