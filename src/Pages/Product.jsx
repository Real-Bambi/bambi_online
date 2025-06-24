import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"
import mainImage from "../assets/images/initial-product.jpg"
import thumbnails from "../assets/images/initial-product.jpg"
import { useState, useEffect } from "react"





export default function Product() {
 
   return (
      <>
  
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div className="space-y-4">
          <img
            src={mainImage}
            alt="Main Product"
            className="w-full rounded-lg border shadow"
          />
          <div className="flex gap-2">
            <img src={mainImage} alt="thumb" className="h-20 w-20 rounded border cursor-pointer" />
            <img src={mainImage} alt="thumb" className="h-20 w-20 rounded border cursor-pointer" />
            <img src={mainImage} alt="thumb" className="h-20 w-20 rounded border cursor-pointer" />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="text-2xl font-semibold text-black">Ghc49.99</div>
          <h1 className="text-3xl font-bold text-[#fe5d26]">Product Title</h1>
          <p className="text-gray-600 text-sm">This is a short product description that highlights key features.</p>
          <p className="text-green-600 text-sm">In Stock</p>

          <div className="space-y-3">
            <label className="block text-sm font-medium">Size</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">Quantity</label>
            <input type="number" min="1" defaultValue="1" className="w-20 border px-3 py-2 rounded" />
          </div>

          <div className="flex gap-4">
            <button className="bg-[#fe5d26] hover:bg-black text-white px-6 py-2 rounded-md text-sm font-medium transition">
              Add to Cart
            </button>
            <button className="border border-[#fe5d26] text-[#fe5d26] hover:bg-[#fe5d26] hover:text-white px-6 py-2 rounded-md text-sm font-medium transition">
              Buy Now
            </button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <img src="/icons/secure.svg" alt="Secure" className="h-5" />
            <p className="text-sm text-gray-500">Secure Payment</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <div className="border-b flex gap-6 text-sm font-medium">
          <span className="py-2 border-b-2 border-[#fe5d26] cursor-pointer">Description</span>
          <span className="py-2 hover:text-[#fe5d26] cursor-pointer">Reviews</span>
          <span className="py-2 hover:text-[#fe5d26] cursor-pointer">Shipping & Returns</span>
        </div>
        <div className="mt-6 text-gray-700 text-sm leading-relaxed">
          Full product description goes here. It contains details, features, and specifications to inform the customer.
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-xl font-semibold text-[#fe5d26] mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="border rounded-lg p-3 hover:shadow transition">
            <img src="/images/related1.jpg" alt="Related" className="h-32 w-full object-cover rounded mb-2" />
            <div className="text-sm font-medium">Related Product 1</div>
            <div className="text-sm text-gray-600">$29.99</div>
          </div>
          <div className="border rounded-lg p-3 hover:shadow transition">
            <img src="/images/related2.jpg" alt="Related" className="h-32 w-full object-cover rounded mb-2" />
            <div className="text-sm font-medium">Related Product 2</div>
            <div className="text-sm text-gray-600">$39.99</div>
          </div>
          <div className="border rounded-lg p-3 hover:shadow transition">
            <img src="/images/related3.jpg" alt="Related" className="h-32 w-full object-cover rounded mb-2" />
            <div className="text-sm font-medium">Related Product 3</div>
            <div className="text-sm text-gray-600">$24.99</div>
          </div>
          <div className="border rounded-lg p-3 hover:shadow transition">
            <img src="/images/related4.jpg" alt="Related" className="h-32 w-full object-cover rounded mb-2" />
            <div className="text-sm font-medium">Related Product 4</div>
            <div className="text-sm text-gray-600">$59.99</div>
          </div>
        </div>
      </div>
    </div>
  

      </>
   )
};