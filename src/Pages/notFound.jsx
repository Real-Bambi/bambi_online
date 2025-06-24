import { useNavigate } from 'react-router';
import notFound from "../assets/images/notFound.gif";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
     
      <img
        src={notFound}
        alt="404 Not Found"
        className="absolute  h-screen w-screen"
      />

      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4"></h1>
        <p className="text-lg md:text-xl mb-6">Sorry, the page you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#fe5d26] hover:bg-white hover:text-black transition font-medium px-6 py-2 rounded-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
