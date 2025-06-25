import ProductCard from "../../components/ProductCard"
import SideBar from "../../components/SideBar"
import useSWR from "swr"
import { apiFetcher } from "../../api/client"
import { BeatLoader } from "react-spinners";



export default function DashPage2() {
  const{data, isLoading , error} = useSWR("/adverts/my-adverts" , apiFetcher)
   if (isLoading) {
        return (
            <div>
                <BeatLoader size={100} />
            </div>
        );
    }

    if (error) {
        return(
            <div>
                <p>something is wrong</p>
            </div>
        );
    }
 
    console.log(data);
 

  return (
    <>
      <SideBar />
      <div className="ml-[23%] w-[70%] ">
        <p className="text-4xl font-bold border bg-[#FE5D26] rounded-2xl w-[35%] px-8 py-2 m-4 ">ALL PRODUCTS</p>
      <div className="grid grid-cols-3 gap-5 ">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => <ProductCard key={n}/>)}
      </div>
         
      </div>



    </>
  )
}