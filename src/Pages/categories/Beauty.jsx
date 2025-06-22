import Category from "../../components/Category";
import { useRef } from "react";
import BeauVideo from '../../assets/videos/beauty2.mp4'
import { ChevronUp } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


export default function Beauty() {
  const videoRef = useRef();
  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="p-6">
        <div className=" w-full h-64 md:h-[400px] ">
          <video ref={videoRef} src={BeauVideo} autoPlay muted playsInline loop className="  w-full h-full object-cover" />
          <h1 className=" p-4 absolute top-50 text-white  text-8xl font-bold pt-16 ">Beauty and Care</h1>
        </div>
        <form className=" flex flex-row  p-8 justify-between  ">

          <div>
            <label htmlFor="sort">Sort by:</label>
            <select name="" id="" className=" border border-gray-300 rounded-md focus:outline-none ">
              <option value="Prices" >Prices</option>
              <option value="trends">Trends</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button className="border p-2 rounded hover:bg-gray-100">🔳</button>
            <button className="border p-2 rounded hover:bg-gray-100">📋</button>
          </div>

        </form>
        <div className=" flex items-center justify-center">
          <Category />
        </div>
        <div className="fixed right-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orangelight rounded-3xl w-16 h-12 flex items-center justify-center text-white font-semibold">
          <a href="#navbar"><button className="text-white "><ChevronUp /></button></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}