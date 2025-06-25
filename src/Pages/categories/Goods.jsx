import Category from "../../components/Category";
import GoodsVideo from '../../assets/videos/goods1.mp4';
import { ChevronUp, ChevronDown } from "lucide-react";
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useSWR from "swr";
import { apiFetcher } from "../../api/client";
import ProductCard from "../../components/ProductCard";
import { ScaleLoader } from "react-spinners";
import ErrorImage from '../../assets/images/error1.png'



export default function Goods() {
  const videoRef = useRef();
  const { data, isLoading, error } = useSWR('/adverts?category=goods', apiFetcher);

  const toggleFilters = () => {
    const show = document.getElementById("filters");
    show.classList.toggle("hidden");

    const you = document.getElementById("toggler");
    you.classList.replace("rotate-270", "rotate-360");
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader size={100} color="#FE5D26"  />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen ">
       <img src={ErrorImage} className="object-cover" alt="" />
      </div>
    )
  }

  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      <div className="p-4">
        <div className=" w-full h-64 md:h-[400px] ">
          <video ref={videoRef} src={GoodsVideo} autoPlay muted playsInline loop className="  w-full h-full object-cover" />
          <h1 className=" p-2 absolute top-35 md:top-50 text-white text-4xl md:text-8xl font-bold pt-16 ">Consumable Goods</h1>
        </div>
        <form action="" className=" flex items-center gap-2 md:flex-row p-4 md:p-6 md:items-center md:justify-around bg-white ">
          <h1 className="font-bold text-xl">Sort By:</h1>            <ChevronDown onClick={toggleFilters} className=" md:hidden" />

          <div className="flex md:flex-row">
            <div className="hidden md:flex  md:relative items-center justify-center p-4 gap-x-5 " id="filters">
              <div className="flex flex-row items-center justify-center w-25 md:w-48 md:rounded-2xl md:border gap-2 px-3 md:px-8 py-2 sm:w-20  hover:bg-orangelight hover:text-white ">
               <button>Groceries</button>
              </div>
              <div className="md:border flex flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2 gap-2 md:gap-4  hover:bg-orangelight hover:text-white ">
                <button>Medical Supplies</button>
              </div>
              <div className="md:border flex  flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2  hover:bg-orangelight hover:text-white">
            <button>Beverages</button>
              </div>
              <div className="md:border flex flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2  hover:bg-orangelight hover:text-white">
                <button>Toiletries</button>
              </div>
            </div>
          </div>
          {/* <Menu onClick={toggleFilters} className="md:hidden  "/> */}



        </form>

        <div className=" flex items-center justify-center">
          {data?.adverts?.map(advert => <ProductCard key={advert.id} advert={advert} />)}
        </div>
        <div className="fixed right-0.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orangelight rounded-3xl w-16 h-12 flex items-center justify-center text-white font-semibold">
          <a href="#navbar"><button className="text-white "><ChevronUp /></button></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}