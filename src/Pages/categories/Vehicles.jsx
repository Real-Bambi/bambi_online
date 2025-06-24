import Category from "../../components/Category";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import AutoVideo from '../../assets/videos/auto1.mp4';
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router";

export default function Vehicles() {

  const toggleFilters = () => {
    const show = document.getElementById("filters");
    show.classList.toggle("hidden");

    const you = document.getElementById("toggler");
    you.classList.replace("rotate-270", "rotate-360");
  }
  const videoRef = useRef();
  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="p-2 md:p-4">
        <div className="w-full h-64 md:h-[400px] bg- ">
          <video ref={videoRef} src={AutoVideo} autoPlay muted playsInline loop className=" w-full h-full object-cover" />
          <h1 className="p-2 md:p-4 sm:absolute top-40 sm:top-70 text-white text-2xl md:text-6xl font-bold pt-16 ">AutoMobiles</h1>
        </div>
        <form action="" className=" flex items-center gap-2 md:flex-row p-4 md:p-6 md:items-center md:justify-around bg-white ">
          <h1 className="font-bold text-xl">Sort By:</h1>            <ChevronDown onClick={toggleFilters} className=" md:hidden"/>

          <div className="flex">
            <div  className="hidden md:flex  md:relative items-center justify-center p-4 gap-x-5" id="filters">
          <div className="flex flex-row items-center justify-center w-25 md:w-48 md:rounded-2xl md:border gap-2 px-3 md:px-8 py-2 sm:w-20  hover:bg-orangelight hover:text-white ">
            <label htmlFor="">Trends</label>
            <select name="" id="" className="">
              <option selected disabled></option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="md:border flex flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2 gap-2 md:gap-4  hover:bg-orangelight hover:text-white">
            <label htmlFor="" className="text-center">Pricing</label>
            <select name="" id="">
              <option selected disabled></option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="md:border flex  flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2  hover:bg-orangelight hover:text-white">
            <label htmlFor="">Color</label>
            <select name="" id="">
              <option selected disabled></option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="md:border flex flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2 hover:bg-orangelight hover:text-white">
            <label htmlFor="">Recommended</label>
            <select name="" id="">
              <option selected disabled></option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          </div>
          </div>
                        {/* <Menu onClick={toggleFilters} className="md:hidden  "/> */}

                 

        </form>

       
        <div className=" ">
          <Category />
        </div>

        <div className="fixed right-0.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orangelight rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold">
          <a href="#navbar"><button className="text-white "><ChevronUp /></button></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}