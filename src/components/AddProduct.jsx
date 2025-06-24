

export default function AddProduct() {

    return (
        <>
            <form className="bg-white rounded-lg shadow-md border border-gray-300  py-6 px-10 flex flex-col justify-center ml-[25%] w-[50%] ">
                <div className="h-[80vh]">
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


                    <div className="flex flex-row  ">
                        <button type="submit" className="border rounded-2xl bg-amber-300 px-4 py-2">Add Product</button>
                    </div>
                </div>
            </form>
        </>

    )
}
