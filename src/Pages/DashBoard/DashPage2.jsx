import AdvertCard from "../../components/AdvertCard"
import SideBar from "../../components/SideBar"
import useSWR from "swr"
import { apiFetcher } from "../../api/client"
import { ScaleLoader } from "react-spinners";



export default function DashPage2() {
  const{data, isLoading , error} = useSWR("/adverts/my-adverts" , apiFetcher)
   if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader size={100} color="#FE5D26" />
            </div>
        );
    }

    if (error) {
        return(
            <div className="flex justify-center items-center h-screen">
                <p>something is wrong</p>
            </div>
        );
    }
 
    console.log(data);
 

  return (
    <>
      <SideBar />
      <div className="ml-[23%] w-[70%] ">
        <p className="text-4xl font-medium border bg-white text-[#FE5D26] rounded-2xl w-full lg:w-[35%] px-8 py-2 m-4 ">MY ADVERTS</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data?.adverts?.map((advert, n) => <AdvertCard key={n} advert={advert}/>)}
      </div>
         
      </div>



    </>
  )
}