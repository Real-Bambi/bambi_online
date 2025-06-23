import cart from "../assets/images/cart.gif"
import account from "../assets/images/account.png"
import logo from "../assets/images/logo2.png"
import { Link } from "react-router"

export default function Navbar() {
    return (

        <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black px-6 md:px-10 lg:px-20 py-3 shadow-md">
            <div className="flex flex-wrap justify-between items-center gap-4">
                {/* Logo */}
                <div>
                   <Link to="/"><img src={logo} alt="BambiOnline Logo" className="h-15 w-auto" /></Link> 
                </div>

                {/* Search Section with Category Dropdown */}
                <div className="flex-1 hidden md:flex items-center gap-2 mx-6">
                    <select className="bg-white border border-[#fe5d26] text-black text-sm px-3 py-2 rounded-md">
                        <option disabled select>All</option>
                        <Link to="/fashion"><option>Fashion</option></Link>
                         <Link to="/fashion"><option>Home & Kitchen</option></Link>
                         <Link to="/fashion"><option>Beauty</option></Link>
                         <Link to="/fashion"><option>Sports</option></Link>
                         <Link to="/fashion"><option>Books</option></Link>
                         <Link to="/fashion"><option>Gadgets</option></Link>
                    </select>
                    <form className="flex flex-1 gap-0">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search for products, brands and more."
                            className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 text-black placeholder-gray-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#fe5d26] text-white font-medium rounded-r-md hover:bg-black transition"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Cart Icon Placeholder */}
                    <div className="cursor-pointer" title="Cart">
                        <img src={cart} alt="Cart" className="h-6 w-6" />
                    </div>

                    {/* Login Image with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                const dropdown = document.getElementById("authDropdown");
                                dropdown.classList.toggle("hidden");
                            }}
                        >
                            <img
                                src={account}
                                alt="Login"
                                className="h-8 w-8 cursor-pointer p-1"
                            />
                        </button>
                        <div
                            id="authDropdown"
                            className="absolute hidden bg-white text-black right-0 mt-1 w-32 rounded shadow-lg overflow-hidden z-50"
                        >
                            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                            <Link to="register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Search Section */}
            <div className="mt-3 w-full flex justify-center md:hidden">
                <form className="flex w-full max-w-2xl">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for products, brands and more."
                        className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 text-black placeholder-gray-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#fe5d26] text-white font-medium rounded-r-md hover:bg-black transition"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>



    )




}