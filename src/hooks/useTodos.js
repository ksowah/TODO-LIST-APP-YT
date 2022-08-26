import { useEffect, useState } from "react";

export function useTodos() {
  const [allTodos, setAllTodos] = useState([]);

  const addTodo = (text) => {
    const todoItem = {
      id: new Date().getTime(),
      text,
      isChecked: false,
    };

    setAllTodos([todoItem, ...allTodos])
  };

  const getAllTodos = () => {
    let stored = JSON.parse(localStorage.getItem("todo"));

    if (stored) {
      setAllTodos(stored);
    }
  };

  const toggleTodos = (id) => {
    let updatedTodos = [...allTodos].map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }

      return todo;
    });

    setAllTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodo = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(filteredTodo);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(allTodos));
  }, [allTodos]);

  return { allTodos, addTodo, toggleTodos, deleteTodo };
}
