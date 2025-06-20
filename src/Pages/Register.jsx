import { Link } from "react-router";
import { Facebook } from 'lucide-react';
import Signup from '../assets/images/signup.png'

export default function Register() {
   return (
      <div className="flex flex-row w-[full]">
         <div className="h-[50%] w-[50%]">
            <img src={Signup} alt="" className="rounded-4xl"/>
         </div>

         <div className="h-[50%] w-[50%] p-20 justify-center items-center">
            <h1 className="font-bold text-4xl">Create Account</h1>

            <div className="flex flex-row gap-4 font-bold py-4">
               <Link to=""><button className="bg-purple-800 text-white px-6 py-2 rounded-3xl">Sign up with Google</button></Link>

               <Link to=""><button className="bg-purple-200 flex px-6 py-2 rounded-3xl"><Facebook />with facebook</button></Link>
            </div>
            <hr className="font-"/>
            <p className="text-sm text-gray-400 py-2">Or sign up using your email address</p>

            <form action="">
               <div className="flex flex-col">
                  <label htmlFor="" className="font-bold ">Name</label>
                  <input type="text" className=" bg-purple-100 rounded-3xl p-2 w-100 focus:outline-none focus:ring-2 focus:ring-purple-500 border-0"/>
               </div>

               <div className="flex flex-col">
                  <label htmlFor="" className="font-bold ">Email or Phone no.</label>
                  <input type="email, text" className=" bg-purple-100 rounded-3xl p-2 w-100
                focus:outline-none focus:ring-2 focus:ring-purple-500 border-0" />
               </div>

               <div className="flex flex-col">
                  <label htmlFor="" className="font-bold ">Username</label>
                  <input type="text" className=" bg-purple-100 rounded-3xl p-2 w-100
                focus:outline-none focus:ring-2 focus:ring-purple-500 border-0" />
               </div>

               <div className="flex flex-col">
                  <label htmlFor="" className="font-bold ">Password</label>
                  <input type="password" className=" bg-purple-100 rounded-3xl p-2 w-100 focus:outline-none focus:ring-2 focus:ring-purple-500 border-0" />
               </div>


               <div className="text-sm font-semibold mt-8"><input type="checkbox" id="agree" name="terms" />
               <label for="agree" className="px-2">I agree to the terms and conditions</label></div>
            </form>

            <Link to=""><button className=" bg-purple-950 rounded-3xl p-2 w-100 border-0 text-white font-bold  mt-2">Sign up</button></Link>
            <p className="text-sm font-semibold py-2">Already have an account? <Link to="/login" className="hover:underline font-bold">Log in</Link></p></div>

      </div>
   )
}