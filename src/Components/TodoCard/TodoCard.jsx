import React from 'react';
import "./TodoCard.scss";

function TodoCard({title, userId, completed, id, onToggle, onDelete}) {


  return (
    <div className='todo-card'>
      <div className='title-check'>
        <input type="checkbox" checked={completed } 
      onChange={() => onToggle(id)} className=''/>
        <h2>{title}</h2>
      </div>
      <div className='buttons'>
			<h3>User ID: {userId}</h3>
			<button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoCard