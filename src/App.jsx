import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import DashBoard from "./Pages/DashBoard";
import AllProducts from "./AllProducts";
import Fashion from "./Pages/categories/Fashion";
import Vehicles from "./Pages/categories/Vehicles";
import Goods from "./Pages/categories/Goods";
import Equipment from "./Pages/categories/Equipment";
import Beauty from "./Pages/categories/Beauty";
import Animals from "./Pages/categories/Animals";



const onlineRouter = createBrowserRouter([
  {path:'/', element: <Home />},
  {path:'/login', element: <Login />},
  {path:'/register', element: <Register />},    
  {path:'/product', element: <Product />},
  {path:'/dashboard', element: <DashBoard />},
  {path:'/allproducts', element: <AllProducts />},
  {path:'/fashion', element:<Fashion />},
  {path:'/vehicles', element:<Vehicles />},
  {path:'/goods', element:<Goods />},
  {path:'/Equipment', element:<Equipment />},
  {path:'/beauty', element:<Beauty />},
  {path:'/animals', element:<Animals />},
  
])
function App() {


  return (
    <>
    <RouterProvider router={onlineRouter} />
    </>
  )
}

export default App
