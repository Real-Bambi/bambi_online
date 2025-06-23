import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useState } from "react"
import { Delete, DeleteIcon, Minus, Plus } from "lucide-react"
import ProductCard from "../../components/ProductCard"


export default function DashBoard() {
  const [number, setNumber] = useState(0)

  const increaseNumber = () => {
    setNumber(number + 1)
  }

  const decreaseNumber = () => {
    setNumber(number - 1)
  };

  const [deleteCart, setDeletecart] = useState(true);
      
   const deleteBox = () => {
    setIsVisible(false);
  };


  return (
    <>
      <Navbar />
      <section className="bg-white my-5 mx-5">

        <p className="text-3xl font-extrabold text-black pb-10 ">Shopping Cart</p>
        <div className="flex flex-row gap-10 mx-auto pb-8">

        <div className="border rounded-2xl w-[60%] border-[#cec9c9]  ">
          <div className="flex flex-row justify-between items-center font-bold p-5 ">
            <p className="ml-20">Product</p>
            <p>Quanity</p>
            <p>Total</p>
            <p>Action</p>
          </div>

          <hr className="w-[97%] mx-auto border-[#cec9c9]" />

          <div className="flex flex-row justify-between p-4 items-center">
            <div className="flex flex-row gap-3">
              <img src="" alt="img" />
              <div className="flex flex-col">
                <p className="font-bold">Furnite Set</p>
                <p className="text-[#cec9c9]">Colour:brown</p>
              </div>
            </div>
            <div className="border rounded-2xl flex items-center justify-center p-1">
              <Plus onClick={increaseNumber} />
              {number}
              <Minus onClick={decreaseNumber} />
            </div>
            <div>
              <p className="font-bold">$349.00</p>
            </div>
            <div>
            <Delete onClick={deleteBox}/>
            </div>
          </div>

          <hr className="w-[97%] mx-auto border-[#cec9c9]"/>

          <div className="flex flex-row justify-between p-4 items-center">
            <div className="flex flex-row gap-3">
              <img src="" alt="img" />
              <div className="flex flex-col">
                <p className="font-bold">Furnite Set</p>
                <p className="text-[#cec9c9]">Colour:brown</p>
              </div>
            </div>
            <div className="border rounded-2xl flex items-center justify-center p-1">
              <Plus onClick={increaseNumber} />
              {number}
              <Minus onClick={decreaseNumber} />
            </div>
            <div>
              <p className="font-bold">$349.00</p>
            </div>
            <div>
            <Delete onClick={deleteBox}/>
            </div>
          </div>

          <hr className="w-[97%] mx-auto border-[#cec9c9]"/>

          <div className="flex flex-row justify-between p-4 items-center">
            <div className="flex flex-row gap-3">
              <img src="" alt="img" />
              <div className="flex flex-col">
                <p className="font-bold">Furnite Set</p>
                <p className="text-[#cec9c9]">Colour:brown</p>
              </div>
            </div>
            <div className="border rounded-2xl flex items-center justify-center p-1">
              <Plus onClick={increaseNumber} />
              {number}
              <Minus onClick={decreaseNumber} />
            </div>
            <div>
              <p className="font-bold">$349.00</p>
            </div>
            <div>
            <Delete onClick={deleteBox}/>
            </div>
          </div>

          <hr className="w-[97%] mx-auto border-[#cec9c9]"/>

          <div className="flex flex-row justify-between p-4 items-center">
            <div className="flex flex-row gap-3">
              <img src="" alt="img" />
              <div className="flex flex-col">
                <p className="font-bold">Furnite Set</p>
                <p className="text-[#cec9c9]">Colour:brown</p>
              </div>
            </div>
            <div className="border rounded-2xl flex items-center justify-center p-1">
              <Plus onClick={increaseNumber} />
              {number}
              <Minus onClick={decreaseNumber} />
            </div>
            <div>
              <p className="font-bold">$349.00</p>
            </div>
            <div>
            <Delete onClick={deleteBox}/>
            </div>
          </div>

        </div>

        <div  className="border rounded-2xl  border-[#cec9c9] w-[30%] pb-6">
          <p className="font-bold">Order Summary</p>
         
         <div className="flex flex-row justify-between items-center pb-6 "> 
          <p>sub total</p>
          <p>$2345.00</p>
          </div>

         <div className="flex flex-row justify-between items-center pb-6"> 
          <p>sub total</p>
          <p>$2345.00</p>
          </div>

         <div className="flex flex-row justify-between items-center pb-6"> 
          <p>sub total</p>
          <p>$2345.00</p>
          </div>
          

          <hr />
          
          <div className="flex flex-row justify-between items-center pb-6"> 
          <p className="font-bold">Total</p>
          <p>$2345.00</p>
          </div>

          <button type="submit" className="border rounded-3xl text-white bg-black px-4 py-2 ">Check out</button>
        </div>
        </div>

        <div className="flex flex-col pb-6">
          <p className="font-bold text-3xl text-center">You Might Like</p>
          <div>

            <div className="grid grid-cols-2 gap-5 ">
                {[1,2,3,4,5,6].map(n => <ProductCard key={n} />)}
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}