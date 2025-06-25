import { useSearchParams, useNavigate } from 'react-router';
import useSWR from 'swr';
import { apiClient, apiFetcher } from '../api/client';
import { BeatLoader } from "react-spinners";



export default function EditProduct() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const { data, isLoading, error } = useSWR(`/adverts/${id}`, apiFetcher);

    const putProduct = async (data) => {
        try {
            const response = await apiClient.put(`/adverts/${id}`, data, {

                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
            });
            console.log(response.data);
            navigate('/dash-page2');

        } catch (error) {
            console.log(error);

        }

    }

    if (isLoading) {
        return (
            <div><BeatLoader size={100} /> </div>
        );
    }

    if (error) {
        return (
            <div><p>Something is wrong</p></div>
        )
    }

    return (
        <>
            <form action={putProduct} className="bg-white rounded-lg shadow-md border border-gray-300  py-6 px-10 flex flex-col mx-auto w-[40%] h-[95vh] mt-4">
                <div className="text-3xl font-bold m-auto"><h1>Edit Product</h1></div>

                <div className="flex flex-col p-4 ">
                    <label htmlFor="type"  >Product Title</label>
                    <input type="text" required name="title" id="productname" placeholder="Enter Product Title" className="  border p-2 rounded-md" defaultValue={data?.advert.title} />
                </div>
                <div className="flex flex-col p-4">
                    <label htmlFor="type">Products's Price</label>
                    <input type="text" required name="price" placeholder="Enter Product's Price" className=" p-2 rounded-md border"defaultValue={data?.advert.price} />
                </div>

                <div className="flex flex-col px-4 py-2">
                    <label htmlFor="type">Product Image</label>
                    <input type="file" required name="image" placeholder="Enter Product Image" className=" p-2 rounded-md border"  />
                </div>

                <div className="flex flex-col p-4 px-4 py-2">
                    <select name="category" id="" className=" border p-2 rounded-xl" defaultValue={data?.advert.category}>
                        <option value="">All Categories</option>
                        <option value="fashion">Fashion</option>
                        <option value="animal-and-pets">Animals and Pets</option>
                        <option value="consumable-goods">Consumer Goods</option>
                        <option value="beauty-and-personal-care">Beauty and Personal Care</option>
                        <option value="commercial-equipment">Commercial Equipment</option>
                        <option value="automobiles">Vehicle</option>
                    </select>
                </div>


                <div className="flex flex-col p-4">
                    <label htmlFor="type">Description</label>
                    <textarea required name="description" placeholder="Enter Product Description" className=" p-2  pb-20 rounded-md border " defaultValue={data?.advert.description} />
                </div>

                <div className="mt-1 flex flex-row gap-x-40 px-10">
                    <div >
                        <button type="submit" className="border rounded-2xl bg-[#FE5D26] px-4 py-2">Edit Product</button>
                    </div>

                    {/* <div>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">Cancel</button>
                    </div> */}
                </div>
            </form>
        </>

    )
}
