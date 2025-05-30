export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export type Filter = "all" | "active" | "completed";
