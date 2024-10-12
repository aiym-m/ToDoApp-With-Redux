import React from 'react';
import "./TodoCard.css";

function TodoCard({title, userId, completed, id, onToggle, onDelete}) {


  return (
    <div className='todo-card'>
      
     
      <h2>{title}</h2>
      <input type="checkbox" checked={completed } 
      onChange={() => onToggle(id)}/>
			<h3>User ID: {userId}</h3>
			<button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoCard