import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import Layout from './layout/Layout'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/users',
          element: <Users></Users>
        },
        {
          path: '/products',
          element: <Products></Products>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )

}

export default App
