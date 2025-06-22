import Category from "../../components/Category";
import { ChevronUp } from "lucide-react";
import AutoVideo from '../../assets/videos/auto1.mp4';
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router";

export default function Vehicles() {
  const videoRef = useRef();
  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="p-4">
        <div className=" w-full h-64 md:h-[400px] bg- ">
          <video ref={videoRef} src={AutoVideo} autoPlay muted playsInline loop className="  w-full h-full object-cover" />
          <h1 className=" p-4 absolute top-50 text-white  text-8xl font-bold pt-16 ">AutoMobiles</h1>
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
            <span className="text-lg font-bold text-gray-500">
              Showing 1–20 items
            </span>
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