import { Link } from "react-router"
import logo from "../assets/images/logo2.png"
import homeIcon from "../assets/images/home.png"
import manageIcon from "../assets/images/manager.gif"
import productIcon from "../assets/images/products.png"
import logout from "../assets/images/logout.png"
import { useNavigate } from "react-router"

export default function SideBar () {
 /*logout code*/
 const navigate = useNavigate();
 
  const logOut = () =>{
    localStorage.removeItem("ACCESS TOKEN");
    navigate("/login");
  };

   return (
    <aside className="h-screen w-70 bg-white border-r border-gray-200 fixed top-0 left-0 p-6 shadow-sm">
  {/* Logo */}
  <div className="mb-10 flex flex-col items-center gap-2">
    <Link to={"/"}><img src={logo} alt="Logo" className="h-15 w-25" /></Link>
    <span className="text-xl font-bold text-[#fe5d26]"> Dashboard</span>
  </div>

  {/* Navigation Links */}
  <nav className="flex flex-col gap-4 ">
    <Link to={"/dash-page1"}  className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium w-30 py-2 rounded-md ">
      <img src={homeIcon} alt="Dashboard" className="h-5 w-5" />
      Home
    </Link>
    <Link to={"/dash-page2"}  className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium w-30 py-2 rounded-md ">
      <img src={manageIcon} alt="Accounts" className="h-5 w-5" />
      Products
    </Link>
    <Link to={"/dash-page3"}  className="flex items-center gap-3 text-gray-700 hover:text-[#fe5d26] transition font-medium w-45 py-2 rounded-md ">
      <img src={productIcon} alt="Products" className="h-5 w-5" />
      Manage Products
    </Link>
   
    
  </nav>

  {/* Logout */}
  <div className="mt-auto pt-20">
    <button onClick={logOut} className="flex items-center gap-3 text-red-600 hover:text-red-800 font-medium transition">
      <img src={logout} alt="Logout" className="h-5 w-5" />
      Logout
    </button>
  </div>
</aside>

   )
}