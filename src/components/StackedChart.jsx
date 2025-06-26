import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis , PieChart, Pie, Cell,} from "recharts";

export default function StackedChart() {
  const data = [
  { name: "Jan", sales: 12, adSpending: 4 },
  { name: "Feb", sales: 7, adSpending: 5 },
  { name: "Mar", sales: 13, adSpending: 9 },
  { name: "Apr", sales: 5, adSpending: 3 },
  { name: "May", sales: 14, adSpending: 6 },
  { name: "Jun", sales: 15, adSpending: 8 },
  { name: "Jul", sales: 11, adSpending: 10 },
  { name: "Aug", sales: 9, adSpending: 7 },
  { name: "Sep", sales: 10, adSpending: 6 },
  { name: "Oct", sales: 13, adSpending: 11 },
  { name: "Nov", sales: 14, adSpending: 12 },
  { name: "Dec", sales: 15, adSpending: 13 }
];

    return(
        
        <>
        
          <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stackId="1" stroke="#8884d8" fill="#FE5D26" />
          <Area type="monotone" dataKey="adSpending" stackId="1" stroke="#82ca9d" fill="#B2C6D5" />
        </AreaChart>
      </ResponsiveContainer>

        </>
    )
}

    
