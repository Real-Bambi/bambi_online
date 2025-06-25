import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import { ChevronLeft, ChevronRight, Star, Heart, Plus } from "lucide-react";
import Shop1 from "../assets/videos/shop1.mp4";
import { Link } from "react-router";
import Fashion from '../assets/images/fashion.jpg';
import Equipment from '../assets/images/equipment.jpg';
import Makeup from '../assets/images/makeup.jpg';
import { useState } from "react";
import useSWR from "swr";
import { ScaleLoader } from "react-spinners";
import { apiFetcher } from "../api/client";


export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const { data, isLoading, error } = useSWR("/adverts?limit=2", apiFetcher)

  if (isLoading) {
    return (
      <div>
        <ScaleLoader size={150} color="#FE5D26" />
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    )
  }



  return (
    <div>
      <Navbar />


      <section className="bg-cyan-600 mt-20 text-white px-6 py-6 md:px-12 md:py-8 rounded-lg m-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Reliable Imports & Exports between China and Ghana</h2>
            <p className="text-sm md:text-base text-cyan-100 mt-2">
              Explore quality electronics, fashion, home goods, and more — safely imported from China to Ghana at competitive rates.

            </p>
          </div>


          <Link to="/products"><button className="bg-white text-cyan-700 px-5 py-2 rounded-full font-bold hover:bg-[#f3eae7] cursor-pointer transition animate-pulse">
            Shop now
          </button></Link>
        </div>
      </section>

      <section className="relative h-[70vh] w-full overflow-hidden">
        <video src={Shop1} autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/50">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider">Welcome to <span className="text-[#FE5D26]">Bambi Online</span></h1>
          <p className="text-base md:text-xl font-bold italic tracking-wide mt-4 mb-2 max-w-xl">
            Find What You Need <br className="hidden md:block" />Post What You Sell
          </p>
          <Link to="/allproducts"><button className="mt-4 bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-300 transition">
            Shop Now
          </button></Link>
        </div>
      </section>

      <h1 className="text-xl md:text-3xl font-extrabold animate-pulse mt-4 text-[#586670] p-4">TRENDING NOW</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4 md:p-8">
        {data?.adverts?.map(advert => <ProductCard key={advert.id} advert={advert} />)}
      </div>

      <section className="bg-[#B2C6D5] text-white px-6 py-12 md:px-12">
        <div className="flex flex-col md:flex-row items-center animate-scroll justify-between gap-8">

          <div className="flex-1">
            <h2 className="text-3xl text-[#f37146] md:text-4xl font-extrabold mb-2">
              Build an elite collection
            </h2>
            <p className="mb-4 text-white italic font-semibold">
              Choose your next adventure from thousands of kits.
            </p>
            <Link to="/allproducts"><button className="bg-white text-[#FE5D26] font-semibold px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer transition">
              Explore All Collections
            </button></Link>
          </div>


          <div className="flex-1 flex justify-center gap-4 overflow-x-auto md:overflow-visible text-[#FE5D26]">

            <div className="flex flex-col items-center">
              <Link to="/fashion"><img src={Fashion} alt="Fashion" className="w-24 h-36 object-cover rounded shadow hover:scale-105 duration-300 transition-transform" />
                <span className="mt-2 text-sm font-bold">Fashion ›</span></Link>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/Equipment"><img src={Equipment} alt="Equipment" className="w-24 h-36 object-cover rounded shadow hover:scale-105 duration-300 transition-transform" />
                <span className="mt-2 text-sm font-bold">Equipment ›</span></Link>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/beauty"><img src={Makeup} alt="Makeup" className="w-24 h-36 object-cover rounded shadow hover:scale-105 duration-300 transition-transform" />
                <span className="mt-2 text-sm font-bold">Makeup ›</span></Link>
            </div>
          </div>
        </div>


        <div className="mt-8 flex justify-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white/50 rounded-full"></span>
          <span className="w-2 h-2 bg-white/50 rounded-full"></span>



        </div>
      </section>




      <section className="px-4 py-10 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FE5D26] text-center mb-8">Our happy clients</h2>

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10 hidden md:block">
            <ChevronLeft />
          </button>


          <div className="flex overflow-x-auto gap-8 space-x-4 scrollbar-hide h-[50vh] snap-x snap-mandatory px-4">


            <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://t4.ftcdn.net/jpg/05/54/49/37/360_F_554493763_8lh34fMzfBzUU50jSHzyHoM4qwpYrbmi.jpg"
                  alt="client"
                  className="w-12 h-12 rounded-full" />

                <div>
                  <h4 className="font-semibold">Xìngmíng</h4>
                  <p className="text-xs text-gray-500">1 月 20 日</p>
                </div>

                <div className="flex items-center mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>



              <h5 className="font-bold mb-2">无与伦比的价格，卓越的品质</h5>
              <p className="text-sm text-gray-600 w-60 tracking-wide">
                我比较了多个网站的价格，这个是最划算的。而且产品质量也超出我的预期——双赢 我比较了多个网站的价格，这个是最划算的。而且产品质量也超出我的预期——双赢！
              </p>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://www.shutterstock.com/image-photo/cheerful-attractive-african-freelance-business-600nw-2432719233.jpg"
                  alt="client"
                  className="w-12 h-12 rounded-full" />

                <div>
                  <h4 className="font-semibold">Albert</h4>
                  <p className="text-xs text-gray-500">02 February</p>
                </div>

                <div className="flex items-center mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>



              <h5 className="font-bold mb-2">The Best Marketing Decision I've Made</h5>
              <p className="text-sm text-gray-600 w-60 tracking-wide">
                I’ve tried different ad platforms before, but none delivered ROI like this. Your team's ability to understand my audience and craft the perfect ad was a game-changer.
              </p>
            </div>



            <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/17/20220401_Lee_Min-ho_%EC%9D%B4%EB%AF%BC%ED%98%B8_ELLE_Taiwan_%282%29.jpg"
                  alt="client"
                  className="w-12 h-12 rounded-full" />

                <div>
                  <h4 className="font-semibold">Jackie Chan</h4>
                  <p className="text-xs text-gray-500">3月15日</p>
                </div>
                <div className="flex items-center mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>


              <h5 className="font-bold mb-2">我每天都在用这个搅拌机，效果非常好</h5>
              <p className="text-sm text-gray-600 w-60 tracking-wide">
                我每天都在用这个搅拌机，效果非常好。搅拌得非常细腻，没有任何问题。足够强大，可以处理冷冻水果和蔬菜。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://news.cornell.edu/sites/default/files/styles/breakout/public/2020-05/0521_abebegates.jpg?itok=OdW8otpB"
                  alt="client"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Sally</h4>
                  <p className="text-xs text-gray-500">19 February</p>
                </div>
                <div className="flex items-center mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>


              <h5 className="font-bold mb-2">Fast Delivery & Great Packaging</h5>
              <p className="text-sm text-gray-600 w-60 tracking-wide">
                I was surprised at how quickly my order arrived! The items were well-packaged, and everything was in perfect condition. Definitely shopping here again.
              </p>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6yjWHEMYCQnUm3YAfbMNDK5CWWLdCrDr9Q&s"
                  alt="client"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Genevieve</h4>
                  <p className="text-xs text-gray-500">22 April</p>
                </div>
                <div className="flex items-center mb-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>


              <h5 className="font-bold mb-2">Exactly What I Needed</h5>
              <p className="text-sm text-gray-600 w-60 tracking-wide">
                The product matched the description perfectly. Sizes were accurate, colors were true to the photos, and the checkout process was smooth and easy.
              </p>
            </div>
          </div>


          <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10 hidden md:block">
            <ChevronRight />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}