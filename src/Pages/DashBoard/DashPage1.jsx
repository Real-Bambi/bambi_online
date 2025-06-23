import SideBar from "../../components/SideBar"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";



export default function DashBoard () {
  return(
      <>
      <SideBar/>
      <div className="bg-[#F5F5F5] h-[100vh] w-[80%] p-10">
        <p className="font-bold text-3xl text-black mb-10 ">Welcome , Dede</p>

        <div className="flex flex-row justify-between ">
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          
        </div>

      </div>
    </>
  )
}