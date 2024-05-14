import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Timer from './components/Timer.jsx';
import ClockApp from './components/ClockApp.jsx';
import ErrorPage from './error-page.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ClockApp />
      },
      {
        path: "/timer",
        element: <Timer />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
