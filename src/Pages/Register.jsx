import { useNavigate, Link } from "react-router";
import { Facebook, User, Store, Eye, EyeOff, ArrowBigLeftDash } from "lucide-react";
import Signup from "../assets/images/signup.png";
import { useState } from "react";
import { apiClient } from '../api/client';

export default function Register() {
   const [showPassword, setShowPassword] = useState(false);
   const [selectedRole, setSelectedRole] = useState('user');



   const navigate = useNavigate();

   const registerUser = async (data) => {
      try {
         const response = await apiClient.post('/auth/signup', data, {
            headers: {
               "Content-Type": 'application/json',
            }
         });
         console.log(response);
         navigate("/login");
      } catch (error) {
         console.log(error);
      }
   }

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
               <form action={registerUser} className="space-y-4">

                  <h1 className="text-3xl md:text-xl font-bold mb-6 text-center">Select Your Role</h1>

                  <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl">
                     <button onClick={() => setSelectedRole("user")}
                        className={`flex-1 bg-white ${selectedRole === "user" ? "hover:bg-orange-100" : "hover:bg-[#eaf3fa]"} cursor-pointer border-2 ${selectedRole === "user" ? "border-[#FE5D26]" : "border-[#B2C6D5]"} rounded-2xl p-6 flex flex-col items-center shadow-md transition duration-300`} >

                        <User className={`w-10 h-10 ${selectedRole === "user" ? "text-[#FE5D26]" : "text-[#a4b8c7]"} mb-2`} />
                        <span className="text-lg font-semibold">User</span>
                        <input type="radio" name="role" value="user" checked={selectedRole === "user"} readOnly />
                     </button>


                     <button onClick={() => setSelectedRole("vendor")}
                        className={`flex-1 bg-white ${selectedRole === "vendor" ? "hover:bg-orange-100" : "hover:bg-[#eaf3fa]"} cursor-pointer border-2 ${selectedRole === "vendor" ? "border-[#FE5D26]" : "border-[#B2C6D5]"} rounded-2xl p-6 flex flex-col items-center shadow-md transition duration-300`} >

                        <Store className={`w-10 h-10 ${selectedRole === "vendor" ? "text-[#FE5D26]" : "text-[#a4b8c7]"} mb-2`} />
                        <span className="text-lg font-semibold">Vendor</span>
                        <input type="radio" name="role" value="vendor" checked={selectedRole === "vendor"} readOnly />
                     </button>

                  </div>


                  <div className="mb-6">
                     <p className="font-bold italic mt-6 mb-2">Select Country:</p>

                     <div className="flex flex-col sm:flex-row gap-4">
                        <label className="flex items-center font-medium space-x-2">
                           <input type="radio" name="location" value="china" className="form-radio text-blue-600" />
                           <span>China</span>
                        </label>

                        <label className="flex items-center font-medium space-x-2">
                           <input type="radio" name="location" value="ghana" className="form-radio text-blue-600" />
                           <span>Ghana</span>
                        </label>
                     </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-4 mt-4 text-center md:text-left"> Or sign up using your email address</p>

                  <div className="flex flex-col">
                     <label className="font-bold">Name</label>
                     <input name="name" type="text" className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />
                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Email</label>
                     <input name="email" type="text" className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />
                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Username</label>
                     <input name="username" type="text" className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />
                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Password</label>
                     <input name="password" type={showPassword ? "text" : "password"} className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />

                     <div className="absolute right-[140px] mt-12 transform -translate-y-1/2 cursor-pointer text-gray-400 " onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={25} />}
                     </div>

                  </div>

                  <div className="flex flex-col">
                     <label className="font-bold">Confirm Password</label>
                     <input name="confirmPassword" type={showPassword ? "text" : "password"} className="bg-[#eaf3fa] rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#B2C6D5] border-0" />

                     <div className="absolute right-[140px] mt-12 transform -translate-y-1/2 cursor-pointer text-gray-400 " onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={25} />}
                     </div>

                  </div>

                  <div className="text-sm font-semibold mt-4 flex items-center">
                     <input type="checkbox" id="agree" name="terms" />
                     <label htmlFor="agree" className="ml-2">I agree to the terms and conditions</label>
                  </div>

                  <button className="w-full bg-[#FE5D26] text-white font-bold py-3 hover:bg-orange-500 cursor-pointer rounded-3xl mt-2">Sign up
                  </button>

               </form>

               <p className="text-sm flex gap-2  font-semibold py-6 text-center md:text-left">
                  <Link to="/"><ArrowBigLeftDash className="text-[#FE5D26] font-extrabold size-8 animate-bounce" /></Link> Already have an account?{" "}
                  <Link to="/login" className="hover:underline font-bold"> Log in </Link>
               </p>
            </div>
         </div>
      </div>
   );
}



