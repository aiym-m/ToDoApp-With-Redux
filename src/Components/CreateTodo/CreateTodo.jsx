import React, { useState } from "react";
import "./CreateTodo.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/Slices/todoItemsSlice";
import { v4 as uuidv4 } from 'uuid';

export const CreateTodo = () => {
	const [newTodo, setNewTodo] = useState('');
	const dispatch = useDispatch();
	const handleAddTodo = (e) => {
		e.preventDefault();
		if(newTodo.trim()=== '') return;
		const newTodoItem = {
		  id: uuidv4(),
		  title: newTodo,
		  completed: false,
		  userId: 1,
		}
		dispatch(addTodo(newTodoItem));
		setNewTodo('');
	   }
	return (
		<div className="create-todo">
			<form onSubmit={handleAddTodo}>
				<input type="text" placeholder="Add new todo" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
				<button type="submit">Add task</button>
			</form>
		</div>
	);
};