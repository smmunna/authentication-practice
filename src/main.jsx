import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import User from './components/User/User'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import Register from './components/Register/Register'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/user",
        element: <PrivateRoute><User /></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <PrivateRoute><About /></PrivateRoute>
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
