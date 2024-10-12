import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import "./Header.css"
function Header() {
  
  return (
    <div className='main-div-header'>
        <ul className='list-header'>
    <div className='header-div'>
        <NavLink to="/todolist" >All ToDos</NavLink>
        <NavLink to="/todolist/completed"  >Completed ToDos</NavLink>
        <NavLink to="/todolist/pending" >Pending ToDos</NavLink>
        
    </div>
        <div className='login-tab'>
            <NavLink to="/loginpage" >Log in</NavLink>
        </div>
        </ul>
    </div>
  )
}

export default Header