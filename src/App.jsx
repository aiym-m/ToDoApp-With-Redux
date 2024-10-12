
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import Header from './Components/Header/Header';
import {CreateTodo} from './Components/CreateTodo/CreateTodo';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchTodos } from './redux/Slices/todoItemsSlice';

function App() {

const dispatch = useDispatch();
useEffect(()=> {
  dispatch(fetchTodos());
}, [])

  return (
    <> 
    <Header/>
    <CreateTodo/>
    <Outlet/>
    </>
  )
}

export default App
