
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/images/initial-product.jpg"

export default function Cart() {
  return (
    <>
      <Navbar />

      <div className="p-6 md:p-12 mt-20 min-h-screen bg-gray-100 text-black">
        <h1 className="text-2xl md:text-3xl font-bold text-[#FE5D26] mb-6">
          Your Cart
        </h1>

        <div className="grid gap-6">
          
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt="Wireless Headphones"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold text-lg">Wireless Headphones</h2>
                <p className="text-sm text-gray-500">Qty: 2</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#FE5D26]">Gh₵119.98</p>
            </div>
          </div>

         
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt="Smart Watch"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold text-lg">Smart Watch</h2>
                <p className="text-sm text-gray-500">Qty: 1</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#FE5D26]">Gh₵89.99</p>
            </div>
          </div>
        </div>

       
        <div className="mt-8 flex justify-between items-center">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-bold text-[#FE5D26]">Gh₵209.97</p>
        </div>

       
        <div className="mt-6 text-right">
          <button className="bg-[#FE5D26] hover:bg-[#d94c1f] text-white px-6 py-2 rounded-full transition">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
