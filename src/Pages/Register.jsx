import { Link } from "react-router";
import { Facebook, User, Store, Eye, EyeOff } from "lucide-react";
import Signup from "../assets/images/signup.png";
import { useState } from "react";

export default function Register() {
   const [showPassword, setShowPassword] = useState(false);

   const handleSelect = (role) => {
      setSelectedRole(role);
   };

   return (
      <div className="flex flex-col md:flex-row w-full min-h-screen">

         <div className="md:w-1/2 h-64 md:h-auto">
            <img src={Signup} alt="Signup" className="w-full h-full object-cover md:rounded-r-3xl" />
         </div>



         <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
               <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left mb-6">Create Account</h1>


               <div className="flex flex-col sm:flex-row gap-4 font-bold mb-4">
                  <Link to=""><button className="w-full bg-[#FE5D26] text-white px-6 py-2 cursor-pointer rounded-3xl">Sign up with Google
                  </button>
                  </Link>

                  <Link to=""><button className="w-full bg-[#B2C6D5] flex justify-center cursor-pointer items-center gap-2 px-6 py-2 rounded-3xl text-black"><Facebook className="w-4 h-4" /> with Facebook
                  </button>
                  </Link>
               </div>

               <hr className="my-4" />

               <h1 className="text-3xl md:text-xl font-bold mb-6 text-center">Select Your Role</h1>

               <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl">
                  <button onClick={() => handleSelect("user")}
                     className="flex-1 bg-white hover:bg-[#eaf3fa] cursor-pointer border-2 border-[#B2C6D5] rounded-2xl p-6 flex flex-col items-center shadow-md transition duration-300" >
                     <User className="w-10 h-10 text-[#a4b8c7] mb-2" />
                     <span className="text-lg font-semibold">User</span>
                  </button>


                  <button onClick={() => handleSelect("vendor")}
                     className="flex-1 bg-white hover:bg-orange-100 cursor-pointer border-2 border-[#FE5D26] rounded-2xl p-6 flex flex-col items-center shadow-md transition duration-300" >
                     <Store className="w-10 h-10 text-[#FE5D26] mb-2" />
                     <span className="text-lg font-semibold">Vendor</span>
                  </button>

               </div>

               <p className="text-sm text-gray-500 mb-4 mt-4 text-center md:text-left"> Or sign up using your email address</p>


               <form className="space-y-4">
                  <div className="flex flex-col">
                     <label className="font-bold">Name</label>
                     <input type="text" className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />
                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Email</label>
                     <input type="text" className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />
                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Username</label>
                     <input type="text" className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />
                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Password</label>
                     <input type={showPassword ? "text" : "password"} className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />

                     <div className="absolute right-[140px] mt-12 transform -translate-y-1/2 cursor-pointer text-gray-400 " onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={25} />}
                     </div>

                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Confirm Password</label>
                     <input type={showPassword ? "text" : "password"} className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />

                     <div className="absolute right-[140px] mt-12 transform -translate-y-1/2 cursor-pointer text-gray-400 " onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={25} />}
                     </div>

                  </div>

                  <div className="text-sm font-semibold mt-4 flex items-center">
                     <input type="checkbox" id="agree" name="terms" />
                     <label htmlFor="agree" className="ml-2">I agree to the terms and conditions</label>
                  </div>

                  <Link to=""><button className="w-full bg-[#FE5D26] text-white font-bold py-3 hover:bg-orange-500 cursor-pointer rounded-3xl mt-2">Sign up
                  </button>
                  </Link>

               </form>

               <p className="text-sm font-semibold py-6 text-center md:text-left">
                  Already have an account?{" "}
                  <Link to="/login" className="hover:underline font-bold"> Log in </Link>
               </p>
            </div>
         </div>
      </div>
   );
}