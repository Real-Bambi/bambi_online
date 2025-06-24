import InitialCard from '../assets/images/initial-product.jpg';
import { Plus, Star, Heart } from 'lucide-react';
import { useState } from 'react';






export default function ProductCard() {
    const [liked, setLiked] = useState(false);



    return (
        <div onDoubleClick={() => setLiked(!liked)} className='shadow-md   bg-white rounded p-4 md:p-12 w-full relative  transform hover:scale-[1.05] transition  '>
            <img src={InitialCard} alt="burger image" className='size-56   rounded-3xl' />
            <span className= 'pt-2 md:pt-4'>

                <h1>Burger</h1>
                <div className='flex flex-row justify-between pt-2 '>
                    <p className='font-bold'>Ghc 10.99</p>
                    <div className='relative group'>
                        <Plus className='cursor-pointer bg-orangelight rounded p-1 ' />    
                    <div className="absolute top-7 mb-2 left-1/2 transform -translate-x-1/2 bg-bluelight text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                        View Product
                    </div>

                    </div>

                </div>
                <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                        <Star className='pt-2 w-5 h-5 ' key={i} />
                    ))}
                </div>
                <span
                    id="heart"

                    className={`absolute text-sm md:text-2xl top-2 right-2 cursor-pointer ${liked ? 'text-red-500' : 'text-black'}`}

                >
                    {liked ? '♥' : '♡'}
                </span>

            </span>

        </div>
    )
}