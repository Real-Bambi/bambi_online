import SideBar from "../../components/SideBar"
import StackedChart from "../../components/StackedChart"



export default function DashPage1 () {
  return(
      <>
      <SideBar/>
      <div className="bg-[#F5F5F5] h-[full] w-[80%] ml-[20%] p-10 ">
        <p className="font-bold text-5xl text-black mb-10 ">Welcome , Dede</p>

        <div class="grid grid-cols-4 gap-4 mb-6">
          <div className=" rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 bg-[rgba(255,130,89,0.6)] shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 hover:bg-[rgba(255,130,89,0.6)] shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 hover:bg-[rgba(255,130,89,0.6)] shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6  hover:scale-110 hover:rotate-6 hover:bg-[rgba(255,130,89,0.6)] shadow-xl">
            <p className="text-[#cec9c9] pb-5">Total Sales</p>
            <div className="flex flex-row gap-6"><img src="" alt="icon" />
            <p className="text-bold text-2xl">$2400.00</p></div>
          </div>
          
        </div>
        <div className="w-[60%] h-70 border border-white rounded-2xl bg-white text-black p-8 shadow-xl">
          <p className="font-bold">Purchase Rate</p>
          <StackedChart/>
        </div>

        <div>
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
                <td className="p-3 ">#534728</td>
                <td className="p-3">Willow Brian</td>
                <td className="p-3">Oklahoma</td>
                <td className="p-3">Delivered</td>
                <td className="p-3">+2337766827</td>
              </tr>
              <tr>
                <td className="p-3 ">#534728</td>
                <td className="p-3">Willow Brian</td>
                <td className="p-3">Oklahoma</td>
                <td className="p-3">Delivered</td>
                <td className="p-3">+2337766827</td>
              </tr>
              <tr>
                <td className="p-3 ">#534728</td>
                <td className="p-3">Willow Brian</td>
                <td className="p-3">Oklahoma</td>
                <td className="p-3">Delivered</td>
                <td className="p-3">+2337766827</td>
              </tr>
              <tr>
                <td className="p-3 ">#534728</td>
                <td className="p-3">Willow Brian</td>
                <td className="p-3">Oklahoma</td>
                <td className="p-3">Delivered</td>
                <td className="p-3">+2337766827</td>
              </tr>
              <tr>
                <td className="p-3 ">#534728</td>
                <td className="p-3">Willow Brian</td>
                <td className="p-3">Oklahoma</td>
                <td className="p-3">Delivered</td>
                <td className="p-3">+2337766827</td>
              </tr>
              
              <tr>
                <td className="p-3 ">#534728</td>
                <td className="p-3">Willow Brian</td>
                <td className="p-3">Oklahoma</td>
                <td className="p-3">Delivered</td>
                <td className="p-3">+2337766827</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}