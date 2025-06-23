import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import DashPage1 from "./Pages/DashBoard/DashPage1";
import DashPage2 from "./Pages/DashBoard/DashPage2";
import DashPage3 from "./Pages/DashBoard/DashPage3";
import DashPage4 from "./Pages/DashBoard/DashPage4";
import ManageProduct from "./Pages/ManageProduct";
import AllProducts from "./AllProducts";


const onlineRouter = createBrowserRouter([
  {path:'/', element: <Home />},
  {path:'/login', element: <Login />},
  {path:'/register', element: <Register />},    
  {path:'/product', element: <Product />},
  {path:'/dash-page1', element: <DashPage1 />},
  {path:'/dash-page2', element: <DashPage2 />},
  {path:'/dash-page3', element: <DashPage3 />},
  {path:'/dash-page4', element: <DashPage4 />},
  {path:'/manage-product', element: <ManageProduct/>},
  {path:'/allproducts', element: <AllProducts />}
])
function App() {


  return (
    <>
    <RouterProvider router={onlineRouter} />
    </>
  )
}

export default App
