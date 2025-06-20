import { Link } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


export default function Login() {
   const [showPassword, setShowPassword] = useState(false);
   return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4">


         <div className="bg-amber-700 bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full text-white ">
            <h2 className="text-2xl font-semibold text-center mb-6">Have an account?</h2>

            <form className="space-y-4">
               <input type="text" placeholder="Username" className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white" />

               <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full px-4 py-2 pr-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white" />
               <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white" onClick={() => setShowPassword(!showPassword)} >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
               </div>

               <button type="submit" className="w-full bg-orange-200 text-black font-semibold py-2 rounded-full hover:bg-orange-300 transition"> SIGN IN
               </button>

               <div className="flex justify-between text-sm items-center mt-2">
                  <label className="flex items-center gap-2">
                     <input type="checkbox" /> Remember Me
                  </label>
                  <Link to="#" className="hover:underline">Forgot Password?</Link>
               </div>

               <div className="text-center text-white mt-6 mb-2 text-sm">
                  — Not a member? <Link to="/register" className="hover:underline font-bold">Sign up</Link> —
               </div>
            </form>
         </div>
      </div>
   );
}