import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catergory from "./components/Category";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router";



export default function AllProducts () {
   return(
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
     <div className="">
         <Catergory />
     </div>
      <div className="fixed right-0.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orangelight rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold">
          <a href="#navbar"><button className="text-white "><ChevronUp /></button></a>
        </div>
        <Footer />
    </div>
   )
}