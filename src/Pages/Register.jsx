import { Link } from "react-router";
import { Facebook } from "lucide-react";
import Signup from "../assets/images/signup.png";

export default function Register() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={Signup}
          alt="Signup"
          className="w-full h-full object-cover md:rounded-r-3xl"
        />
      </div>

      
      <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
        <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left">
          Create Account
        </h1>

        
        <div className="flex flex-col sm:flex-row gap-4 font-bold py-6">
          <Link to="">
            <button className="w-full bg-purple-800 text-white px-6 py-2 rounded-3xl">
              Sign up with Google
            </button>
          </Link>

          <Link to="">
            <button className="w-full bg-purple-200 flex justify-center items-center gap-2 px-6 py-2 rounded-3xl text-black">
              <Facebook className="w-4 h-4" />
              with Facebook
            </button>
          </Link>
        </div>

        <hr />
        <p className="text-sm text-gray-400 py-4 text-center md:text-left">
          Or sign up using your email address
        </p>

        
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="font-bold">Name</label>
            <input
              type="text"
              className="bg-purple-100 rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 border-0"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Email or Phone no.</label>
            <input
              type="text"
              className="bg-purple-100 rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 border-0"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Username</label>
            <input
              type="text"
              className="bg-purple-100 rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 border-0"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Password</label>
            <input
              type="password"
              className="bg-purple-100 rounded-3xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 border-0"
            />
          </div>

          
          <div className="text-sm font-semibold mt-4 flex items-center">
            <input type="checkbox" id="agree" name="terms" />
            <label htmlFor="agree" className="ml-2">
              I agree to the terms and conditions
            </label>
          </div>

         
          <Link to="">
            <button className="w-full bg-purple-950 text-white font-bold py-3 rounded-3xl mt-2">
              Sign up
            </button>
          </Link>
        </form>

       
        <p className="text-sm font-semibold py-6 text-center md:text-left">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline font-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}