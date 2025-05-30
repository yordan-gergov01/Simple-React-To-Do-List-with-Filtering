import { useState } from "react";
import type { Todo, Filter } from "@types/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  function addTodo(text: string) {
    setTodos([...todos, { id: uuidv4(), text, isCompleted: false }]);
  }

  function toggleTodo(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function getFilterTodos() {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo} />
      <FilterButtons currentFilter={filter} onChangeFilter={setFilter} />
      <TodoList todos={getFilterTodos()} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
