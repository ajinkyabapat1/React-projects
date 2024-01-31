import React, { useReducer } from 'react';
import './style.css';
const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'complete':
      return state.map((todos) => {
        if (todos.id === action.id) {
          return { ...todos, complete: !todos.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todos) => {
    dispatch({ id: todos.id, type: 'complete' });
  };
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
