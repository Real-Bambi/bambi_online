import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import secure from "../assets/images/secure.png";
import { useState } from "react";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { BeatLoader } from "react-spinners";
import { useSearchParams, Link } from "react-router";

export default function Product() {
  const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState("M");
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");

  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
  } = useSWR(productId ? `/adverts/${productId}` : null, apiFetcher);

  const {
    data: relatedData,
    isLoading: relatedLoading,
    error: relatedError,
  } = useSWR("/adverts?limit=8", apiFetcher);

  const product = productData?.advert;

  return (
    <>
      <Navbar />

     

      <div className="max-w-7xl mx-auto px-4 py-30 space-y-16 text-black">

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border shadow cursor-zoom-in bg-gray-50">
              {productId && product ? (
                <img
                  src={product.image?.url}
                  alt={product.title}
                  className="w-full h-[450px] object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110 hover:shadow-2xl"
                />
              ) : (
                <div className="w-full h-[450px] flex items-center justify-center text-gray-400 text-sm">
                  No product selected
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold text-[#fe5d26]">
              {product?.title || "Select a product to view details"}
            </h1>
            <div className="text-2xl font-semibold">
              {product?.price ? `Gh₵${product.price}` : "Gh₵0.00"}
            </div>

            <div className="flex items-center gap-2 text-yellow-500 text-sm">
              ★★★★☆{" "}
              <span className="text-gray-600">
                ({product?.ratingCount || 0} reviews)
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {product?.description || "Product description will appear here."}
            </p>

            <div className="flex items-center gap-10 text-sm font-medium">
              <span className="text-green-600">✅ In Stock</span>
              <div className="flex items-center gap-2 text-gray-500">
                <img src={secure} alt="Secure" className="h-4 w-4" />
                <span>Secure Payment</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="block text-md font-medium">Select Size</label>
              <div className="flex gap-4">
                {["None", "S", "M", "L"].map((size) => (
                  <label key={size} className="flex items-center gap-1 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                      className="accent-[#fe5d26]"
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-md font-medium">Quantity</label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 border px-3 py-2 rounded text-sm"
              />
            </div>

            <div className="flex gap-10 pt-2">
              <button className="bg-[#fe5d26] hover:bg-black text-white px-6 py-2 rounded-md text-sm font-medium transition">
                Add to Cart
              </button>
              <button className="border border-[#fe5d26] text-[#fe5d26] hover:bg-[#fe5d26] hover:text-white px-6 py-2 rounded-md text-sm font-medium transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <div className="border-b flex gap-6 text-sm font-medium">
            {["description", "reviews", "shipping"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-[#fe5d26] text-[#fe5d26]"
                    : "hover:text-[#fe5d26]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 text-gray-700 text-sm leading-relaxed">
            {activeTab === "description" && <p>{product?.description || "Select a product to view full description."}</p>}
            {activeTab === "reviews" && <p>No reviews yet.</p>}
            {activeTab === "shipping" && <p>Shipping info and return policy will go here.</p>}
          </div>
        </div>

         <Link
        to={-1}
        className="fixed top-24 left-4 bg-[#fe5d26] hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-50"
        title="Go Back"
      >
        ←
      </Link>

        {/* Related Products */}
        <div>
          <h2 className="text-xl font-semibold text-[#fe5d26] mb-4">Related Products</h2>
          {relatedLoading ? (
            <BeatLoader color="#fe5d26" />
          ) : relatedError ? (
            <p className="text-red-500">Could not load related products.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {relatedData?.adverts?.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] duration-300"
                >
                  <img
                    src={item.image?.url}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4 space-y-1">
                    <div className="text-sm font-semibold text-gray-800 truncate">
                      {item.title}
                    </div>
                    <div className="text-sm text-[#fe5d26] font-medium">
                      Gh₵{item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
