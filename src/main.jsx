import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './Components/TodoList/TodoList.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx'
 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "todoList",
        element: <TodoList/>,
      },
      {
        path: "todolist/completed",
        element: <TodoList/>,
      },
      {
        path: "todolist/pending",
        element: <TodoList/>
      }

    ],
    
  },
  {
    path: "/login",
    element: <LoginPage />
  },
 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
  </StrictMode>,
)
