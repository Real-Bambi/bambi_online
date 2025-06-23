import SideBar from "../../components/SideBar"
import { useState } from "react"

export default function DashBoard () {
const[search, setSearch] = useState();


  return(
      <>
      <SideBar/>
      <div className="my-5 mx-5">
        <p className="text-4xl font-bold pb-5">Manage Products</p>
        <button className="border bg-amber-500 rounded-2xl px-4 py-2 mb-5 ">Add Product</button>
        <div className="flex flex-row justify-between pb-5">
          <input 
          type="search" placeholder="Search products" name=""
          className="border p-2 w-[30%] rounded-xl"   
          onChange={(e) => setSearch(e.target.value)}/>

          <select name="" id=""  className="w-[30%] border p-2 rounded-xl">
            <option value="" >Status</option>
            <option value="">Active</option>
            <option value="">Not Active</option>
          </select>

          <select name="" id="" className="w-[30%] border p-2 rounded-xl" >
            <option value="">All Categories</option>
            <option value="">Fashion</option>
            <option value="">Animals and Pets</option>
            <option value="">Consumer Goods</option>
            <option value="">Beauty and Personal Care</option>
            <option value="">Commercial Equipment</option>
            <option value="">Vehicle</option>
          </select>
        </div>
      </div>
      
       <table className="w-full table-auto border rounded">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="p-3"><input type="checkbox" /></th>
            <th className="p-3">Product</th>
            <th className="p-3">Status</th>
            <th className="p-3">Created On</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        
        {/* <tbody>
          
            <tr key={product.id} className="border-t hover:bg-gray-50">
              <td className="p-3"><input type="checkbox" /></td>
              <td className="p-3 flex items-center gap-2">
                <span>{product.image}</span>
                {product.name}
              </td>
              <td className="p-3">
                {product.status ? (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">{product.status}</span>
                ) : (
                  '-'
                )}
              </td>
              <td className="p-3">{product.createdOn}</td>
              <td className="p-3 text-blue-600 hover:underline cursor-pointer">Edit</td>
            </tr>
        </tbody> */}
      </table>

      <div className="flex justify-center mt-4 space-x-2">
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">1</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">2</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">3</button>
      </div>
  
      </>
  )
}