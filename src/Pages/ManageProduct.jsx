

export default function Footer () {

<>
 <form action={postBook} className="bg-white p-8 rounded-lg shadow-md border border-gray-300  py-6 px-10 flex flex-col">
                            <div className="text-3xl font-bold m-auto"><h1>Fill Up Book Details</h1></div>

                            <div className="flex flex-col p-4 ">
                                <label htmlFor="type"  >Book Title</label>
                                <input type="text" required name="title" id="bookname" placeholder="Enter Book Title" className="  border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col p-4">
                                <label htmlFor="type">Author's Name</label>
                                <input type="text" required name="author" placeholder="Enter Author's Name" className=" p-2 rounded-md border" />
                            </div>

                            <div className="flex flex-col px-4 py-2 justify-between lg:flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="type">Publication Year</label>
                                    <input type="number" required name="publicationYear" placeholder="Enter Publication Year" className=" py-2 rounded-md border" /></div>

                                <div className="flex flex-col">
                                    <label htmlFor="type">Publication Company</label>
                                    <input type="text" required name="publishingCompany" placeholder="Enter Publication Company" className=" p-2 rounded-md border" /></div>
                            </div>

                            <div className="flex flex-col px-4 py-2 justify-between lg:flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="type">ISB Number</label>
                                    <input type="number" required name="isbn" placeholder="Enter ISB Number" className=" p-2 rounded-md border" />
                                </div>

                                <div className="flex flex-col p-4">
                                    <select name="genre" id="" className=" p-2 rounded-md border" >
                                        <option selected disabled >Choose Genre</option>
                                        <option value="history">History</option>
                                        <option value="science">Science</option>
                                        <option value="fiction">Fiction</option>
                                        <option value="romance">Romance</option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="programmming">Programming</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col p-4">
                                <label htmlFor="type">Synopsis</label>
                                <textarea required name="synopsis" placeholder="Enter Book Synopsis" className=" p-2  pb-40 rounded-md border " />
                            </div>


                            <div className="flex flex-row px-4 py-2">
                                <SubmitButton title={"Update Book"} />
                            </div>

                        </form>
</>

}
