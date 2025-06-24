import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis , PieChart, Pie, Cell,} from "recharts";

export default function StackedChart() {
   const data = [
  { name: "Jan", uv: 400, pv:300 },
  { name: "Feb", uv: 300, pv:500},
  { name: "Mar", uv: 500, pv:900 },
  { name: "Apr", uv: 200, pv:600 },
  { name: "May", uv: 600, pv:100 },
  { name: "Jun", uv: 700, pv:600 },
  { name: "Jul", uv: 1000, pv:300 },
  { name: "Aug", uv: 400, pv:400 },
  { name: "Sep", uv: 300, pv:500 },
  { name: "Oct", uv: 800, pv:300 },
  { name: "Nov", uv: 600, pv:700 },
  { name: "Dec", uv: 500, pv:300 }
  
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
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#FE5D26" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#B2C6D5" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>

        </>


    )
}

    
