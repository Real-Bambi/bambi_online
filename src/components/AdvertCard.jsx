import { Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';






export default function ProductCard({ advert }) {
    const [liked, setLiked] = useState(false);

    // Guard clause to avoid runtime errors
    if (!advert || !advert.image || !advert.image.url) {
        return null;
    }



    return (
        <div onDoubleClick={() => setLiked(!liked)} className='shadow-md   bg-white rounded p-4 md:p-12  md:w-full relative  transform hover:scale-[1.05] transition  '>
            <img src={advert.image.url} alt="burger image" className=' s size-56   rounded-3xl' />
            <span className='pt-2 md:pt-4'>

                <h1 className='font-bold'>{advert.title}</h1>
                <div className='flex'>

                    {[...Array(5)].map((_, i) => (
                        <Star className='pt-2 w-5 h-5 text-orangelight ' key={i} />
                    ))}
                </div>
                <h2 className='text-sm font-light'>{advert.description}</h2>
                <div className='flex flex-row justify-between pt-2 '>
                    <p className='font-bold'>GH₵{advert.price}.00</p>
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