import ProductCard from "../../components/ProductCard"
import SideBar from "../../components/SideBar"



export default function DashBoard() {
  return (
    <>
      <SideBar />
      <div className="m-auto ">
        <p className="text-4xl font-bold">ALL PRODUCTS</p>
      <div className="grid grid-cols-3 gap-5 w-[80%]">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => <ProductCard key={n}/>)}
      </div>
         
      </div>



    </>
  )
}