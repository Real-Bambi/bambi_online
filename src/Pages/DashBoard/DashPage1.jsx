import PieChart from "../../components/PieChart";
import SideBar from "../../components/SideBar"
import StackedChart from "../../components/StackedChart";
import { Tag, Wallet ,BadgeX, Banknote } from "lucide-react";
import useSWR from "swr";
import { apiFetcher } from "../../api/client";
import { ScaleLoader } from "react-spinners";



export default function DashPage1() {
 // To Collect Data for the Adverts
  const { data, isLoading, error } = useSWR("/dashboard/stats", apiFetcher);

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
      <div className="bg-[#F5F5F5] h-[full] w-full lg:w-[80%] lg:ml-[20%] p-10 overflow-hidden">
        <p className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Welcome, <span className="text-[#FF8259]">Dede</span>
        </p>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className=" rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 hover:bg-[rgba(255,130,89,0.6)] bg-white  shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Adverts</p>
            <div className="flex flex-row items-center gap-6"><Tag className="text-black w-8 h-8" />
              <p className="font-bold text-2xl">{`${data.totalAdverts}`}</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 hover:bg-[rgba(255,130,89,0.6)] shadow-xl">
            <p className="text-[#cec9c9] pb-5">Paid Adverts</p>
            <div className="flex flex-row items-center gap-6"><Wallet className="text-black w-8 h-8" />
              <p className="font-bold text-2xl">{`${data.paidAdverts}`}</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 hover:bg-[rgba(255,130,89,0.6)] shadow-xl">
            <p className="text-[#cec9c9] pb-5">Unpaid Adverts</p>
            <div className="flex flex-row items-center gap-6"><BadgeX className="text-black w-8 h-8" />
              <p className="font-bold text-2xl">{`${data.unpaidAdverts}`}</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 hover:bg-[rgba(255,130,89,0.6)] shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Revenue</p>
            <div className="flex flex-row gap-6"><Banknote className="text-black w-8 h-8" />
            <p className="font-bold text-2xl">Gh345.0</p></div>
          </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[60%] h-[60vh] border bg-white border-none rounded-2xl">
            <div className="w-[100%] h-[50vh] text-black p-8 ">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-4 tracking-tight">
                Monthly <span className="text-[#FF8259]">Sales</span> vs. <span className="text-[#B2C6D5]">Ad Spending</span>
              </p>
              <StackedChart />
            </div></div>
            <div className=" w-full lg:w-[40%] text-black p-8 ">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-4 tracking-tight">
                Order Status Breakdown</p>
              <PieChart />
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="font-bold text-2xl p-4">Order Details</p>
            <table className="w-[90%] border border-solid border-[#FE5D26]">
              <thead>
                <tr className="shadow-xl">
                  <th className="p-3 ">OrderId</th>
                  <th className="p-3">Customer Name</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Status </th>
                  <th className="p-3">Contact</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3">#839201</td>
                  <td className="p-3">Kwame Mensah</td>
                  <td className="p-3">Accra</td>
                  <td className="p-3">Delivered</td>
                  <td className="p-3">+233201234567</td>
                </tr>
                <tr>
                  <td className="p-3">#847362</td>
                  <td className="p-3">Ying Yue</td>
                  <td className="p-3">Shanghai</td>
                  <td className="p-3">Pending</td>
                  <td className="p-3">+8613712345678</td>
                </tr>
                <tr>
                  <td className="p-3">#753920</td>
                  <td className="p-3">Efua Addo</td>
                  <td className="p-3">Kumasi</td>
                  <td className="p-3">Shipped</td>
                  <td className="p-3">+233542346789</td>
                </tr>
                <tr>
                  <td className="p-3">#920173</td>
                  <td className="p-3">Li Wei</td>
                  <td className="p-3">Beijing</td>
                  <td className="p-3">Delivered</td>
                  <td className="p-3">+8613809876543</td>
                </tr>
                <tr>
                  <td className="p-3">#110238</td>
                  <td className="p-3">Abena Boateng</td>
                  <td className="p-3">Takoradi</td>
                  <td className="p-3">Processing</td>
                  <td className="p-3">+233262345678</td>
                </tr>
                <tr>
                  <td className="p-3">#642019</td>
                  <td className="p-3">Zhang Ning</td>
                  <td className="p-3">Guangzhou</td>
                  <td className="p-3">Cancelled</td>
                  <td className="p-3">+8615998765432</td>
                </tr>
                <tr>
                  <td className="p-3">#582310</td>
                  <td className="p-3">Kojo Asante</td>
                  <td className="p-3">Tema</td>
                  <td className="p-3">Delivered</td>
                  <td className="p-3">+233553216789</td>
                </tr>
                <tr>
                  <td className="p-3">#381024</td>
                  <td className="p-3">Chen Xi</td>
                  <td className="p-3">Chengdu</td>
                  <td className="p-3">Returned</td>
                  <td className="p-3">+8613211122334</td>
                </tr>
                <tr>
                  <td className="p-3">#470128</td>
                  <td className="p-3">Ama Serwaa</td>
                  <td className="p-3">Cape Coast</td>
                  <td className="p-3">Shipped</td>
                  <td className="p-3">+233509876543</td>
                </tr>
                <tr>
                  <td className="p-3">#590134</td>
                  <td className="p-3">Wang Lei</td>
                  <td className="p-3">Shenzhen</td>
                  <td className="p-3">Delivered</td>
                  <td className="p-3">+8618012345678</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </>
      )
}