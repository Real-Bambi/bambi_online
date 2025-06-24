import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catergory from "./components/Category";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { apiFetcher } from "./api/client";
import useSWR from "swr";
import { BeatLoader } from "react-spinners";
import ProductCard from "./components/ProductCard";



export default function AllProducts() {
  const { data, isLoading, error } = useSWR("/adverts", apiFetcher);
  console.log(data);

  if (isLoading) {
    return (
      <BeatLoader size={100} className="flex justify-center items-center h-screen" />
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-3xl font-black text-center pt-6">OOPS! Something went wrong</h1>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="mt-35 md:mt-30 text-4xl font-bold">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 my-6 px-4">
          <div>
            <h2 className="text-xl">Browse Categories</h2>
          </div>
          <Link to={"/vehicles"} className="w-full sm:w-auto text-sm md:text-base px-4 py-2 bg-bluelight rounded-lg  text-center hover:text-white">
            Automobiles
          </Link>
          <Link to={"/goods"} className="w-full sm:w-auto text-sm md:text-base px-4 py-2 bg-bluelight rounded-lg  text-center hover:text-white">
            Consumable Goods
          </Link>
          <Link to={"/fashion"} className="w-full sm:w-auto text-sm md:text-base px-4 py-2 bg-bluelight rounded-lg  text-center hover:text-white">
            Fashion
          </Link>
          <Link to={"/equipment"} className="w-full sm:w-auto text-sm md:text-base px-4 py-2 bg-bluelight rounded-lg  text-center hover:text-white">
            Electronics
          </Link>
          <Link to={"/beauty"} className="w-full sm:w-auto text-sm md:text-base px-4 py-2 bg-bluelight rounded-lg  text-center hover:text-white">
            Beauty and Care
          </Link>
          <Link to={"/animals"} className="w-full sm:w-auto text-sm md:text-base px-4 py-2 bg-bluelight rounded-lg  text-center hover:text-white">
            Animals and Pets
          </Link>
        </div>

        <h1 className="p-4">All products</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.adverts.map(advert => <ProductCard key={advert.id} advert={advert} />)}
      </div>
      <div className="fixed right-0.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orangelight rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold">
        <a href="#navbar"><button className="text-white "><ChevronUp /></button></a>
      </div>
      <Footer />
    </div>
  )
}