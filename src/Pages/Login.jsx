import { Link } from "react-router";



export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4">
      
    
      <div className="bg-amber-700 bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full text-white ">
        <h2 className="text-2xl font-semibold text-center mb-6">Have an account?</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-orange-200 text-black font-semibold py-2 rounded-full hover:bg-orange-300 transition"
          >
            SIGN IN
          </button>

          <div className="flex justify-between text-sm items-center mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <div className="text-center text-white mt-6 mb-2 text-sm">
            — Not a member? <Link to="/register" className="hover:underline font-bold">Sign up</Link> —
          </div>
        </form>
      </div>
    </div>
  );
}