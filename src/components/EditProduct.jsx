import { useSearchParams, useNavigate } from 'react-router';
import useSWR from 'swr';
import { apiClient, apiFetcher } from '../api/client';
import { BeatLoader } from "react-spinners";
import Log from "../assets/images/log.png"



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
            <div className="bg-cover bg-center h-[100vh] overflow-hidden" style={{ backgroundImage: `url(${Log})` }}>
                <div className="absolute w-full mx-auto h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                <form action={putProduct} className="text-white rounded-lg shadow-md border border-solid border-gray-300  py-6 px-10 flex flex-col  h-[95vh] lg:h-[90vh] mt-15 lg:my-10 z-40 lg:w-1/2 w-[90%] mx-auto justify-center " >

                    <div className="text-3xl font-bold m-auto text-[#FE5D26]  bg-transparent rounded-2xl px-4 py-2"><h1>Change An Advert</h1></div>

                    <div className="flex flex-col px-2 py-2 ">
                        <label htmlFor="type" className="font-medium" >Product Title</label>
                        <input type="text" required name="title" id="productname" placeholder="Enter Product Title" className="  border p-2 rounded-md" defaultValue={data?.advert.title} />
                    </div>
                    <div className="flex flex-col px-2 py-2">
                        <label htmlFor="type" className="font-medium" >Products's Price</label>
                        <input type="text" required name="price" placeholder="Enter Product's Price" className=" p-2 rounded-md border" defaultValue={data?.advert.price} />
                    </div>


                    <div className="flex flex-col px-2 py-2">
                        <label htmlFor="type" className="font-medium" >Product Image</label>
                        <input type="file" required name="image" placeholder="Enter Product Image" className=" p-2 rounded-md border" />
                    </div>

                    <div className="flex flex-col p-4 px-2 py-2">
                        <select name="category" id="" className=" border p-2 rounded-xl" defaultValue={data?.advert.category} >
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
                        <textarea required name="description" placeholder="Enter Product Description" className=" p-2  pb-20 rounded-md border " defaultValue={data?.advert.description} />
                    </div>

                    <div className="mt-1 flex flex-row gap-x-40 px-10">
                        <div >
                            <button type="submit" className="border rounded-2xl bg-[#FE5D26] px-4 py-2">Edit Product</button>
                        </div>

                    </div>
                </form>
            </div>
            </div>
        </>

    )
}
