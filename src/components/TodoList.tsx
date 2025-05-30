import type { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
}

export default function TodoList({ todos, onToggle }: Props) {
  if (todos.length === 0) {
    return <p style={{ textAlign: "center" }}>No available tasks</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}
