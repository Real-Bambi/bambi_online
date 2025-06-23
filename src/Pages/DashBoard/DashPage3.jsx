import SideBar from "../../components/SideBar"
import { useState } from "react"

export default function DashPage3() {
  const [search, setSearch] = useState();


  return (
    <>
      <SideBar />
      <div className="my-5 ml-[20%] w-[80%] ">
        <p className="text-5xl font-bold pb-5">Manage Products</p>
        <button className="border bg-amber-500 rounded-2xl px-4 py-2 mb-5 ">Add Product</button>
        <div className="flex flex-row justify-between pb-5">
          <input
            type="search" placeholder="Search products" name=""
            className="border p-2 w-[30%] rounded-xl"
            onChange={(e) => setSearch(e.target.value)} />

          <select name="" id="" className="w-[30%] border p-2 rounded-xl">
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

      <table className=" table-auto border rounded ml-[20%] w-[78%] ">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="p-3"><input type="checkbox" /></th>
            <th className="p-3">Product</th>
            <th className="p-3">Status</th>
            <th className="p-3">Created On</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody className="">
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox"  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"  /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td>
          </tr>
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox"  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"  /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td>
          </tr>
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox"  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"  /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td>
          </tr>
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox"  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"  /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td>
          </tr>
         
        </tbody>
      </table>

      <div className="flex justify-center mt-4 space-x-2">
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">1</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">2</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">3</button>
      </div>

    </>
  )
}