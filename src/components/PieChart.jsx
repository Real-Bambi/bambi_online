import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


export default function Chart() {

const data = [
  { name: "Fashion", value: 5 },
  { name: "Consumer Goods", value: 1 },
  { name: "Beauty", value: 4 },
];


const COLORS = ["#FF8259", "#B2C6D5" ,"#e0f2fe"];

return(

<PieChart width={400} height={300}>
  <Pie
    data={data}
    cx="50%"
    cy="50%"
    labelLine={false}
    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
    outerRadius={100}
    fill="#8884d8"
    dataKey="value"
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>

);n}
