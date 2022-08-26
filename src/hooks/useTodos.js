import { useEffect, useState } from "react";
import { createTodo, getData, saveData } from "../services";

export function useTodos() {
  const [allTodos, setAllTodos] = useState([]);

  const addTodo = (text) => {
    const todoItem = createTodo(text);
    setAllTodos([todoItem, ...allTodos]);
  };

  const getAllTodos = () => {
    let stored = getData("todo");

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
    saveData("todo", allTodos);
  }, [allTodos]);

  return { allTodos, addTodo, toggleTodos, deleteTodo };
}
