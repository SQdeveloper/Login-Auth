import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routes/Login.tsx'
import Dashboard from './routes/Dashboard.tsx'
import SignOut from './routes/SignOut.tsx'
import SignUp from './routes/SignUp.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import AuthProvider from './Context/AuthProvider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>        
      }
    ]
  },
  {
    path: '/signout',
    element: <SignOut/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <React.StrictMode>
        <RouterProvider router={router} />        
      </React.StrictMode>,
  </AuthProvider>
)
