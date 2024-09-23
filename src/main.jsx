import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Register from './Pages/Login.jsx'
import Login from './Pages/Register.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'',
      element:<Home/>,
    },
    {
      path:'Register',
      element:<Register/>
    },
    {
      path:'Login',
      element:<Login/>
    }

  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
)