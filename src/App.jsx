import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import DashBoard from "./Pages/DashBoard";
import AllProducts from "./AllProducts";
import Fashion from "./Pages/categories/Fashion";


const onlineRouter = createBrowserRouter([
  {path:'/', element: <Home />},
  {path:'/login', element: <Login />},
  {path:'/register', element: <Register />},    
  {path:'/product', element: <Product />},
  {path:'/dashboard', element: <DashBoard />},
  {path:'/allproducts', element: <AllProducts />},
  {path:'/fashion', element:<Fashion />}
])
function App() {


  return (
    <>
    <RouterProvider router={onlineRouter} />
    </>
  )
}

export default App
