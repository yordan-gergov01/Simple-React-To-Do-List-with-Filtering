import type { Todo } from "@/types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onToggle }: Props) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {todo.text}
    </li>
  );
}
