import { apiClient, } from "../api/client";
import { useNavigate } from "react-router";


export default function AddProduct({onClose}) {
    const navigate = useNavigate();

    //  Post Data to API
    const postProduct = async (data) => {

        try {
            const response = await apiClient.post("/adverts", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            navigate('/dash-page1');

        } catch (error) {
            console.log(error);

        }
    };


    return (
        <>
            <form action={postProduct} className="bg-white rounded-lg shadow-md border border-gray-300  py-6 px-10 flex flex-col mx-auto  w-[40%] h-[95vh] mt-4">
                    <div className="text-3xl font-bold m-auto"><h1>Add Product</h1></div>

                    <div className="flex flex-col p-4 ">
                        <label htmlFor="type"  >Product Title</label>
                        <input type="text" required name="title" id="productname" placeholder="Enter Product Title" className="  border p-2 rounded-md" />
                    </div>
                    <div className="flex flex-col p-4">
                        <label htmlFor="type">Products's Price</label>
                        <input type="text" required name="price" placeholder="Enter Product's Price" className=" p-2 rounded-md border" />
                    </div>


                    <div className="flex flex-col px-4 py-2">
                        <label htmlFor="type">Product Image</label>
                        <input type="file" required name="image" placeholder="Enter Product Image" className=" p-2 rounded-md border" />
                    </div>

                    <div className="flex flex-col p-4 px-4 py-2">
                        <select name="category" id="" className=" border p-2 rounded-xl" >
                            <option value="">All Categories</option>
                            <option value="">Fashion</option>
                            <option value="">Animals and Pets</option>
                            <option value="">Consumer Goods</option>
                            <option value="">Beauty and Personal Care</option>
                            <option value="">Commercial Equipment</option>
                            <option value="">Vehicle</option>
                        </select>
                    </div>


                    <div className="flex flex-col p-4">
                        <label htmlFor="type">Description</label>
                        <textarea required name="description" placeholder="Enter Product Description" className=" p-2  pb-20 rounded-md border " />
                    </div>

                    <div className="mt-1 flex flex-row gap-x-40 px-10">
                    <div >
                        <button type="submit" className="border rounded-2xl bg-[#FE5D26] px-4 py-2">Add Product</button>
                    </div>

                    <div>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">Cancel</button>
                    </div>
                    </div>
            </form>
        </>

    )
}
