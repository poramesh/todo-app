import React from "react";
import { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;