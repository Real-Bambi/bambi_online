import InitialCard from '../assets/images/initial-product.jpg';
import { Plus, Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';






export default function ProductCard({ advert }) {
  const [liked, setLiked] = useState(false);

  if (!advert || !advert.image || !advert.image.url) {
    return null;
  }

  return (
    <div
      onDoubleClick={() => setLiked(!liked)}
      className="shadow-md bg-white rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full relative transform hover:scale-[1.03] transition duration-300"
    >
      <img
        src={advert.image.url}
        alt="product"
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl mb-4"
      />

      <div>
        <h1 className="font-bold text-base sm:text-lg md:text-xl">{advert.title}</h1>

        <div className="flex mt-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orangelight" key={i} />
          ))}
        </div>

        <h2 className="text-sm text-gray-600 line-clamp-2">{advert.description}</h2>

        <div className="flex justify-between items-center mt-3">
          <p className="font-bold text-base sm:text-lg">GH₵{advert.price}.00</p>

          <Link to={`/product?id=${advert.id}`}> 
            <div className="relative group">
              <Plus className="cursor-pointer bg-orangelight text-white rounded-full p-1 w-6 h-6 sm:w-7 sm:h-7" />
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-bluelight text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 z-10 whitespace-nowrap">
                View Product
              </div>
            </div>
          </Link>
        </div>

        <div className="pt-4 text-sm sm:text-base">
          <span className="font-bold">Vendor:</span>
          <span className="text-orangelight ml-1">{advert.vendor.username}</span>
        </div>

        <span
          id="heart"
          className={`absolute text-lg sm:text-xl md:text-2xl top-2 right-2 cursor-pointer ${
            liked ? 'text-red-500' : 'text-black'
          }`}
        >
          {liked ? '♥' : '♡'}
        </span>
      </div>
    </div>
  );
}
