import InitialCard from '../assets/images/initial-product.jpg';
import { Plus, Star } from 'lucide-react';





export default function ProductCard() {
   

    function likeBtn() {
        const heart = document.getElementById('heart');
        heart.classList.toggle('text-red-500'); // Adds/removes red
        heart.classList.toggle('text-black');   // Adds/removes black
    }

    return (
        <div className='shadow-md md:w-60 bg-white rounded p-6 relative'>
            <img src={InitialCard} alt="burger image" className='size-56 rounded-3xl' />
            <span className='pt-4'>

                <h1>Burger</h1>
                <div className='flex flex-row justify-between pt-2 '>
                    <p className='font-bold'>Ghc 10.99</p>
                    <Plus className='bg-amber-600 rounded p-1 ' />
                </div>
                <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                        <Star className='pt-2 w-5 h-5 ' key={i} />
                    ))}
                </div>
                <span
                    id="heart"
                    onClick={likeBtn}
                    className="cursor-pointer absolute top-2 right-2 text-black"
                >
                    ♥
                </span>

            </span>

        </div>
    )
}