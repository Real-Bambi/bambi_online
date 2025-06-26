import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import DashPage1 from "./Pages/DashBoard/DashPage1.jsx";
import DashPage2 from "./Pages/DashBoard/DashPage2.jsx";
import DashPage3 from "./Pages/DashBoard/DashPage3.jsx";
import DashPage4 from "./Pages/DashBoard/DashPage4.jsx";
import AllProducts from "./AllProducts";
import Fashion from "./Pages/categories/Fashion";
import Vehicles from "./Pages/categories/Vehicles";
import Goods from "./Pages/categories/Goods";
import Equipment from "./Pages/categories/Equipment";
import Beauty from "./Pages/categories/Beauty";
import Animals from "./Pages/categories/Animals";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import NotFound from "./Pages/notFound";
import Cart from "./Pages/Cart";



const onlineRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product', element: <Product /> },
  { path: '/dash-page1', element: <DashPage1 /> },
  { path: '/dash-page2', element: <DashPage2 /> },
  { path: '/dash-page3', element: <DashPage3 /> },
  { path: '/dash-page4', element: <DashPage4 /> },
  { path: '/add-product', element: <AddProduct /> },
  { path: '/edit-product', element: <EditProduct /> },
  { path: '/allproducts', element: <AllProducts /> },
  { path: '/fashion', element: <Fashion /> },
  { path: '/vehicles', element: <Vehicles /> },
  { path: '/goods', element: <Goods /> },
  { path: '/Equipment', element: <Equipment /> },
  { path: '/beauty', element: <Beauty /> },
  { path: '/animals', element: <Animals /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <NotFound /> }
])
function App() {


  return (
    <>
      <RouterProvider router={onlineRouter} />
    </>
  )
}

export default App
