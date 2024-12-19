import React, { useState } from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem.tsx";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>("");

  // Add a new todo
  const addTodo = () => {
    if (newTodoText.trim()) { //This means it strips off any spaces, tabs, or line breaks from the start and end of the string, " Hello World ".trim() would result in "Hello World".
      const newTodo: Todo = {
        id: Date.now(),  // Using the current timestamp as the ID
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);                    
//const todos = [1, 2, 3]; const newTodo = 4; const updatedTodos = [...todos, newTodo]; console.log(updatedTodos); // Output: [1, 2, 3, 4]
      setNewTodoText(""); // Clear input field
    }
  };

  // Toggle completion of a todo
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo  App</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
