import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Home () {
  return(
      <div>
        <Navbar />
        <ProductCard />
        This is the Home
         <section className="px-4 py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our happy clients</h2>

      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10 hidden md:block">
          <ChevronLeft />
        </button>

        
        <div className="flex overflow-x-auto gap-8 space-x-4 scrollbar-hide snap-x snap-mandatory px-4">
          
          <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://www.shutterstock.com/image-photo/cheerful-attractive-african-freelance-business-600nw-2432719233.jpg"
                alt="client"
                className="w-12 h-12 rounded-full"/>
              
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
            <p className="text-sm text-gray-600">
              I’ve tried different ad platforms before, but none delivered ROI like this. Your team's ability to understand my audience and craft the perfect ad was a game-changer.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://news.wayne.edu/storage/files/whitfield-spotlight-research-photo-1-607070992a723.jpg"
                alt="client"
                className="w-12 h-12 rounded-full"/>
              
              <div>
                <h4 className="font-semibold">Dede</h4>
                <p className="text-xs text-gray-500">20 January</p>
              </div>

              <div className="flex items-center mb-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            </div>

            

            <h5 className="font-bold mb-2">Unbeatable Prices for Great Quality</h5>
            <p className="text-sm text-gray-600">
              I compared prices across multiple sites and this one offered the best deal. Plus, the product quality exceeded my expectations — win-win!
            </p>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6 snap-center flex-shrink-0 w-full max-w-md  mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://www.beardorganics.com/cdn/shop/articles/beard-growth-advice-for-black-men.jpg?v=1619991249&width=1200"
                alt="client"
                className="w-12 h-12 rounded-full"/>
              
              <div>
                <h4 className="font-semibold">Cyrus</h4>
                <p className="text-xs text-gray-500">15 March</p>
              </div>
              <div className="flex items-center mb-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            </div>


            <h5 className="font-bold mb-2">Affordable, Efficient, and Effective</h5>
            <p className="text-sm text-gray-600">
              I've been using this blender daily for a month, and it blends smoothly
              without any issues. Powerful enough for frozen fruits and veggies.
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
            <p className="text-sm text-gray-600">
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
            <p className="text-sm text-gray-600">
              The product matched the description perfectly. Sizes were accurate, colors were true to the photos, and the checkout process was smooth and easy.
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10 hidden md:block">
          <ChevronRight />
        </button>
      </div>
    </section>
        <Footer />
    </div>
  )
}