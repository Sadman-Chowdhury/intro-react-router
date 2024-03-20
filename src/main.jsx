import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import About from './Components/About/About.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/users",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
        element: <UserDetails></UserDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
