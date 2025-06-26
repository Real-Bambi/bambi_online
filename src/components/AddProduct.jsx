import { apiClient, } from "../api/client";
import { useNavigate } from "react-router";
import Log from "../assets/images/log.png"


export default function AddProduct({ onClose }) {
    const navigate = useNavigate();

    //  Post Data to API
    const postProduct = async (data) => {

        try {
            const response = await apiClient.post("/adverts", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
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
           <div className="bg-cover bg-center h-[100vh] overflow-hidden" style={{ backgroundImage: `url(${Log})` }}>
            <div className="absolute inset-0 w-full mx-auto h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}> 
            <form action={postProduct} className="text-white rounded-lg shadow-md border border-solid border-gray-300  py-6 px-10 flex flex-col  h-[90vh] lg:h-[90vh] mt-15 lg:my-10 z-40 lg:w-1/2 w-[90%] mx-auto justify-center " >
                 
                <div className="text-3xl font-bold m-auto text-[#FE5D26]  rounded-2xl px-4 py-2"><h1>Create An Advert</h1></div>

                <div className="flex flex-col px-2 py-2 ">
                    <label htmlFor="type" className="font-medium" >Product Title</label>
                    <input type="text" required name="title" id="productname" placeholder="Enter Product Title" className="  border p-2 rounded-md" />
                </div>
                <div className="flex flex-col px-2 py-2">
                    <label htmlFor="type" className="font-medium" >Products's Price</label>
                    <input type="text" required name="price" placeholder="Enter Product's Price" className=" p-2 rounded-md border" />
                </div>
            

                <div className="flex flex-col px-2 py-2">
                    <label htmlFor="type" className="font-medium" >Product Image</label>
                    <input type="file" required name="image" placeholder="Enter Product Image" className=" p-2 rounded-md border" />
                </div>

                <div className="flex flex-col p-4 px-2 py-2">
                    <select name="category" id="" className=" border p-2 rounded-xl" >
                        <option value="">All Categories</option>
                        <option value="fashion">Fashion</option>
                        <option value="animal-and-pets">Animals and Pets</option>
                        <option value="consumable-goods">Consumer Goods</option>
                        <option value="beauty-and-personal-care">Beauty and Personal Care</option>
                        <option value="commercial-equipment">Commercial Equipment</option>
                        <option value="automobiles">Vehicle</option>
                    </select>
                </div>


                <div className="flex flex-col px-2 py-2">

                    <label htmlFor="type" className="font-medium" >Description</label>
                    <textarea required name="description" placeholder="Enter Product Description" className=" p-2  pb-20 rounded-md border " />
                </div>

                <div className="mt-1 flex flex-row gap-x-40 px-10">
                    <div >
                        <button type="submit" className="border rounded-2xl bg-[#FE5D26] px-4 py-2">Add Product</button>
                    </div>

                    <div className="hidden lg:block">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">Cancel</button>
                    </div>
                </div>
            </form>
            </div>
            </div>
        </>

    )
}
