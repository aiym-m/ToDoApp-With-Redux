import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TodoCard from '../TodoCard/TodoCard';
import './TodoList.css';
import { addTodo, deleteTodo, toggleTodo } from '../../redux/Slices/todoItemsSlice';

function TodoList() {
  
  const todos = useSelector((state) => state.todoItems.todoItems); // Get todos from the Redux store
  const location = useLocation(); // Get the current route location
  const dispatch = useDispatch();

  // Filter todos based on the current path
  const filteredTodos = todos.filter((todo) => {
    if (location.pathname === '/todolist/completed') {
      return todo.completed === true; // Show only completed todos
    } else if (location.pathname === '/todolist/pending') {
      return todo.completed === false; // Show only pending (incomplete) todos
    }
    return true; // Default: show all todos
  });
  const handleToggle = (id) => {
    dispatch(toggleTodo(id)); // Dispatch an action to toggle the completed status in the Redux store
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };


  return (
    <div className='todo-list'>
      {filteredTodos.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          userId={todo.userId}
          id={todo.id}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;