import { Link } from "react-router";
import SideBar from "../../components/SideBar"
import AddProduct from "../../components/AddProduct";
import EditProduct from "../../components/EditProduct";
import useSWR from "swr";
import { apiFetcher } from "../../api/client";
import { useState } from "react";

export default function DashPage3() {
  const [page, setPage] = useState();
  const [isOpen, setOpen] = useState(false);
  const [isEnter, setEnter] = useState(false);


  // To Collect Data for the table
  // const { data, isLoading, error } = useSWR("/adverts/my-adverts", apiFetcher);

  // if (isLoading) {
  //   return (
  //     <div className="p-4 text-gray-600">Loading adverts...</div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="p-4 text-gray-600"><p>Something is Wrong</p></div>
  //   );
  // }


  // To handle the modal for the Add Product
  if (isOpen) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-50">
        <div>
          <AddProduct />
        </div>
      </div>
    );
  }

  // to handle the madal for the edit product
  if (isEnter) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-50">
        <div><EditProduct /></div>
      </div>
    )
  }

  return (
    <>
      <SideBar />
      <div className="bg-gray-100 h-[100vh]">
      <div className="my-5 ml-[25%] w-[70%]">
        <p className="text-5xl font-bold pb-5">Manage Products</p>
        <div className="flex justify-end mb-5">
          <button className="border bg-amber-500 text-white font-semibold rounded-lg px-5 py-2 shadow-md hover:bg-amber-600" onClick={() => setOpen(true)}>Add Product</button></div>
        {/* <Link to="/add-product"><button className="border bg-amber-500 rounded-2xl px-4 py-2 mb-5 ml-[80%] ">Add Product</button></Link> */}
        <div className="flex flex-row justify-between pb-5">
          <input
            type="search" placeholder="Search products" name=""
            className="border p-2 w-[30%] rounded-xl"
            onChange={(e) => setSearch(e.target.value)} />

          <select name="" id="" className="w-[30%] border p-2 rounded-xl">
            <option value="" >Price</option>
            <option value="">More than $1000</option>
            <option value="">Less than $1000</option>
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



      <div className="overflow-x-auto">
        <table className="table-auto border rounded-xl ml-[25%] w-[70%] bg-white shadow-md">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600">
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Product Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          {/* <tbody> */}
          {/* {data?.map((advert, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{advert.title}</td>
              <td className="border px-4 py-2">{advert.description}</td>
              <td className="border px-4 py-2">${advert.price}</td>
              <td className="border px-4 py-2">{advert.category}</td>
              <td><button className="border bg-amber-500 rounded-2xl px-4 py-2 mb-5 ml-[80%]" onClick={() => setEnter(true)}>Edit</button></td> */}
          {/* <Link to="/edit-product"><td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td></Link> */}
          {/* </tr>
          ))}
        </tbody> */}

          {/* <tbody className="">
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <Link to="/edit-product"><td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td></Link>
          </tr>
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <Link to="/edit-product"><td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td></Link>
          </tr>
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <Link to="/edit-product"><td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td></Link>
          </tr>
          <tr className="p-4 border-t hover:bg-gray-50 transition-colors">
            <td><input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" /></td>
            <td className="p-4 font-medium text-gray-900">Iphone13</td>
            <td className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-4">Active</td>
            <td className="p-4 text-gray-600">11-08-2025</td>
            <Link to="/edit-product"><td className="p-4 text-blue-600 hover:underline cursor-pointer">Edit</td></Link>
          </tr>

        </tbody> */}
        </table>
      </div>

      {/* <div className="flex justify-center mt-4 space-x-2">
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">1</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">2</button>
        <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">3</button>
      </div> */}

      <div className="flex justify-center mt-6 space-x-2">
        {[1, 2, 3].map((pg) => (
          <button
            key={pg}
            onClick={() => setPage(pg)}
            className={`px-4 py-2 rounded-md text-sm ${page === pg ? "bg-amber-500  font-semibold shadow" : "bg-white hover:bg-gray-200 border"}`}>
            {pg}
          </button>
        ))}
      </div>
      </div>

    </>
  )
}