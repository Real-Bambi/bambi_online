import { Link } from "react-router";
import SideBar from "../../components/SideBar"
import AddProduct from "../../components/AddProduct";
import EditProduct from "../../components/EditProduct";
import useSWR from "swr";
import { apiFetcher , apiClient } from "../../api/client";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ScaleLoader } from "react-spinners";
import Log from "../../assets/images/log.png"


export default function DashPage3() {
  const [page, setPage] = useState();
  const navigate = useNavigate();
  

  // To Collect Data for the table
  const { data, isLoading, error } = useSWR("/adverts/my-adverts", apiFetcher);

  if (isLoading) {
    return (
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader size={100} color="#FE5D26" />
            </div>
        );
    }
  if (error) {
    return (
      <div className="p-4 text-gray-600"><p>Something is Wrong</p></div>
    );
  }


  return (
    <>
      <SideBar />
      <div className="bg-gray-100 h-[100vh] overflow-y-hidden">
        <div className="my-5 ml-[25%] w-[70%] ">
          <p className="text-5xl font-bold pb-5">Manage Products</p>
          <div className="flex justify-end mb-5">
           <Link
            to={"/add-product"}>
            <button className="border bg-[#FF8259] text-white font-semibold rounded-lg px-5 py-2 shadow-md hover:bg-amber-600" >Add Product</button></Link> </div>
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
              <option value="fashion">Fashion</option>
              <option value="animal-and-pets">Animals and Pets</option>
              <option value="consumable-goods">Consumer Goods</option>
              <option value="beauty-and-personal-care">Beauty and Personal Care</option>
              <option value="commercial-equipment">Commercial Equipment</option>
              <option value="automobiles">Vehicle</option>
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
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.adverts.map((advert, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3"><input type="checkbox" /></td>
                  <td className="border px-4 py-2">{advert.title}</td>
                  <td className="border px-4 py-2">{advert.category}</td>
                  <td className="border px-4 py-2">Gh{advert.price}</td>
                  <td className="border px-4 py-2">{advert.createdAt}</td>
                  <td><Link to={`/edit-product?id=${advert.id}`}><button className="border bg-[#FF8259] text-white font-semibold rounded-lg px-5 py-2 ml-2 hover:bg-amber-600">Edit</button></Link></td>
                  <td><button  className="border bg-[#FF8259] text-white font-semibold rounded-lg px-3 py-2 shadow-md hover:bg-amber-600">Delete Book</button></td>
                </tr>
              ))}
            </tbody>


          </table>
        </div>

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