import cart from "../assets/images/cart.gif"
import account from "../assets/images/account.png"
import logo from "../assets/images/logo2.png"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import { useState } from "react"
import Login from "../Pages/Login"

export default function Navbar() {

    const [query, setQuery] = useState("");
    //  for the category
    const navigate = useNavigate();

    const handleChange = (e) => {
        const selected = e.target.value;
        if (selected) {
            navigate(selected);
        }
    };

    const Categories = [
        " ",
        "fashion",
        "animals",
        "allproducts",
        "beauty",
        "Equipment",
        "goods",
        "vehicle",
    ];

    const handleSearch = (e) => {
        // e.preventDefault();

        // Convert to lowercase to match paths
        const trimmedQuery = query.trim().toLowerCase();

        const matchedCategory = Categories.find(
            (cat) => cat.toLowerCase() === trimmedQuery
        );


        if (matchedCategory) {
            navigate(`/${matchedCategory}`);
        } else {
            alert("Category not found.");
        }
    };




    return (
        <>

            <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black px-6 md:px-10 lg:px-20 py-3 shadow-md">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    {/* Bambi Logo */}
                    <div>
                        <Link to="/"><img src={logo} alt="BambiOnline Logo" className="h-15 w-auto" /></Link>
                    </div>

                    {/* search and category */}
                    <div className="flex-1 hidden md:flex items-center gap-2 mx-6">
                        <select onChange={handleChange}
                            className="bg-white border border-[#fe5d26] text-black text-sm px-3 py-2 rounded-md">
                            <option disabled selected>All</option>
                            <option value={"/fashion"}>Fashion</option>
                            <option value={"/animals"}>Animal</option>
                            <option value={"/beauty"}>Beauty</option>
                            <option value={"/equipment"}>Electronics</option>
                            <option value={"/goods"}>Consumable goods</option>
                            <option value={"/vehicles"}>AutoMobiles</option>
                        </select>
                        <form onSubmit={handleSearch} className="flex flex-1 gap-0">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                type="text"
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


                    <div className="flex items-center gap-4">

                        <div className="cursor-pointer" title="Cart">
                            <img src={cart} alt="Cart" className="h-6 w-6" />
                        </div>


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
                                <Link to="/login" className="block px-4 py-2 w-full items-center hover:bg-[#fe5d26] rounded-md">Login</Link>
                                <Link to="/register" className="block px-4 py-2 w-full items-center hover:bg-[#fe5d26] rounded-md">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile search */}
                <div className="mt-3 w-full flex justify-center md:hidden">
                    <form  onSubmit={handleSearch} className="flex w-full max-w-2xl">
                        <input
                            type="text"
                            name="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
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
    
        </>
    )
}




