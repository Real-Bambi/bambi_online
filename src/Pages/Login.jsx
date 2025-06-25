import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { apiClient } from '../api/client';
import Log from "../assets/images/log.png";



export default function Login() {
   const [showPassword, setShowPassword] = useState(false);


   const navigate = useNavigate();

   const loginUser = async (data) => {
      try {
         const response = await apiClient.post('/auth/login', data, {
            headers: {
               "Content-Type": 'application/json'
            }
         });
         console.log(response);
         navigate('/');
         localStorage.setItem('ACCESS_TOKEN', response.data.token);


      } catch (error) {
         console.log(error);
      }

   }




   return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 to-[#B2C6D5] px-4">
         <div className="flex flex-col md:flex-row w-full max-w-4xl md:h-[500px] shadow-lg rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 h-full">
               <img src={Log} alt="Login Visual" className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 h-full p-8 flex flex-col justify-center bg-white bg-opacity-80 backdrop-blur-sm text-black">
               <h2 className="text-2xl font-semibold text-center mb-6">Have an account?</h2>

               <form onSubmit={loginUser} className="space-y-4">
                  <input type="text" name="email" placeholder="Email" className="w-full px-4 py-2 rounded-full border border-orange-500 bg-white bg-opacity-40 backdrop-blur-sm text-black placeholder-black focus:outline-none focus:ring-orange-500" />

                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        name="password" placeholder="Password" className="w-full px-4 py-2 rounded-full border border-orange-500 bg-white bg-opacity-40 backdrop-blur-sm text-black placeholder-black focus:outline-none focus:ring-orange-500 "
                     />
                     <div
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}  >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                     </div>
                  </div>

                  <button type="submit" className="w-full bg-orange-500 text-black font-semibold py-2 rounded-full hover:bg-orange-700 transition" > SIGN IN </button>

                  <div className="flex justify-between text-sm items-center mt-2">
                     <label className="flex items-center gap-2">
                        <input type="checkbox" /> Remember Me
                     </label>
                     <Link to="#" className="hover:underline">Forgot Password?</Link>
                  </div>

                  <div className="text-center mt-6 mb-2 text-sm">
                     — Not a member? <Link to="/" className="hover:underline font-bold">Sign up</Link> —
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}