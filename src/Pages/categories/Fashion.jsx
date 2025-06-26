
import { useRef } from "react";
import FashVideo from '../../assets/videos/fashion.mp4';
import { ChevronUp, ChevronDown } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useSWR from "swr";
import ProductCard from "../../components/ProductCard";
import { ScaleLoader } from "react-spinners";
import { apiFetcher } from "../../api/client";
import ErrorImage from '../../assets/images/error1.png'



export default function Fashion() {
  const videoRef = useRef();


  const { data, isLoading, error } = useSWR('/adverts?category=fashion', apiFetcher)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader size={100} color="#FE5D26" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={ErrorImage} alt="" />
      </div>
    )
  }



  const toggleFilters = () => {
    const show = document.getElementById("filters");
    show.classList.toggle("hidden");

    const you = document.getElementById("toggler");
    you.classList.replace("rotate-270", "rotate-360");
  }

  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      <div className=" mt-35 md:mt-20 p-4">
        <div className=" w-full h-64 md:h-[400px] ">
          <video ref={videoRef} src={FashVideo} autoPlay muted playsInline loop className="  w-full h-full object-cover" />
          <h1 className=" p-2 absolute top-70 md:top-70 text-white text-3xl md:text-8xl font-bold pt-16 ">Fashion</h1>
        </div>
        <form action="" className=" flex items-center gap-2 md:flex-row p-4 md:p-6 md:items-center md:justify-around bg-white ">
          <h1 className="font-bold text-xl">Sort By:</h1>            <ChevronDown onClick={toggleFilters} className=" md:hidden" />

          <div className="flex`">
            <div className="hidden md:flex  md:relative items-center justify-center p-4 gap-x-5 " id="filters">
              <div className="flex flex-row items-center justify-center w-25 md:w-48 md:rounded-2xl md:border gap-2 px-3 md:px-8 py-2 sm:w-20  hover:bg-orangelight hover:text-white">
               <button>Men's Fashion</button>
              </div>
              <div className="md:border flex flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2 gap-2 md:gap-4  hover:bg-orangelight hover:text-white">
                <button>Women's Fashion</button>
              </div>
              <div className="md:border flex  flex-row md:items-center md:justify-center md:rounded-2xl w-25 md:w-48 px-3 md:px-8 py-2  hover:bg-orangelight hover:text-white">
               <button>Baby's Fashion</button>
              </div>
              
            </div>
          </div>
          {/* <Menu onClick={toggleFilters} className="md:hidden  "/> */}



        </form>

        <div className=" grid mx-4 md:grid-cols-4 ">
          {data?.adverts?.map(advert => <ProductCard key={advert.id} advert={advert} />)}
        </div>
        <div className="fixed right-0.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orangelight rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold">
          <a href="#navbar"> <button className="text-white "><ChevronUp /></button></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}