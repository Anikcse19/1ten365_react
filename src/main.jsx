import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
     <RouterProvider router={routes}/>
     <Toaster/>
  </React.StrictMode>,
)
